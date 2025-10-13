<script setup lang="ts">

</script>

<template>
  <div class="py-20 md:py-32">
    <div class="container mx-auto px-4 text-center">
      <h1 class="p-1 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-200 dark:to-gray-400 mb-6">
        iOS Club - Design
      </h1>
      <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        基于 Vue 3 和 Tailwind CSS 构建的设计稿件网站，专注于简洁、优雅。
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <button
            class="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 hover:-translate-y-1">
          开始使用
        </button>
        <button
            class="px-8 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition duration-300 hover:-translate-y-1">
          查看文档
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 渐变背景动画效果 */
@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>