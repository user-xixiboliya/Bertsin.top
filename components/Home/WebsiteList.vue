<script setup lang="ts">
interface WebsiteItem {
  href: string
  imgSrc: string
  title: string
  description: string
  alt?: string
}

defineProps<{
  title: string
  websites: WebsiteItem[]
}>()
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 py-2 pl-12 pr-1">  <!---->
        <a
          v-for="(item, index) in websites"
          :key="index"
          class="group relative flex flex-col gap-y-3 overflow-hidden rounded-2xl border bg-gray-100 dark:bg-gray-800/50 transition-all hover:border-gray-400/25 dark:hover:border-gray-600/25 hover:shadow-sm max-w-md"
          :href="item.href"
          target="_blank"
        >
          <img
            :src="item.imgSrc"
            :alt="item.alt || item.title"
            loading="lazy"
            decoding="async"
            fetchpriority="auto"
            class="absolute top-0 h-20 w-full object-cover opacity-60 transition-opacity group-hover:opacity-100 dark:opacity-35"
          >
          <div class="z-10 flex flex-col gap-y-1 px-4 pb-2 pt-16 transition-all"> <!-- 块与块之间的距离 -->
            <h2 class="text-base font-medium text-gray-800 dark:text-gray-200">
              {{ item.title }}
            </h2>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
