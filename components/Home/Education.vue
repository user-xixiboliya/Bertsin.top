<script setup lang="ts">
interface EducationItem {
  href: string
  title: string
  description: string
  date: string
}

defineProps<{
  title: string
  educationList: EducationItem[]
}>()
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-36">
      <h2>{{ title }}</h2>
    </div>
    <div class="flex flex-1 flex-col gap-y-3">
      <a
        v-for="(item, index) in educationList"
        :key="index"
        class="not-prose block relative rounded-2xl bg-muted pl-12 py-1 transition-all hover:border-foreground/25 hover:shadow-sm"
        :href="item.href"
        target="_blank"
      >
        <div class="flex flex-col gap-y-1 border rounded-2xl px-5 py-0">
          <div class="flex flex-col gap-y-0.5">
            <h2 class="text-lg font-medium my-0">
              {{ item.title }}
            </h2>
            <p class="text-muted-foreground">
              {{ item.description }}
            </p>
            <p class="text-muted-foreground">
              {{ item.date }}
            </p>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>
