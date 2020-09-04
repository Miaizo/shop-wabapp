import { request, request2 } from "./http";
// 首页接口
export function homeConfig(countryCode, platform) {
  return request2({
    url: "/appHome/homeConfig",
    params: {
      countryCode,
      platform
    },
    // headers: {
    //   'Content-Type': 'application/json' ,
    //   'countryCode': 66,
    //   'platform': "wap"
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
