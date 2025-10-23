<template>
  <div class="mt-10 items-center justify-center flex">
    <div id="fridge-magnet" class="max-w-4xl bg-gradient-to-r from-indigo-900 via-25% via-violet-950 to-gray-950 rounded-3xl">
      <div class="flex w-full pt-6">
        <div class="flex-1 px-6">
          <div class="flex items-center space-x-5">
            <div class="text-3xl font-semibold gradient-text tracking-tight jetbrains-font">
              iOS Club of XAUAT
            </div>
          </div>
        </div>
        <div class="px-6 flex items-center justify-center">
          <Icon icon="mdi:dots-vertical" class="text-gray-500 w-7 h-7"/>
        </div>
      </div>
      <div class="flex w-full pb-6">
        <div class="flex-1 mt-10 px-6 flex flex-col">
          <div class="flex-1">
            <p class="order">Steve@@Jobs-Macintosh ~ % sudo run from --1979</p>
            <p class="!text-green-500 order">Hello from Cupertino,CA</p>
            <p class="order">Steve@@Jobs-Macintosh ~ % Console run</p>
            <p class="!text-orange-500 order">WARNING: AY 7:36</p>
            <p class="order">Steve@@Jobs-Macintosh ~ % sudo Create_your_First_iOS_App</p>
            <p class="gradient-text-2 jetbrains-font" style="font-size: 12px">Here's to the crazy one. The misfits , the
              rebels , the troublemakers. The round pegs in the square hole. the ine who see things differently. They're
              not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them,
              glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. </p>
            <div class="mt-6"></div>
          </div>
          <div class="order">
            a new way to create the world
          </div>
        </div>
        <svg x="0px"
             y="0px"
             width="360px" height="360px" viewBox="0 0 106.063 106.063"
             xml:space="preserve">
  <defs>
    <linearGradient id="coldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:oklch(41% 0.159 10.272);stop-opacity:1"/>
      <stop offset="50%" style="stop-color:oklch(25.7% 0.09 281.288);stop-opacity:1"/>
      <stop offset="75%" style="stop-color:oklch(35.9% 0.144 278.697);stop-opacity:1"/>
      <stop offset="100%" style="stop-color:oklch(55.3% 0.195 38.402);stop-opacity:1"/>
    </linearGradient>
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
import {Icon} from '@iconify/vue';
import domtoimage from 'dom-to-image';

// 导出为PNG功能
const exportToPng = async () => {
  const element = document.querySelector('#fridge-magnet');
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
      link.download = 'ios-fridge-magnet.png';
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

.gradient-text-2 {
  @apply bg-clip-text text-transparent fill-transparent;
  background-image: linear-gradient(-64deg, #9795f0, #fbc8d4);
}

.order {
  font-size: 12px;
  margin: 1px 0;
  font-family: "Cascadia Code", monospace;
  @apply text-gray-200;
}
</style>