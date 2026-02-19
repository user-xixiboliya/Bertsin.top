<script setup lang="ts">
interface EducationItem {
  href: string
  title: string
  description: string
  date: string
  image?: string
}

defineProps<{
  title: string
  educationList: EducationItem[]
}>()
</script>

<template>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-50">
      <h2>{{ title }}</h2>
    </div>

    <div class="flex flex-1 flex-col gap-y-3">
      <a
        v-for="(item, index) in educationList"
        :key="index"
        :href="item.href"
        target="_blank"
        class="group relative flex w-full items-stretch justify-between overflow-hidden rounded-2xl border bg-muted transition-all duration-300 hover:scale-[1.01] hover:bg-muted/80 hover:shadow-md"
      >
        <div class="flex w-2/3 flex-col justify-center gap-y-1 py-0 sm:pl-10">
          <h3 class="text-lg font-medium my-0 transition-colors group-hover:text-primary">
            {{ item.title }}
          </h3>
          <p class="text-muted-foreground text-sm sm:text-base">
            {{ item.description }}
          </p>
          <p class="text-xs text-muted-foreground/70">
            {{ item.date }}
          </p>
        </div>

        <div v-if="item.image" class="relative w-40 shrink-0 bg-secondary/30 sm:w-1/4">
          <img
            :src="item.image"
            :alt="item.title"
            class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />

          <!-- <div class="absolute inset-0 bg-background/10 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-0"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> -->
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.fade-edge {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>