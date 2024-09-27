<script setup lang="ts">


</script>

<template>

  <n-gradient-text :size="60" type="info">
    Help
  </n-gradient-text>

</template>

<!-- scoped关键词是限定样式的作用范围 -->
<style scoped>
.n-gradient-text {
  font-size: 24px; /* 增大字号 */
  font-weight: bold; /* 加粗 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 20px; /* 与下方元素的间距 */
  background: linear-gradient(90deg, #D5E3D4, #56ab2f); /* 浅绿色渐变色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* 渐变文字颜色 */
}
</style>
