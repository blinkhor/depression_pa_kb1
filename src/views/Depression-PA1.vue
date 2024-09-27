<script lang="ts">
export default {
  data() {
    return {
      // 这个数组包含了所有要展示的效果
      benefits : [
      'Reduce depressive symptoms',
      'Enhance positive mood',
      'Reduce the prevalence of depressive symptoms',
      'Reduce the risk of cardiovascular disease',
      'Reduce functional disability',
      'Neuroprotective and brain activation effects',
      'Improve cardiorespiratory fitness',
      'Improve quality of life',
      'Improve sleep quality',
      'Improve cognitive function',
      'Improve social functions',
      'Improve stress level',
      'Improve work ability'
    ]
    };
  }
};
</script>

<template>

  <n-space vertical size="large" class="container">

      

    <n-layout-content style="display: flex; justify-content: center; align-items: center; padding: 24px; position: relative;width: 950px;margin-left: auto; margin-right: auto;">


    <n-gradient-text :size="30" type="info">
      The benefits of physical activity for depression
    </n-gradient-text>


    <n-card>
      <ul>
      <!-- 使用 v-for 指令循环渲染列表项 -->
      <li v-for="(benefit, index) in benefits" :key="index">
        {{ benefit }}
      </li>
    </ul>
    </n-card>

    </n-layout-content>

  </n-space>

</template>

<!-- scoped关键词是限定样式的作用范围 -->
<style scoped>

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* 使用更易读的字体 */
  background-color: #f0f2f5; /* 设定一个柔和的背景颜色 */
  color: #333; /* 主要文字颜色 */
  line-height: 1.6; /* 增加行间距提升阅读体验 */
  padding: 20px; /* 页面边缘留白 */
}

.container {
  max-width: 950px; /* 限制最大宽度以提升阅读体验 */
  margin: 0 auto; /* 水平居中 */
  background: #fff; /* 设置背景颜色为白色增加对比 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加轻微的阴影以提升层次感 */
  border-radius: 10px; /* 圆角边框 */
  padding: 24px; /* 内边距 */
}

.n-card {
  border: 1px solid #eaeaea; /* 给卡片增加轻微的边框 */
  padding: 20px; /* 卡片内边距 */
  border-radius: 8px; /* 卡片圆角 */
  margin-top: 20px; /* 卡片与上方元素间距 */
}

li{
  font-size: 14px;
}

.n-gradient-text {
  font-size: 24px; /* 增大字号 */
  font-weight: bold; /* 加粗 */
  text-align: center; /* 居中对齐 */
  margin-bottom: 20px; /* 与下方元素的间距 */
  background: linear-gradient(90deg, #D5E3D4, #56ab2f); /* 浅绿色渐变色 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* 渐变文字颜色 */
}



.guideline_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #D5E3D4;
}
</style>
