<script setup lang="ts">
import { useFrontmatter } from 'valaxy'

const frontmatter = useFrontmatter()
</script>

<template>
  <SakuraPage>
    <RouterView v-slot="{ Component }">
      <component :is="Component">
        <template #main-content>
          <!-- 新增插槽，用于显示额外内容 -->
          <slot name="info" />
          <SakuraLinks :links="frontmatter.links" :random="frontmatter.random" :error-img="frontmatter.errorImg" />
        </template>
      </component>
    </RouterView>
  </SakuraPage>
</template>

<style scoped>
.links-container {
  min-height: 100vh;
}

.link-application-info code {
  font-size: 0.875em;
  font-weight: 500;
}

.link-application-info ul li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .link-application-info {
    padding: 1rem;
  }
  
  .link-application-info .bg-blue-50 {
    padding: 1rem;
  }
}
</style>
