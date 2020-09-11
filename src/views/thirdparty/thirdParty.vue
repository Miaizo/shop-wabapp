<template>
  <div>
    <van-sticky offset-top="1rem">
      <van-icon name="arrow-left" size="2rem" color="gray" @click="back()" />
    </van-sticky>
    <van-image :src="data.imageLink" fit="contain" width="100%" lazy-load />
    <div class="info">
      <div style="margin-left:1rem">
        <div class="price">{{this.data.salePrice}}</div>
        <div class="markingPrice" v-if="this.data.price">{{this.data.price}}</div>
      </div>
      <div class="flex">
        <van-image :src="saveImg" fit="contain" height="32px" style="margin-right:-1.5rem" />
        <van-button color="#FFE2CC" size="small" class="price-btn">
          <span class="save-money">Save</span>
          <span class="save-money">{{this.commissionList.commissionMember}}</span>
        </van-button>
      </div>
    </div>
    <div style="margin-left: 1rem;">
      <div class="description">
        <van-image
          class="plat-icon"
          fit="contain"
          :src="platformImg"
          v-if="this.origin == 'shopee'"
        />
        <van-image
          class="plat-icon"
          fit="contain"
          :src="lazadaImg"
          v-else-if="this.origin == 'lazada'"
        />
        <div class="van-multi-ellipsis--l2">{{this.data.title}}</div>
      </div>
    </div>
    <div class="van-hairline--bottom" style="margin:0.5rem"></div>
    <div style="margin: 1rem;">
      <span
        style="white-space:pre-wrap"
        v-if="this.data.productDescription"
      >{{ this.data.productDescription }}</span>
    </div>
    <van-divider></van-divider>
    <van-goods-action text="123">
      <van-goods-action-icon :icon="serviceImg" text="Service" />
      <van-goods-action-button type="warning" text="Share" @click="shareBtn" />
      <van-goods-action-button type="danger" text="Buy Now" />
    </van-goods-action>
  </div>
</template>
<script type="text/javascript" src="./dist/clipboard.min.js"></script>
<script>
import { thirdPartyProductDetails } from "@/api/api";
export default {
  data() {
    return {
      saveImg: require("../../assets/image/home/icon_info_save.png"), //优惠图片
      platformImg: require("../../assets/image/home/platform_logo.png"), //shopee小图标
      lazadaImg: require("../../assets/image/home/lazada_logo.png"), //lazada小图标
      serviceImg: require("../../assets/image/home/account_service.png"), //咨询服务图片
      bgImg: "",
      id: "",
      origin: "",
      countryCode: "TH",
      data: {},
      commissionList: {},
      msg: "https://seashop.shop/index"
    };
  },
  created() {
    this.init();
    thirdPartyProductDetails(this.id, this.origin, this.countryCode).then(
      res => {
        this.data = res.data;
        this.commissionList = res.data.commissionList;
        this.bgImg = res.data.imageLink;
      }
    );
  },
  methods: {
    init() {
      this.id = this.$route.params.id;
      this.origin = this.$route.params.origin;
    },
    back() {
      this.$router.back();
    },
    shareBtn() {
      this.$copyText(this.msg).then(
        e => {
          this.$toast.success("Copied Successfully");
          console.log(e);
        },
        e => {
          this.$toast.fail("Copied Failed");
          console.log(e);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
}
.info {
  display: flex;
  justify-content: space-between;
}
.price {
  color: #fe5427;
  font-size: 20px;
  font-weight: 600;
}
.markingPrice {
  color: #a4a4a4;
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
}
.save-money {
  color: #fe5427;
}
.price-btn {
  margin-right: 0.5rem;
}
.description {
  display: flex;
  // align-items: flex-end;
}
.plat-icon {
  width: 1rem;
  height: 1rem;
  margin-top: 5px;
  flex-shrink: 0;
}
.van-ellipsis {
  margin-left: 5px;
}
.font-size {
  font-size: 40px;
}
.van-multi-ellipsis--l2 {
  vertical-align: middle;
}
</style>