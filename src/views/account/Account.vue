<template>
  <div class="bg-img">
    <van-image :src="img" fit="cover" />
    <div style="height:50px"></div>
    <!-- 头像 -->
    <header @click="login()">
      <van-image
        :src="avatar"
        fit="cover"
        round
        width="5rem"
        height="5rem"
        style=" vertical-align:middle"
      />
      <span v-if="id">{{id}}</span>
      <span v-else>Id:123456</span>
    </header>
    <!-- 图标Order -->
    <div class="box">
      <van-cell-group :border="false">
        <van-cell title="My Orders" is-link>
          <template #icon>
            <van-icon :name="order" class="search-icon" size="1.5rem" />
          </template>
        </van-cell>
        <template>
          <van-grid :border="false" :icon-size="44" :column-num="4">
            <van-grid-item class="item" v-for="(item,index) in icon_info" :key="index">
              <template #default>
                <van-icon :name="item.icon" size="3rem" badge />
                <span>{{item.text}}</span>
              </template>
            </van-grid-item>
          </van-grid>
        </template>
      </van-cell-group>
    </div>
    <!-- 单元格1 -->
    <div class="box">
      <van-cell is-link>
        <template #title>
          <span>My Search</span>
        </template>
        <template #icon>
          <van-icon :name="search" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell value="0" is-link>
        <template #title>
          <span>Collection</span>
        </template>
        <template #icon>
          <van-icon :name="collection" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell value="0" is-link>
        <template #title>
          <span>Coupons</span>
        </template>
        <template #icon>
          <van-icon :name="coupons" size="1.5rem" />
        </template>
      </van-cell>
    </div>
    <!-- 单元格2 -->
    <div class="box">
      <van-cell is-link>
        <template #title>
          <span>My Address</span>
        </template>
        <template #icon>
          <van-icon :name="address" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell value="Thailand" is-link>
        <template #title>
          <span>Change Region</span>
        </template>
        <template #icon>
          <van-icon :name="region" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell value="English" is-link>
        <template #title>
          <span>Change Language</span>
        </template>
        <template #icon>
          <van-icon :name="language" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span>Customer Service</span>
        </template>
        <template #icon>
          <van-icon :name="customer" size="1.5rem" />
        </template>
      </van-cell>
      <van-cell is-link>
        <template #title>
          <span>Invitation Code</span>
        </template>
        <template #icon>
          <van-icon :name="invitation" size="1.5rem" />
        </template>
      </van-cell>
    </div>
    <!-- 单元格3 -->
    <div class="box">
      <van-cell is-link>
        <template #title>
          <span>Setting</span>
        </template>
        <template #icon>
          <van-icon :name="setting" size="1.5rem" />
        </template>
      </van-cell>
    </div>
    <!-- 底部撑高 -->
    <div style="height:3rem;background-color:#eee"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("@/assets/image/account/accountsbg.png"),
      avatar: require("@/assets/image/account/woman.png"),
      order: require("@/assets/image/account/icon_order.png"),
      icon_info: [
        {
          text: "To Pay",
          icon: require("@/assets/image/account/icon_order01.png")
        },
        {
          text: "To Ship",
          icon: require("@/assets/image/account/icon_order02.png")
        },
        {
          text: "To Receive",
          icon: require("@/assets/image/account/icon_order03.png")
        },
        {
          text: "To Refund",
          icon: require("@/assets/image/account/icon_order04.png")
        }
      ],
      search: require("@/assets/image/account/icon_search.png"),
      collection: require("@/assets/image/account/icon_collection.png"),
      coupons: require("@/assets/image/account/icon_coupon.png"),
      address: require("@/assets/image/account/icon_address.png"),
      region: require("@/assets/image/account/icon_country.png"),
      language: require("@/assets/image/account/icon_language.png"),
      customer: require("@/assets/image/account/icon_service.png"),
      invitation: require("@/assets/image/account/icon_invitation_code.png"),
      setting: require("@/assets/image/account/icon_set.png"),
      id: 456788
    };
  },
  mounted() {
    
  },
  methods: {
    login(){
      this.$router.push({
        path: "login"
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-img {
  background-color: #f8f8fa;
  position: absolute;
  z-index: -2;
  width: 100vw;
  max-width: 750px;
}
.bg-img > .van-image {
  position: fixed;
  z-index: -1;
}
.box {
  width: 90vw;
  max-width: 600px;
  height: auto;
  margin: 0 1rem 0.8rem 1rem;
  border-radius: 0.5rem;
  background: #fff;
  padding: 0.25rem;
}
header {
  margin: 1rem;
  span {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
      Segoe UI, Arial, Roboto, PingFang SC, Hiragino Sans GB, Microsoft Yahei,
      sans-serif;
    color: #fff;
    margin-left: 0.5rem;
  }
}
.item {
  span {
    font-size: 0.7rem;
    color: #333;
  }
}
.van-cell {
  span {
    font-size: 0.8rem;
    color: #333;
    margin-left: 0.2rem;
  }
}
.van-cell::after {
  border-bottom: 2px solid #ebedf0;
}
</style>
