<template>
  <div class="p-6 flex items-center justify-center">
    <div class="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white" id="flyer">
      <!-- 主容器 -->
      <div class="container mx-auto px-4 py-8 max-w-6xl">

        <!-- 头部创意爆发图形区域 -->
        <div class="pt-16 pb-12 flex items-center justify-center">
          <svg x="0px"
               y="0px"
               width="360px" height="360px" viewBox="0 0 106.063 106.063"
               xml:space="preserve">
  <defs>
    <linearGradient id="coldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#f9bf65"/>
      <stop offset="9.09%" stop-color="#ffab6b"/>
      <stop offset="18.18%" stop-color="#ff9977"/>
      <stop offset="27.27%" stop-color="#fc8986"/>
      <stop offset="36.36%" stop-color="#ef7e95"/>
      <stop offset="45.45%" stop-color="#e47da6"/>
      <stop offset="54.54%" stop-color="#d37fb5"/>
      <stop offset="63.63%" stop-color="#bf83c1"/>
      <stop offset="72.72%" stop-color="#ab8dcf"/>
      <stop offset="81.81%" stop-color="#9597d8"/>
      <stop offset="90.9%" stop-color="#7fa0dc"/>
      <stop offset="100%" stop-color="#6ca7da"/>
    </linearGradient>

    <!-- 渐变外阴影滤镜 -->
    <!--    <filter id="gradientShadow" x="-50%" y="-50%" width="200%" height="200%">-->
    <!--      <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="oklch(29.3% 0.066 243.157)" flood-opacity="0.6"/>-->
    <!--    </filter>-->
  </defs>
            <g fill="url(#coldGradient)">
    <path d="M84.038,65.462c0.117-0.399,0.238-0.796,0.341-1.205c4.402-17.539-6.342-38.275-24.523-49.193
      c7.968,10.801,11.49,23.883,8.36,35.324c-0.279,1.02-0.615,2-0.986,2.952c-0.403-0.264-0.91-0.565-1.591-0.94
      c0,0-18.086-11.167-37.688-30.918c-0.514-0.519,10.453,15.675,22.899,28.824C44.987,47.014,28.646,35.124,18.3,25.655
      c1.271,2.12,2.783,4.161,4.444,6.126c8.64,10.956,19.906,24.475,33.404,34.855c-9.484,5.804-22.885,6.255-36.227,0.006
      c-3.3-1.547-6.403-3.413-9.274-5.533c5.648,9.034,14.347,16.828,24.934,21.379c12.625,5.426,25.18,5.058,34.531,0.089l-0.007,0.011
      c0.032-0.02,0.067-0.041,0.1-0.061c0.42-0.225,0.836-0.457,1.242-0.7c4.517-2.319,13.331-4.607,18.067,4.609
      c1.166,2.268,3.645-9.752-5.468-20.965C84.043,65.467,84.041,65.465,84.038,65.462z"/>
  </g>
</svg>
        </div>

        <!-- 标题区域 -->
        <div class="text-center mb-16 space-y-4">
          <h1 class="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 animate-gradient">
            iOS Club <span class="text-white">众创空间秋季招募</span>
          </h1>
          <p class="text-2xl md:text-3xl text-gray-300 font-light jetbrains-font">
            Join Club, Blow mind.
          </p>
        </div>

        <!-- 特性卡片网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-cyan-400">
                <Icon icon="heroicons:academic-cap-20-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-cyan-300">Apple官方×西建大</h3>
              <p class="text-gray-300 text-sm">最大的创新创业社团</p>
            </div>
          </div>

          <!-- 卡片2：零基础学编程 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-purple-400">
                <Icon icon="lucide:code-xml" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-purple-300">零基础学编程</h3>
              <p class="text-gray-300 text-sm">学姐学长手把手教编程</p>
            </div>
          </div>

          <!-- 卡片3：不只是Apple -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-pink-400">
                <Icon icon="mdi:account-group" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-pink-300">不只是Apple</h3>
              <p class="text-gray-300 text-sm">全体编程、数码爱好者的盛宴</p>
            </div>
          </div>

          <!-- 卡片4：与Apple结伴 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-green-400">
                <Icon icon="heroicons:chat-bubble-left-ellipsis-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-green-300">与Apple结伴</h3>
              <p class="text-gray-300 text-sm">专家与学者的交流讨论</p>
            </div>
          </div>

          <!-- 卡片5：Apple官方活动 -->
          <div
              class="flex items-center justify-center">
            <img src="/assets/qrcode.png" class="h-40" alt=""/>
          </div>

          <!-- 卡片6：合作软件开发 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-blue-400">
                <Icon icon="heroicons:bolt-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-blue-300">合作软件开发</h3>
              <p class="text-gray-300 text-sm">团队编程共享成果</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="fixed bottom-6 right-6">
    <button @click="exportToPng"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      导出为PNG
    </button>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import domtoimage from 'dom-to-image';

// 导出为PNG功能
const exportToPng = async () => {
  const element = document.querySelector('#flyer');
  if (element) {
    try {
      // 使用 dom-to-image 导出元素
      const dataUrl = await domtoimage.toPng(element, {
        quality: 1.0,
        width: element.offsetWidth,
        height: element.offsetHeight,
        style: {
          transformOrigin: 'top left'
        }
      });

      const link = document.createElement('a');
      link.download = 'ios-flyer.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('导出失败:', error);
      alert('导出失败，请重试');
    }
  }
};
</script>

<style scoped>
div {
  font-family: PingFang SC, Helvetica, sans-serif;
}
</style>