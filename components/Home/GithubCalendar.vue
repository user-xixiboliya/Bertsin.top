<script setup lang="ts">
defineProps<{
  username: string
  color?: string
}>()
</script>

<template>
  <section class="flex flex-col gap-y-0 -mt-4">
    <div class="flex flex-1 flex-col gap-y-0">
      <div class="w-full overflow-x-auto min-h-32 py-4">
        <img 
          :src="`https://ghchart.rshah.org/${color || '409ba5'}/${username}`" 
          :alt="`${username}'s GitHub Chart`"
          class="w-full h-auto rounded-lg dark:border-gray-600"
          loading="lazy"
          decoding="async"
        />
      </div>
      
      <!-- GitHub Contribution Legend -->
      <div class="w-full text-xs px-0 py-1">
        <div class="flex justify-between items-center">
          <div>
            <a 
              href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile" 
              class="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors no-underline"
              target="_blank"
            >
              Learn how we count contributions
            </a>
          </div>

          <div class="flex items-center text-gray-500 dark:text-gray-400">
            <span class="mr-1">Less</span>
            <div 
              class="w-2.5 h-2.5 rounded-sm mr-1 bg-gray-200 dark:bg-gray-700"
              title="No contributions"
            />
            <div 
              class="w-2.5 h-2.5 rounded-sm mr-1 bg-green-200 dark:bg-green-900"
              title="Low contributions"
            />
            <div 
              class="w-2.5 h-2.5 rounded-sm mr-1 bg-green-300 dark:bg-green-700"
              title="Medium-low contributions"
            />
            <div 
              class="w-2.5 h-2.5 rounded-sm mr-1 bg-green-400 dark:bg-green-600"
              title="Medium-high contributions"
            />
            <div 
              class="w-2.5 h-2.5 rounded-sm mr-1 bg-green-500 dark:bg-green-500"
              title="High contributions"
            />
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* 自定义样式来改善 GitHub 日历的外观 */
:deep(.calendar) {
  --gh-calendar-square-size: 12px;
  --gh-calendar-square-gap: 4px;
}

:deep(.calendar .js-calendar-graph-svg rect) {
  rx: 3px;
  ry: 3px;
}

:deep(.calendar .js-calendar-graph-svg .ContributionCalendar-day) {
  rx: 3px;
  ry: 3px;
  margin: 1px;
}

:deep(.calendar .js-calendar-graph .js-calendar-graph-svg) {
  width: 100%;
  height: auto;
}
</style>
