<template>
  <div class="flex items-center justify-center">
    <!-- 团扇展示 -->
    <div class="relative">
      <!-- 团扇主体 -->
      <div class="relative fan-container">
        <!-- 扇面 -->
        <div class="fan-surface">
          <!-- 渐变层 -->
          <div class="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>

          <!-- 光泽效果 -->
          <div class="shine"></div>

          <!-- 花瓣装饰 -->
          <div class="petal petal-1"></div>
          <div class="petal petal-2"></div>
          <div class="petal petal-3"></div>
          <div class="petal petal-4"></div>
          <div class="petal petal-5"></div>
          <div class="petal petal-6"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
/* 团扇容器 */
.fan-container {
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: gentle-sway 6s ease-in-out infinite;
}

/* 扇面 */
.fan-surface {
  position: relative;
  width: 360px;
  height: 360px;
  background: linear-gradient(
      135deg,
      #a78bfa 0%,
      #ec4899 25%,
      #8b5cf6 50%,
      #3b82f6 75%,
      #a78bfa 100%
  );
  border-radius: 50%;
  overflow: hidden;
  animation: rotate-slowly 20s linear infinite;
}

/* 光泽效果 */
.shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
      105deg,
      transparent 40%,
      rgba(255, 255, 255, 0.3) 50%,
      transparent 60%
  );
  animation: shine-effect 4s ease-in-out infinite;
}

/* 花瓣装饰 */
.petal {
  position: absolute;
  background: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.1)
  );
  backdrop-filter: blur(10px);
}

.petal-1,
.petal-3,
.petal-5 {
  width: 80px;
  height: 80px;
  border-radius: 0 50% 0 50%;
}

.petal-2,
.petal-4,
.petal-6 {
  width: 60px;
  height: 60px;
  border-radius: 50% 0 50% 0;
}

.petal-1 {
  top: 15%;
  left: 38%;
  transform: rotate(30deg);
}

.petal-2 {
  top: 30%;
  right: 20%;
  transform: rotate(75deg);
}

.petal-3 {
  bottom: 30%;
  right: 15%;
  transform: rotate(150deg);
}

.petal-4 {
  bottom: 15%;
  right: 38%;
  transform: rotate(195deg);
}

.petal-5 {
  bottom: 30%;
  left: 15%;
  transform: rotate(270deg);
}

.petal-6 {
  top: 30%;
  left: 20%;
  transform: rotate(315deg);
}

/* 扇柄 */
.fan-handle {
  position: relative;
  margin-top: -20px;
  width: 30px;
  height: 180px;
}

/* 柄顶装饰 */
.handle-top {
  position: relative;
  width: 100%;
  height: 40px;
}

.handle-ring {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #f9fafb, #e5e7eb);
  border-radius: 50%;
  box-shadow:
      0 2px 10px rgba(0, 0, 0, 0.1),
      inset 0 2px 4px rgba(255, 255, 255, 0.8);
}

.handle-gem {
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  border-radius: 50%;
  box-shadow:
      0 0 20px rgba(236, 72, 153, 0.5),
      inset 0 0 10px rgba(255, 255, 255, 0.5);
}

/* 柄身 */
.handle-body {
  position: relative;
  width: 100%;
  height: 120px;
  background: linear-gradient(
      180deg,
      #f3f4f6 0%,
      #e5e7eb 50%,
      #d1d5db 100%
  );
  border-radius: 15px;
  box-shadow:
      0 4px 15px rgba(0, 0, 0, 0.1),
      inset 0 0 20px rgba(255, 255, 255, 0.5),
      inset -2px 0 4px rgba(0, 0, 0, 0.1),
      inset 2px 0 4px rgba(0, 0, 0, 0.1);
}

.handle-pattern {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 40px;
  background: linear-gradient(
      90deg,
      transparent 25%,
      rgba(139, 92, 246, 0.2) 50%,
      transparent 75%
  );
  border-radius: 8px;
}

.handle-pattern-2 {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 40px;
  background: linear-gradient(
      90deg,
      transparent 25%,
      rgba(236, 72, 153, 0.2) 50%,
      transparent 75%
  );
  border-radius: 8px;
}

/* 底部装饰 */
.handle-bottom {
  position: relative;
  width: 100%;
  height: 20px;
}

.tassel {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 30px;
  background: linear-gradient(
      180deg,
      #ec4899,
      transparent
  );
  box-shadow:
      0 0 10px rgba(236, 72, 153, 0.3),
      2px 0 0 rgba(139, 92, 246, 0.3),
      -2px 0 0 rgba(59, 130, 246, 0.3);
}

/* 响应式调整 */
@media (max-width: 640px) {
  .fan-container {
    transform: scale(0.8);
  }
}
</style>