import { request, request2 } from "./http";
// 首页接口
export function homeConfig(countryCode, platform) {
  return request2({
    url: "/appHome/homeConfig",
    params: {
      countryCode,
      platform,
    },
    // headers: {
    //   countryCode: "TH"
    // }
  });
}
// 查询推荐商品（分平台）
export function queryProductRecommend(origin, countryCode, current) {
  return request({
    url: "/product/product/queryProductRecommend",
    params: {
      origin,
      countryCode,
      current
    }
  });
}
// 获取第三方商品详情
export function thirdPartyProductDetails(id, origin, countryCode) {
  return request({
    url: "product/product/all_origin/get/" + id,
    params: {
      origin,
      countryCode
    }
  });
}
// 获取验证码
export function getVerifyCode(phone, countryCode) {
  return request2({
    url: "user/getVerifyCode/",
    params: {
      mobile: phone,
      areaCode: countryCode,
      languageType: "EN"
    }
  });
}