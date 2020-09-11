<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src alt />
      </van-swipe-item>
    </van-swipe>

    <van-tabs v-model="active" sticky swipeable color="#fe5427">
      <van-tab title="Shopee">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :immediate-check="false"
          @load="onLoad"
        >
          <van-grid :border="false" :column-num="2" :center="false">
            <van-grid-item
              class="item"
              v-for="(item, index) in shopeeInfo"
              :key="index"
              @click="clickItems(item.id, item.platform)"
            >
              <van-image radius="10" :src="item.imageLink" height="150%" fit="contain" />
              <div class="info">
                <van-image
                  width="1rem"
                  height="1rem"
                  :src="platformImg"
                  style="margin-top:5px;flex-shrink:0;"
                />
                <div class="van-ellipsis">{{ item.title }}</div>
              </div>
              <div class="van-multi-ellipsis--l2">{{ item.productDescription }}</div>
              <span class="price">{{ item.salePrice }}</span>
              <span class="markingPrice" v-if="item.price">{{ item.price }}</span>
              <div class="save-btn">
                <span class="save-money">Save</span>
                <span
                  class="save-money"
                  v-if="memberLevel !== 2"
                >{{ item.commissionList.commissionMember }}</span>
                <span class="save-money" v-if="memberLevel == 2">
                  {{
                  item.commissionList.commissionShopkeeper
                  }}
                </span>
              </div>
              <!-- <van-button color="#FFE2CC"  size="large" block >
                <div class="save-money">Save</div>
                <div
                  class="save-money"
                  v-if="memberLevel !== 2"
                >{{ item.commissionList.commissionMember }}</div>
                <span class="save-money" v-if="memberLevel == 2">
                  {{
                  item.commissionList.commissionShopkeeper
                  }}
                </span>
              </van-button> -->
            </van-grid-item>
          </van-grid>
        </van-list>
      </van-tab>
      <van-tab title="Lazada">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          class="van-list"
        >
          <van-grid :border="false" :column-num="2" :center="false">
            <van-grid-item
              class="item"
              v-for="(item, index) in lazadaInfo"
              :key="index"
              @click="clickItems(item.id, item.platform)"
            >
              <van-image
                radius="10"
                :src="item.imageLink"
                width="100%"
                height="150%"
                fit="contain"
              />
              <div class="info">
                <van-image
                  width="1rem"
                  height="1rem"
                  :src="lazadaImg"
                  style="margin-top:5px;flex-shrink:0;"
                />
                <div class="van-ellipsis">{{ item.title }}</div>
              </div>
              <div class="van-multi-ellipsis--l2">{{ item.productDescription }}</div>
              <span class="price">{{ item.salePrice }}</span>
              <span class="markingPrice" v-if="item.price">{{ item.price }}</span>
              <div class="save-btn">
                <span class="save-money">Save</span>
                <span
                  class="save-money"
                  v-if="memberLevel !== 2"
                >{{ item.commissionList.commissionMember }}</span>
                <span class="save-money" v-if="memberLevel == 2">
                  {{
                  item.commissionList.commissionShopkeeper
                  }}
                </span>
              </div>
              <!-- <van-button color="#FFE2CC" size="small" block>
                <div class="save-money">
                  Save
                  <span v-if="memberLevel !== 2">{{ item.commissionList.commissionMember }}</span>
                  <span v-if="memberLevel == 2">
                    {{
                    item.commissionList.commissionShopkeeper
                    }}
                  </span>
                </div>
              </van-button> -->
            </van-grid-item>
          </van-grid>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { queryProductRecommend, homeConfig } from "@/api/api";
export default {
  name: "Home",
  data() {
    return {
      shopeeInfo: [],
      lazadaInfo: [],
      loading: false,
      finished: false,
      active: 0,
      platformImg: require("../../assets/image/home/platform_logo.png"),
      lazadaImg: require("../../assets/image/home/lazada_logo.png"),
      title: "",
      shopeePage: 1,
      lazadaPage: 1,
      productDescription: "",
      memberLevel: "1"
    };
  },
  created() {
    queryProductRecommend("shopee", "TH", this.shopeePage).then(res => {
      this.shopeeInfo = res.data.info;
      this.shopeePage++;
    });
    queryProductRecommend("lazada", "TH", this.lazadaPage).then(res => {
      this.lazadaInfo = res.data.info;
      console.log(res);
      this.lazadaPage++;
    });
    homeConfig("TH", "wap").then(res => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {
    onLoad() {
      if (this.active === 0) {
        queryProductRecommend("shopee", "TH", this.shopeePage).then(res => {
          for (let i of res.data.info) {
            this.shopeeInfo.push(i);
          }
          this.loading = false;
          this.shopeePage++;
        });
      }
      if (this.active === 1) {
        queryProductRecommend("lazada", "TH", this.lazadaPage).then(res => {
          for (let i of res.data.info) {
            this.lazadaInfo.push(i);
          }
          this.loading = false;
          this.lazadaPage++;
        });
      }
    },
    clickItems(id, origin) {
      this.$router.push({
        // path: "thirdParty",
        name: "thirdParty",
        params: {
          id,
          origin
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  text-overflow: ellipsis;
  margin-left: 5px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
.van-list {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.price {
  color: #fe5427;
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0 0 5px;
}
.markingPrice {
  color: #a4a4a4;
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
}
.save-money {
  color: #fe5427;
  display: inline-block;
}
.save-btn{
  background-color:#FFE2CC;
  height:4rem;
  font-size:12px;
  display:flex;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  align-items: flex-end;
}
.van-ellipsis {
  margin-left: 5px;
}
.item {
  max-width: 48vw;
  height: auto;
}
</style>
