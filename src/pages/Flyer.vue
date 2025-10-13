<template>
  <div class="p-6 flex items-center justify-center">
    <div class="bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white" id="flyer">
      <!-- 主容器 -->
      <div class="container mx-auto px-4 py-8 max-w-6xl">

        <!-- 头部创意爆发图形区域 -->
        <div class="pt-16 pb-12 flex items-center justify-center">
          <img src="/assets/FridgeMagnet.png" class="" alt="">
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
          <!-- 卡片1：Apple官方 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-cyan-400">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                </svg>
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
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
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
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
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
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-green-300">与Apple结伴</h3>
              <p class="text-gray-300 text-sm">专家与学者的交流讨论</p>
            </div>
          </div>

          <!-- 卡片5：Apple官方活动 -->
          <div
              class="flex items-center justify-center">
              <img src="/assets/img.png" class="h-40" alt=""/>
          </div>

          <!-- 卡片6：合作软件开发 -->
          <div
              class="group relative backdrop-blur-sm rounded-2xl p-8">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-20 h-20 flex items-center justify-center text-blue-400">
                <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
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
    <button @click="exportToPng" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      导出为PNG
    </button>
  </div>
</template>

<script setup>
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
div{
  font-family: PingFang SC, Helvetica, sans-serif;
}
</style>