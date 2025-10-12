<script setup lang="ts">
import {ref} from 'vue'

interface FeatureCard {
  icon: string
  title: string
  description: string
}

const features = ref<FeatureCard[]>([
  {
    icon: '🎨',
    title: '优雅设计',
    description: '遵循苹果设计语言，提供极致的视觉体验'
  },
  {
    icon: '⚡',
    title: '极致性能',
    description: '优化的代码结构，流畅的交互体验'
  },
  {
    icon: '📱',
    title: '响应式布局',
    description: '适配各种设备屏幕，随时随地完美展示'
  },
  {
    icon: '🔧',
    title: '易扩展性',
    description: '模块化设计，方便功能扩展与维护'
  }
])

const tools = ref<string[]>([
  'Vue 3',
  'TypeScript',
  'Tailwind CSS',
  'Vite'
])
</script>

<template>
  <div class="min-h-full">
    <!-- Hero Section -->
    <section class="py-20 md:py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="p-1 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-500 dark:from-gray-200 dark:to-gray-400 mb-6">
          iOS Club - Design
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          基于 Vue 3 和 Tailwind CSS 构建的苹果风格设计系统，专注于简洁、优雅和高性能的用户体验。
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
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">核心特性</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            我们专注于提供最佳的设计工具和开发体验
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
              v-for="(feature, index) in features"
              :key="index"
              class="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-600"
          >
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">技术栈</h2>
          <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            使用现代前端技术构建，保证性能和开发体验
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <div
              v-for="(tool, index) in tools"
              :key="index"
              class="px-6 py-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            {{ tool }}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">准备好开始了吗？</h2>
        <p class="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
          加入我们，一起创造令人惊叹的用户界面体验
        </p>
        <button
            class="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition duration-300 ease-in-out transform hover:-translate-y-1 font-medium">
          立即体验
        </button>
      </div>
    </section>
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