<script lang="ts" setup>
import type { Post } from 'valaxy'

import { useLayout } from 'valaxy'
import YunPostMeta from 'valaxy-theme-yun/components/YunPostMeta.vue'

defineProps<{
  frontmatter: Post
}>()

const isPost = useLayout('post')
</script>

<template>
  <div class="test-post-meta">
  <YunPostMeta :frontmatter="frontmatter">
    <span v-if="isPost" id="busuanzi_container_page_pv">
      本文总阅读量 <span id="busuanzi_value_page_pv" /> 次
    </span>
  </YunPostMeta>
    </div>
</template>

<style>
.test-post-meta {
  max-width: 800px;
  margin: 0 auto;
}
</style>