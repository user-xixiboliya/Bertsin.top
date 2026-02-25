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
  <section class="education-section flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="text-xl font-semibold md:min-w-50">
      <h2 class="my-0">{{ title }}</h2>
    </div>

    <div class="flex flex-1 flex-col gap-y-3">
      <a
        v-for="(item, index) in educationList"
        :key="index"
        :href="item.href"
        target="_blank"
        class="not-prose group block relative overflow-hidden rounded-2xl border bg-muted px-10 pt-2 pb-6 transition-all duration-300 hover:border-foreground/25 hover:shadow-sm"
      >
        <div class="relative z-10 flex flex-col gap-y-1 pe-28 sm:pe-36 md:pe-44">
          <h3 class="my-0 text-lg font-medium transition-colors group-hover:text-primary">
            {{ item.title }}
          </h3>
          <p class="my-0 text-lg text-muted-foreground sm:text-base">
            {{ item.description }}
          </p>
          <p class="my-0 text-base text-muted-foreground/70">
            {{ item.date }}
          </p>
        </div>

        <div
          v-if="item.image"
          class="pointer-events-none absolute inset-y-0 end-0 z-0 -my-8 h-[calc(100%+1.5rem)] w-1/2 sm:w-2/5 md:w-1/3"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="m-0 h-full w-full object-cover opacity-30 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-45"
          />

          <!-- <div class="absolute inset-0 bg-background/10 backdrop-blur-[1px] transition-all duration-300 group-hover:bg-transparent group-hover:backdrop-blur-0"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> -->
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.education-section h2,
.education-section p {
  margin-top: 0;
  margin-bottom: 0;
}

.fade-edge {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
