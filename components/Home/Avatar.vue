<script setup lang="ts">
interface LinkItem {
  text: string
  href?: string
  icon: string
}

defineProps<{
  avatarSrc: string
  name: string
  links: LinkItem[]
}>()

const baseClasses = 'group relative flex flex-row items-center justify-center gap-x-2 rounded-lg bg-gradient-to-r from-gray-200/80 via-gray-100/60 to-gray-200/80 dark:from-gray-800/80 dark:via-gray-700/60 dark:to-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 backdrop-blur-sm transition-all duration-300'
const linkClasses = 'cursor-pointer hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5'
const staticClasses = 'cursor-default'
</script>

<template>
  <div class="flex flex-row items-center gap-x-6">
    <img
      :src="avatarSrc"
      :alt="name"
      loading="eager"
      decoding="async"
      fetchpriority="auto"
      class="h-36 w-auto rounded-lg border p-1 dark:border-gray-600"
    >
    <div class="flex flex-col gap-y-4">
      <h1 class="text-3xl font-bold">
        {{ name }}
      </h1>
      <div class="flex flex-wrap gap-x-2 gap-y-2">
        <component
          :is="item.href ? 'a' : 'div'"
          v-for="(item, index) in links"
          :key="index"
          :href="item.href"
          :target="item.href ? '_blank' : undefined"
          :class="[baseClasses, item.href ? linkClasses : staticClasses]"
        >
          <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="relative flex items-center gap-x-2 h-8">
            <div class="size-4" :class="item.icon" />
            <p class="my-0 transition-colors duration-300">
              {{ item.text }}
            </p>
          </div>
        </component>
      </div>
    </div>
  </div>
</template>
