<script setup lang="ts">
import { useSiteStore, formatDate } from 'valaxy'
import { computed } from 'vue'

defineProps<{
  title: string
}>()

const site = useSiteStore()
// Valaxy's postList is already sorted by date, so we just take the first 8.
const posts = computed(() => site.postList.slice(0, 8))
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3 pl-11">
      <ul class="flex flex-col gap-y-1.5 sm:gap-y-2">
        <li
          v-for="post in posts"
          :key="post.path"
          class="group/card relative flex flex-col rounded-2xl border border-gray-300/50 bg-transparent px-5 py-2.5 transition-colors ease-in-out hover:bg-gray-100 dark:border-gray-600/50 dark:hover:bg-gray-800/50"
        >
          <a
            class="group/link flex w-full flex-col no-underline transition-all hover:text-primary sm:flex-row"
            :href="post.path"
          >
            <span class="min-w-[110px] py-1 font-mono text-xs text-gray-500 dark:text-gray-400">
              <time :datetime="post.date ? new Date(post.date).toISOString() : ''">
                {{ formatDate(post.date, 'MMM D, YYYY') }}
              </time>
            </span>
            <div class="z-10 flex-grow">
              <div class="flex justify-between">
                <div class="text-gray-800 dark:text-gray-200 group-hover/link:text-primary">
                  {{ post.title }}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="my-1 stroke-gray-500 transition-all duration-300 group-hover/link:stroke-primary dark:stroke-gray-400"
                >
                  <line
                    x1="5"
                    y1="12"
                    x2="19"
                    y2="12"
                    class="scale-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:scale-x-100"
                  />
                  <polyline
                    points="12 5 19 12 12 19"
                    class="translate-x-0 transition-all duration-300 ease-in-out group-hover/link:translate-x-1"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <a
        class="group relative inline-flex w-fit items-center gap-x-2 self-end overflow-hidden rounded-lg border border-gray-300/50 bg-gradient-to-r from-gray-100/80 via-gray-50/60 to-gray-100/80 px-3 py-0 text-sm font-medium text-gray-500 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:text-primary hover:shadow-md hover:shadow-primary/20 dark:border-gray-600/50 dark:from-gray-800/80 dark:via-gray-700/60 dark:to-gray-800/80 dark:text-gray-400"
        href="/blogs"
      >
        <div class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div class="relative flex items-center gap-x-">
          <p class="my-0 transition-colors duration-300">More posts</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-gray-500 transition-all duration-300 group-hover:stroke-primary dark:stroke-gray-400"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              class="scale-x-0 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:scale-x-100"
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
