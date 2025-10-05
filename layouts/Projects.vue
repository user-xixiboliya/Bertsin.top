<script setup lang="ts">
import ProjectPage from './ProjectPage.vue'
import SakuraImageCard from 'valaxy-theme-sakura/components/SakuraImageCard.vue';
import ContentCard from '~/components/Card/ContentCard.vue'

const projects = [
  {
    title: 'Valaxy Blog System',
    description: '基于 Valaxy 构建的现代博客系统，支持主题定制和多种插件扩展。',
    link: 'https://github.com/user-xixiboliya/BertsinBlog',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'AI System Project',
    description: '人工智能系统项目，包含机器学习算法实现和深度学习模型训练。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Computer Systems Labs',
    description: 'CSAPP实验项目集合，包括 Bomb Lab、Data Lab、Proxy Lab 等。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Docker & DevOps Tools',
    description: '容器化部署和DevOps工具链，包含自动化部署脚本和CI/CD配置。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Web Development Projects',
    description: 'Vue 和 TypeScript 开发的 Web 应用，包含响应式设计和交互功能。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop'
  },
  {
    title: 'More Projects',
    description: '查看更多项目和开源贡献，包含学习笔记和实验性项目。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop'
  }
]
</script>

<template>
  <ProjectPage class="Projects">
    <div class="prose dark:prose-invert max-w-none mx-auto px-4 py-8">
      <div id="content-header" class="animate mb-8">
        <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl">
          Projects
        </h1>
        <div class="text-sm text-muted-foreground italic" path="/projects">
          <span class="waline-pageview-count" data-path="/projects">1638</span> views
        </div>
      </div>

      <div class="mb-8">
        <p>如果你觉得我做的项目还不错，可以赞助我，让我有动力继续做下去。</p>
      </div>

      <h2 id="projects" class="mb-6">Projects</h2>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ContentCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :image="project.image"
        />
      </div>
    </div>
  </ProjectPage>
</template>
