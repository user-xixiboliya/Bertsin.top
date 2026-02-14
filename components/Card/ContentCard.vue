<script setup lang="ts">
import { useSlots } from 'vue'

const slots = useSlots()
const hasCards = !!slots.default

// 如果没有传入卡片内容，则作为单独的卡片使用
defineProps<{
  // 单独卡片模式的属性
  link?: string
  title?: string
  description?: string
  image?: string
  github?: string
}>()
</script>

<template>
  <!-- 容器模式：包含多个卡片 -->
  <div v-if="hasCards" class="content-card-container">
    <slot />
  </div>
  
  <!-- 单独卡片模式 -->
  <a v-else :href="link" target="_blank" rel="noopener noreferrer" class="content-card-link">
    <div class="content-card">
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="card-description">{{ description }}</p>
        <div v-if="github" class="card-footer">
          <a :href="github" target="_blank" rel="noopener noreferrer" class="github-link" @click.stop>
            <div class="i-line-md-github-loop" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="card-image-wrapper">
        <img :src="image" :alt="title" class="card-image">
      </div>
    </div>
  </a>
</template>

<style>
.content-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.content-card-container::after {
  content: '';
  display: block;
  height: 1rem;
  width: 100%;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .content-card-container {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media (min-width: 1200px) {
  .content-card-container {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
}

/* 卡片样式 */
.content-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.content-card-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.content-card {
  display: flex;
  background-color: var(--va-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  min-height: 150px; /* 改为最小高度而不是固定高度 */
  position: relative;
}

/* 左侧内容区域 */
.card-content {
  padding: 12px 16px; /* 增加内边距 */
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  z-index: 1;
  justify-content: space-between; /* 内容分布 */
}

.card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
  flex-shrink: 0;
}

.card-description {
  font-size: 0.85rem;
  color: var(--va-c-text-2);
  margin: 0;
  line-height: 1.4;
  word-wrap: break-word;
  flex-grow: 1;
  overflow-wrap: break-word; /* 确保长单词能够换行 */
  hyphens: auto; /* 启用连字符换行 */
}

.card-footer {
  flex-shrink: 0;
  padding-top: 8px;
  margin-top: 8px;
  border-top: 1px solid var(--va-c-divider, rgba(60, 60, 60, 0.12));
}

.github-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  color: var(--va-c-text-2);
  text-decoration: none;
  transition: color 0.3s ease;
}

.github-link:hover {
  color: var(--va-c-text-1);
}

.github-link .i-line-md-github-loop {
  margin-right: 4px;
  font-size: 0.9rem;
}

/* 右侧图片区域 */
.card-image-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 45%;
  z-index: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  mask-image: linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}

/* 响应式调整：小屏幕时改为纵向布局 */
@media (max-width: 640px) {
  .content-card {
    flex-direction: column;
    min-height: auto;
  }
  
  .card-content {
    width: 100%;
    padding: 16px;
  }
  
  .card-image-wrapper {
    position: relative;
    width: 100%;
    height: 180px;
    order: -1; /* 图片移到上方 */
  }
  
  .card-image {
    mask-image: none;
    -webkit-mask-image: none;
  }
}

/* 暗色模式下的样式调整 */
@media (prefers-color-scheme: dark) {
  .card-footer {
    border-top-color: var(--va-c-divider, rgba(200, 200, 200, 0.12));
  }
}
</style>
