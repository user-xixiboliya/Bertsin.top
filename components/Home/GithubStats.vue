<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  title: string
  username: string
}>()

const isDark = ref(false)

onMounted(() => {
  // 检查初始主题
  isDark.value = document.documentElement.classList.contains('dark')

  // 监听主题变化
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class') {
        isDark.value = (mutation.target as HTMLElement).classList.contains('dark')
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
  })
})

const titleColor = computed(() => (isDark.value ? 'c9d1d9' : '24292e'))
const textColor = computed(() => (isDark.value ? '8b949e' : '444d56'))
const iconColor = computed(() => (isDark.value ? '79c0ff' : '333'))
const bgColor = computed(() => (isDark.value ? '0d1117' : 'ffffff'))

</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3 pl-12">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">  <!--gap 用于调整两个卡片之间的距离-->
        <!-- GitHub Stats Card -->
        <img 
          :src="`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&title_color=${titleColor}&text_color=${textColor}&icon_color=${iconColor}&bg_color=${bgColor}`"
          :alt="`${username}'s GitHub Stats`"
          loading="lazy"
          decoding="async"
          class="rounded-lg border border-gray-300/50 dark:border-gray-600/50 p-4"
        />
        <!-- Top Languages Card -->
        <img 
          :src="`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&title_color=${titleColor}&text_color=${textColor}&bg_color=${bgColor}`"
          :alt="`${username}'s Top Languages`"
          loading="lazy"
          decoding="async"
          class="rounded-lg border border-gray-300/50 dark:border-gray-600/50 p-1.45"
        />
       </div>
    </div>
  </section>
</template>
