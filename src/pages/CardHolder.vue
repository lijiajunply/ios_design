<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-6xl flex flex-col md:flex-row justify-end gap-8">
      <!-- 第一张卡片 -->
      <div class="w-full md:w-5/12">
        <div class="card-holder-parent">
          <div class="card-holder h-full" id="first">
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
              <div class="gradient-text mt-25">
                <p>Hello!</p>
                <p>iOS Club</p>
              </div>
            </div>

            <div class="footer">
              Created by <span class="gradient-text">iOS Club of XAUAT</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二张卡片 -->
      <div class="w-full md:w-5/12">
        <div class="card-holder-parent">
          <div class="card-holder h-full" id="second">
            <div class="flex mt-5 mb-7">
              <i class="light bg-[#fd6458]"></i>
              <i class="light bg-[#ffbf2b] ml-2"></i>
              <i class="light bg-[#24cc3d] ml-2"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- 导出按钮 -->
      <div class="fixed bottom-6 right-6">
        <button @click="exportToPng"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          导出为PNG
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import domtoimage from 'dom-to-image';

// 导出为PNG功能
const exportToPng = async () => {
  let element = document.querySelector('#first');
  if (element) {
    try {
      // 使用 dom-to-image 导出元素
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
        quality: 0.95,
        width: element.clientWidth * 3,
        height: element.clientHeight * 3,
        style: {
          transform: 'scale(3)',
          transformOrigin: 'top left',
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

.card-holder-parent {
  height: 34.375rem;
  width: 21.875rem;
}

.card-holder {
  padding: 16px 42px 20px;
  background-color: #f3f5f7;
  position: relative;
}

.dark .card-holder {
  @apply bg-[#1d1d1d];
}
</style>