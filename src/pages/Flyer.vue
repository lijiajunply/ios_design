<template>
  <div class="p-6 flex items-center justify-center">
    <div class="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900" id="flyer">
      <!-- 主容器 -->
      <div class="container mx-auto px-4 py-8 max-w-6xl">

        <!-- 头部创意爆发图形区域 -->
        <div class="pt-16 pb-20 flex items-center justify-center">
          <img src="/assets/Swift_logo_color.svg" alt="" class="h-52 w-52"/>
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
          <!-- 卡片1：Apple×西建大 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-cyan-400">
                <Icon icon="heroicons:academic-cap-20-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-cyan-300">Apple官方 × 西建大</h3>
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
              <h3 class="text-xl font-semibold text-purple-300">零基础？没在怕的</h3>
              <p class="text-gray-300 text-sm">学姐学长手把手教编程</p>
            </div>
          </div>

          <!-- 卡片3：实际项目开发经验 -->
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

          <!-- 卡片4：多样化活动 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-green-400">
                <Icon icon="heroicons:chat-bubble-left-ellipsis-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-green-300">精彩活动，应接不暇</h3>
              <p class="text-gray-300 text-sm">不止技术讲座、最新数码展</p>
            </div>
          </div>

          <!-- 卡片5：Apple官方活动 -->
          <div
              class="flex flex-col items-center justify-center">
            <img src="/assets/qrcode.png" class="h-32" alt="" crossorigin="anonymous"/>
            <p class="text-gray-300 text-sm font-semibold mt-3">速速扫码加入</p>
          </div>

          <!-- 卡片6：竞赛资源 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-blue-400">
                <Icon icon="heroicons:bolt-solid" class="w-16 h-16" />
              </div>
              <h3 class="text-xl font-semibold text-blue-300">不是纸上谈兵</h3>
              <p class="text-gray-300 text-sm">组队协作，开源项目，真实开发</p>
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
      const dataUrl = await domtoimage.toPng(element, {
        quality: 0.95,
        width: element.clientWidth * 3,
        height: element.clientHeight * 3,
        style: {
          transform: 'scale(3)',
          transformOrigin: 'top left',
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