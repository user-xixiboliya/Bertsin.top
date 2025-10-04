<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{
  title: string
  username: string
}>()

const stats = ref({
  totalContributions: 0,
  currentStreak: 0,
  longestStreak: 0,
  contributionsThisYear: 0
})

const loading = ref(true)

// This is a global function from the external script.
declare function GitHubCalendar(selector: string, username: string, options?: { responsive?: boolean }): Promise<any>

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.onload = () => resolve()
    script.onerror = (e) => reject(new Error(`Script load error for ${src}: ${e}`))
    document.head.appendChild(script)
  })
}

function extractStatsFromCalendar() {
  try {
    // 创建一个隐藏的容器来获取数据
    const hiddenDiv = document.createElement('div')
    hiddenDiv.style.display = 'none'
    hiddenDiv.className = 'hidden-calendar'
    document.body.appendChild(hiddenDiv)

    GitHubCalendar('.hidden-calendar', props.username, { responsive: true })
      .then(() => {
        // 等待一段时间让数据加载完成
        setTimeout(() => {
          const calendarElement = document.querySelector('.hidden-calendar')
          if (calendarElement) {
            // 尝试从生成的日历中提取统计数据
            const contributionDays = calendarElement.querySelectorAll('.ContributionCalendar-day')
            let totalContributions = 0
            let currentStreak = 0
            let longestStreak = 0
            let tempStreak = 0
            let contributionsThisYear = 0

            const currentYear = new Date().getFullYear()

            contributionDays.forEach((day: any) => {
              const dataCount = parseInt(day.getAttribute('data-count') || '0')
              const dataDate = day.getAttribute('data-date')
              
              if (dataDate && new Date(dataDate).getFullYear() === currentYear) {
                contributionsThisYear += dataCount
              }
              
              totalContributions += dataCount
              
              if (dataCount > 0) {
                tempStreak++
                longestStreak = Math.max(longestStreak, tempStreak)
              } else {
                if (tempStreak > 0) {
                  currentStreak = tempStreak
                }
                tempStreak = 0
              }
            })

            stats.value = {
              totalContributions,
              currentStreak,
              longestStreak,
              contributionsThisYear
            }
          }
          
          // 清理隐藏元素
          document.body.removeChild(hiddenDiv)
          loading.value = false
        }, 2000)
      })
      .catch((error) => {
        console.error('Failed to load GitHub stats:', error)
        loading.value = false
        // 清理隐藏元素
        if (document.body.contains(hiddenDiv)) {
          document.body.removeChild(hiddenDiv)
        }
      })
  } catch (error) {
    console.error('Error extracting stats:', error)
    loading.value = false
  }
}

onMounted(async () => {
  try {
    await loadScript('https://unpkg.com/github-calendar@latest/dist/github-calendar.min.js')
    extractStatsFromCalendar()
  } catch (error) {
    console.error('Failed to load GitHub Calendar library:', error)
    loading.value = false
  }
})
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3 pl-12">
      <div v-if="loading" class="text-gray-500 dark:text-gray-400">
        Loading GitHub statistics...
      </div>
      <div v-else class="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div class="group flex flex-col items-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-gray-50 dark:bg-gray-800/50 p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg">
          <div class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors i-fa-github" />
          <div class="text-center">
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
              {{ stats.totalContributions }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              Total Contributions
            </div>
          </div>
        </div>
        
        <div class="group flex flex-col items-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-gray-50 dark:bg-gray-800/50 p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg">
          <div class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors i-fa-calendar" />
          <div class="text-center">
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
              {{ stats.contributionsThisYear }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              This Year
            </div>
          </div>
        </div>
        
        <div class="group flex flex-col items-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-gray-50 dark:bg-gray-800/50 p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg">
          <div class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors i-fa-fire" />
          <div class="text-center">
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
              {{ stats.currentStreak }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              Current Streak
            </div>
          </div>
        </div>
        
        <div class="group flex flex-col items-center gap-2 rounded-lg border border-gray-300/50 dark:border-gray-600/50 bg-gray-50 dark:bg-gray-800/50 p-4 shadow-sm transition-all hover:border-primary/25 hover:shadow-lg">
          <div class="size-5 text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors i-fa-trophy" />
          <div class="text-center">
            <div class="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
              {{ stats.longestStreak }}
            </div>
            <div class="text-xs text-gray-500 dark:text-gray-400">
              Longest Streak
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
