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

/* 响应式调整 */
@media (max-width: 640px) {
  .fan-container {
    transform: scale(0.8);
  }
}
</style>