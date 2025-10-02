<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  {
    category: 'Languages',
    items: ['Python', 'C++', 'C', 'Shell', 'TypeScript', 'Vue'],
  },
  {
    category: 'AI Skills',
    items: ['Pytorch', 'Isaac Sim', 'TensorFlow', 'Scikit-learn'],
  },
  {
    category: 'Tools & Infra',
    items: ['Docker', 'Git', 'Linux', 'CUDA', 'Vim'],
  },
])
</script>

<template>
    <div class="text-xl font-semibold md:min-w-36">
      <h2>Skills</h2>
    </div>
  <section class="flex flex-col gap-y-5 md:flex-row md:gap-y-0">
    <div class="flex flex-1 flex-col gap-y-3">
      <div
        v-for="skillCategory in skills"
        :key="skillCategory.category"
        class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"
      >
        <h4 class="w-full font-medium md:w-1/5">
          {{ skillCategory.category }}
        </h4>
        <div class="flex w-full flex-row flex-wrap gap-x-2 gap-y-1 md:w-4/5">
          <button
            v-for="item in skillCategory.items"
            :key="item"
            class="group relative inline-flex cursor-default items-center gap-x-1 overflow-hidden rounded-lg border border-border/60 bg-gradient-to-r from-muted via-muted to-muted/80 px-3 py-0.25 text-sm font-medium text-muted-foreground no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-gradient-to-r hover:from-primary/10 hover:via-primary/5 hover:to-transparent hover:text-primary hover:shadow-md hover:shadow-primary/20"
          >
            <div
              class="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div class="relative flex items-center gap-x-2">
              <p class="my-0 transition-colors duration-300">
                {{ item }}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
