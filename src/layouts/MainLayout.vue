<template>
  <div class="main-layout">
    <!-- 头部 -->
    <header class="layout-header">
      <div class="header-content">
        <button
            @click="toggleSidebar"
            class="sidebar-toggle p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 mr-2 md:hidden"
            aria-label="切换侧边栏"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <h1>iOS Design</h1>
      </div>
      <!-- 主题切换按钮 -->
      <div class="theme-toggle">
        <button
            @click="toggleTheme"
            class="p-2 rounded-full bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            :aria-label="isDarkMode ? '切换到亮色模式' : '切换到暗黑模式'"
        >
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
        </button>
      </div>
    </header>

    <div class="layout-container">
      <!-- 侧栏菜单 -->
      <aside
          class="layout-sidebar z-30"
          :class="{ 'hidden': !isSidebarOpen, 'absolute': isMobile, 'md:relative': isMobile, 'md:block': isMobile }"
      >
        <nav class="sidebar-menu">
          <ul>
            <li class="menu-item" :class="{ active: $route.name === 'Home' }">
              <router-link to="/" @click="closeSidebar">首页</router-link>
            </li>
            <li class="menu-item" :class="{ active: $route.name === 'CardHolder' }">
              <router-link to="/card-holder" @click="closeSidebar">卡套 - 2024版</router-link>
            </li>
            <li class="menu-item" :class="{ active: $route.name === 'CustomCardHolder' }">
              <router-link to="/custom-card-holder" @click="closeSidebar">卡套 - 2024版 - 客制化</router-link>
            </li>
            <li class="menu-item" :class="{ active: $route.name === 'FridgeMagnet' }">
              <router-link to="/fridge-magnet" @click="closeSidebar">冰箱贴</router-link>
            </li>
            <li class="menu-item" :class="{ active: $route.name === 'Flyer' }">
              <router-link to="/flyer" @click="closeSidebar">传单 - 2023版</router-link>
            </li>
            <li class="menu-item" :class="{ active: $route.name === 'Fan' }">
              <router-link to="/fan" @click="closeSidebar">扇子</router-link>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 遮罩层 -->
      <div 
        v-if="isSidebarOpen && isMobile" 
        class="fixed inset-0 bg-black/50 z-10 md:hidden"
        @click="closeSidebar"
      ></div>

      <!-- 右侧页面显示区域 -->
      <main class="layout-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
import {ref, onMounted, onUnmounted} from 'vue'

const $route = useRoute()
const isDarkMode = ref(false)
const isSidebarOpen = ref(false)
const isMobile = ref(false)

// 检查是否为移动设备
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
  if (!isMobile.value) {
    isSidebarOpen.value = true
  }
}

// 切换侧边栏
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 关闭侧边栏
const closeSidebar = () => {
  if (isMobile.value) {
    isSidebarOpen.value = false
  }
}

// 检查系统主题偏好
const checkSystemTheme = () => {
  isDarkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// 切换主题
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.documentElement.classList.toggle('dark', isDarkMode.value)
  localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light')
}

// 初始化主题
const initTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    checkSystemTheme()
  }
  document.documentElement.classList.toggle('dark', isDarkMode.value)
}

// 监听系统主题变化
let mediaQuery: MediaQueryList | null = null
const handleSystemThemeChange = (e: MediaQueryListEvent) => {
  const savedTheme = localStorage.getItem('theme')
  if (!savedTheme) {
    isDarkMode.value = e.matches
    document.documentElement.classList.toggle('dark', isDarkMode.value)
  }
}

// 监听窗口大小变化
let resizeHandler: (() => void) | null = null

onMounted(() => {
  initTheme()
  checkMobile()

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  // 使用 addEventListener 替代 addListener
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  }

  resizeHandler = () => {
    checkMobile()
  }

  window.addEventListener('resize', resizeHandler)
})

onUnmounted(() => {
  if (mediaQuery) {
    // 使用 removeEventListener 替代 removeListener
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }

  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
})
</script>

<style scoped>
.main-layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-header {
  height: 60px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 100;
  justify-content: space-between;
}

.dark .layout-header {
  background-color: #1f1f1f;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.header-content {
  display: flex;
  align-items: center;
}

.header-content h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.dark .header-content h1 {
  color: #fff;
}

.theme-toggle {
  margin-right: 1rem;
}

.layout-container {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.layout-sidebar {
  width: 220px;
  background-color: #f8f9fa;
  border-right: 1px solid #eaeaea;
  padding: 20px 0;
  z-index: 20;
  height: calc(100vh - 60px);
  top: 60px;
}

.dark .layout-sidebar {
  background-color: #1f1f1f;
  border-right: 1px solid #333;
}

.sidebar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  padding: 10px 20px;
}

.menu-item a {
  text-decoration: none;
  color: #333;
  display: block;
  transition: all 0.3s;
}

.dark .menu-item a {
  color: #ddd;
}

.menu-item a:hover,
.menu-item.active a {
  color: #ff9977;
  font-weight: 500;
}

.layout-content {
  flex: 1;
  overflow-y: auto;
  background-color: #fff;
  height: calc(100vh - 60px);
}

.dark .layout-content {
  background-color: #121212;
}

/* 移动端适配 */
@media (max-width: 767px) {
  .layout-sidebar {
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    top: 0;
  }

  .layout-sidebar:not(.hidden) {
    transform: translateX(0);
  }

  .layout-content {
    width: 100%;
  }
}
</style>