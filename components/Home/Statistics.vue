<script setup lang="ts">
interface StatisticItem {
  icon: string
  value: string | number
  label: string
  type: 'number' | 'text'
}

defineProps<{
  title: string
  statistics: StatisticItem[]
  totalPosts: number
}>()
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3 pl-12">
      <div class="flex flex-col gap-y-5">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div 
            v-for="(stat, index) in statistics"
            :key="index"
            class="group flex flex-col items-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-gray-50 dark:bg-gray-800/50 p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg"
          >
            <div 
              class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors"
              :class="stat.icon"
            />
            <div class="text-center">
              <div 
                v-if="stat.type === 'number'"
                class="text-2xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors"
              >
                {{ stat.value }}
              </div>
              <div 
                v-else
                class="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors"
              >
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-between text-sm border-t border-gray-300/50 dark:border-gray-600/50 pt-3">
          <span class="text-gray-500 dark:text-gray-400">Total Posts</span>
          <span class="font-medium text-gray-800 dark:text-gray-200">{{ totalPosts }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
