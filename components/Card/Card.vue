<script setup lang="ts">
defineProps<{
  link: string
  title: string
  description: string
  image: string
  github?: string
}>()
</script>

<template>
  <a :href="link" target="_blank" rel="noopener noreferrer" class="single-card-link">
    <div class="single-card">
      <div class="single-card-content">
        <h3 class="single-card-title">{{ title }}</h3>
        <p class="single-card-description">{{ description }}</p>
        <div v-if="github" class="single-card-footer">
          <a :href="github" target="_blank" rel="noopener noreferrer" class="single-github-link" @click.stop>
            <div class="i-line-md-github-loop" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="single-card-image-wrapper">
        <img :src="image" :alt="title" class="single-card-image">
      </div>
    </div>
  </a>
</template>

<style>
.single-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 12px;
}

.single-card-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.single-card {
  display: flex;
  background-color: var(--va-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  height: 150px;
  position: relative;
}

.single-card-content {
  padding: 8px 14px; /* 减小垂直内边距 */
  display: flex;
  flex-direction: column;
  width: 60%;
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.single-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  margin: 0 0 6px 0;
  line-height: 1.2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
}

.single-card-description {
  font-size: 0.82rem;
  color: var(--va-c-text-2);
  margin: 0;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-wrap: break-word;
  flex-grow: 1;
  min-height: 0;
}

.single-card-footer {
  flex-shrink: 0;
  padding-top: 8px;
  margin-top: auto;
  border-top: 1px solid var(--va-c-divider, rgba(60, 60, 60, 0.12));
}

.single-github-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.72rem;
  color: var(--va-c-text-2);
  text-decoration: none;
  transition: color 0.3s ease;
}

.single-github-link:hover {
  color: var(--va-c-text-1);
}

.single-github-link .i-line-md-github-loop {
  margin-right: 4px;
  font-size: 0.9rem;
}

.single-card-image-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 45%;
  z-index: 0;
}

.single-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  mask-image: linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
  -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%);
}

@media (prefers-color-scheme: dark) {
  .single-card-footer {
    border-top-color: var(--va-c-divider, rgba(200, 200, 200, 0.12));
  }
}
</style>
