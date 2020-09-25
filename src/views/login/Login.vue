<template>
  <div class="bg-img">
    <van-icon name="arrow-left" size="30" @click="back()" />
    <div class="box">
      <h1>Login</h1>
      <van-cell-group>
        <van-field v-model="number" placeholder="Please enter mobile number">
          <template #left-icon>
            <van-image :src="countryImg" fit="cover" style="vertical-align:middle" />
          </template>
        </van-field>
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="code" placeholder="Please enter verification code">
          <template #button>
              <span v-if="!countDown" style="color:#fd6f04;font-size:1rem" @click="getCode">get code</span>
              <span v-else style="color:#fd6f04;font-size:1rem">{{countDown}}s</span>
          </template>
        </van-field>
      </van-cell-group>
      <van-button color="#ff8602" text="Login" block></van-button>
    </div>
  </div>
</template>

<script>
import { getVerifyCode } from "@/api/api";
export default {
  data() {
    return {
      number: "",
      code: "",
      countryCode: "66",
      countDown: 0,
      countryImg: require("../../assets/image/country/TH.png"),
      timer: null,
      show: true
    };
  },
  methods: {
    back() {
      this.$router.push("account");
    },
    getCode() {
      if(!this.show) return
      this.countDown = 60;
      this.show = false;
      let timer = setInterval(() => {
        if (this.countDown > 0) {
          this.countDown--;
        } else {
          this.show = true;
          clearInterval(timer);
        }
      }, 1000);
      getVerifyCode(this.number,this.countryCode).then((res)=>{
        switch (res.code) {
          case 401:
            this.$toast(res.msg)
            break;
          default:
            break
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-img {
  background-color: #f8f8fa;
  width: 100vw;
  max-width: 750px;
  height: 100vh;
}
.van-icon {
  margin: 1rem;
}
h1 {
  padding: 5rem;
  color: #fd6f04;
  text-align: center;
}
.box {
  width: 90vw;
  max-width: 600px;
  height: auto;
  margin: 0 1rem 0.8rem 1rem;
  border-radius: 0.5rem;
  // background: red;
  padding: 0.25rem;
}
.van-cell-group {
  margin: 1rem 0;
}
</style>