<script setup lang="ts">
defineProps<{
  title: string
  moreLinkText: string
  moreLinkHref: string
}>()
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3 pl-12">
      <div class="text-gray-500 dark:text-gray-400">
        <slot />
      </div>
      <a
        class="group relative inline-flex items-center gap-x-1.5 self-end no-underline overflow-hidden w-fit rounded-lg bg-gradient-to-r from-gray-200/80 via-gray-100/60 to-gray-200/80 dark:from-gray-800/80 dark:via-gray-700/60 dark:to-gray-800/80 border border-gray-300/50 dark:border-gray-600/50 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:text-primary hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5"
        :href="moreLinkHref"
      >
        <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div class="relative flex items-center gap-x-1.5 h-5">
          <p class="my-0 transition-colors duration-300">
            {{ moreLinkText }}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-gray-500 dark:stroke-gray-400 group-hover:stroke-primary transition-all duration-300"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="translate-x-4 scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
            />
            <polyline
              points="12 5 19 12 12 19"
              class="translate-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1"
            />
          </svg>
        </div>
      </a>
    </div>
  </section>
</template>
