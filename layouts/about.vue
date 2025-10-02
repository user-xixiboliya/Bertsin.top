<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
</script>

<template>
  <main class="sakura-main">
    <div class="about-container">
      <h1 class="about-title">{{ frontmatter.title }}</h1>
      <div class="prose dark:prose-invert max-w-none">
        <!-- Markdown 内容将在这里被渲染 -->
        <Content />
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}

.dark .about-container {
  background-color: rgba(30, 30, 30, 0.8);
}

.about-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--va-c-primary);
}
</style>
