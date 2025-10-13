<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-6xl flex flex-col md:flex-row justify-end gap-8">
      <!-- 第一张卡片 -->
      <div class="w-full md:w-5/12" id="first">
        <div class="card-holder">
          <div class="flex mt-5 mb-7">
            <i class="light bg-[#fd6458]"></i>
            <i class="light bg-[#ffbf2b] ml-2"></i>
            <i class="light bg-[#24cc3d] ml-2"></i>
          </div>

          <p class="order h-3"></p>

          <p class="order">Steve@@Jobs-Macintosh ~ % sudo run --1984</p>
          <p class="order">Stay hungry , Stay foolish</p>
          <p class="order">Steve@@Jobs-Macintosh ~ % sudo Create_your_First_iOS_App</p>

          <div class="flex items-center justify-center">
            <div class="gradient-text mt-25" v-if="!selectedImage">
              <p>Hello!</p>
              <p>iOS Club</p>
            </div>
            <!-- 用户上传的图片显示区域 -->
            <div v-else class="mt-25 flex items-center justify-center">
              <img :src="selectedImage" alt="Custom image" class="custom-image" />
            </div>
          </div>

          <div class="footer">
            Created by <span class="gradient-text">iOS Club of XAUAT</span>
          </div>
        </div>
      </div>

      <!-- 第二张卡片 -->
      <div class="w-full md:w-5/12" id="second">
        <div class="card-holder">
          <div class="flex mt-5 mb-7">
            <i class="light bg-[#fd6458]"></i>
            <i class="light bg-[#ffbf2b] ml-2"></i>
            <i class="light bg-[#24cc3d] ml-2"></i>
          </div>
        </div>
      </div>

      <!-- 图片上传控件和导出按钮 -->
      <div class="fixed bottom-6 right-6 flex flex-col items-end gap-2">
        <!-- 图片上传按钮 -->
        <div class="relative">
          <input 
            type="file" 
            ref="fileInput" 
            accept="image/*" 
            @change="handleImageUpload" 
            class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            选择图片
          </button>
        </div>
        
        <!-- 导出按钮 -->
        <button @click="exportToPng"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          导出为PNG
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import domtoimage from 'dom-to-image';

// 响应式数据
const selectedImage = ref(null);
const fileInput = ref(null);

// 处理图片上传
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      selectedImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// 导出为PNG功能
const exportToPng = async () => {
  let element = document.querySelector('#first');
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
      link.download = 'ios-card-holder-first.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('导出失败:', error);
      alert('导出失败，请重试');
    }
  }
  element = document.querySelector('#second');
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
      link.download = 'ios-card-holder-second.png';
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
@reference 'tailwindcss';

.gradient-text {
  background: -webkit-linear-gradient(-64deg, #f9bf65, #ffab6b, #ff9977, #fc8986, #ef7e95, #e47da6, #d37fb5, #bf83c1, #ab8dcf, #9597d8, #7fa0dc, #6ca7da);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.order {
  font-size: 8px;
  margin: 1px 0;
  text-align: center;
  font-family: "Cascadia Code", monospace;
  color: #000;
}


.gradient-text p {
  font-size: 42px;
  font-weight: 700;
  margin: 1px 0;
  text-align: center;
  font-family: "Jetbrains Mono", monospace;
}

.light {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.footer {
  position: absolute;
  bottom: 0;
  font-size: 8px;
  font-family: "Cascadia Code", monospace;
  margin: 10px;
  color: #000;
}

.dark .footer {
  color: #fff;
}

.dark .order {
  color: #fff;
}

.card-holder {
  height: 550px;
  width: 350px;
  padding: 16px 42px 20px;
  background-color: #f3f5f7;
  position: relative;
}

.dark .card-holder {
  @apply bg-[#1d1d1d];
}

/* 自定义图片样式 */
.custom-image {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
}
</style>