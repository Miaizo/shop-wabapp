<template>
  <div>
    <div>
      <van-cell title="单元格" is-link icon="search" />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: [
        {
          serach: require("../../assets/image/account/icon_search.png")
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped></style>
