<template>
  <div class="text-center text-2xl block md:hidden mt-18">仅电脑端查看</div>
  <div class="max-w-5xl hidden md:block">
    <div class="m-4 rounded-4xl bg-gradient-to-r from-indigo-900 via-25% via-violet-950 to-gray-950">
      <div class="flex w-full pt-6">
        <div class="flex-1 px-6">
          <div class="flex items-center space-x-5">
            <div class="text-3xl font-semibold gradient-text tracking-tight jetbrains-font">
              iOS Club of XAUAT
            </div>
          </div>
        </div>
        <div class="px-6 flex items-center justify-center">
          <Icon icon="mdi:dots-vertical" class="text-gray-500 w-7 h-7" />
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
            <p class="gradient-text-2 jetbrains-font" style="font-size: 12px">Here's to the crazy one. The misfits , the rebels , the troublemakers. The round pegs in the square hole. the ine who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. </p>
            <div class="mt-6"></div>
          </div>
          <div class="order">
            a new way to create the world
          </div>
        </div>
        <img src="/assets/FridgeMagnet.png" alt="" class="h-80 mr-8"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
@reference 'tailwindcss';

.gradient-text {
  @apply bg-clip-text text-transparent;
  background-image: -webkit-linear-gradient(-64deg,#f9bf65,#ff9977,#fc8986,#e47da6,#d37fb5,#ab8dcf,#7fa0dc);
}

.gradient-text-2 {
  @apply bg-clip-text text-transparent;
  background-image: linear-gradient(-64deg,#9795f0,#fbc8d4);
}

.jetbrains-font{
  font-family: "Jetbrains Mono", monospace;
}

.order {
  font-size: 12px;
  margin: 1px 0;
  font-family: "Cascadia Code", monospace;
  @apply text-gray-200;
}
</style>