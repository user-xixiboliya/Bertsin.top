<script setup lang="ts">
import ProjectPage from './ProjectPage.vue'
import SakuraImageCard from 'valaxy-theme-sakura/components/SakuraImageCard.vue';
import ContentCard from '~/components/Card/ContentCard.vue'
import Sponsor from '~/components/sponsor.vue'

const projects = [
  {
    title: 'Valaxy Blog System',
    description: '基于 Valaxy 构建的现代博客系统，支持主题定制和多种插件扩展。',
    link: 'https://github.com/user-xixiboliya/BertsinBlog',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop'
  },
  {
    title: 'AI System Project',
    description: 'XJTU人工智能系统作业，包含机器学习算法实现和深度学习模型训练。',
    link: 'https://github.com/user-xixiboliya/AI-system-HW',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Computer Systems Labs',
    description: 'CSAPP实验项目集合，包括 BombLab、DataLab、ProxyLab 等。',
    link: 'https://github.com/user-xixiboliya',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'XJRC文档仓库',
    description: 'XJTU ROBOCON文档仓库，包含ROBOCON相关的文档。需科学上网。',
    link: 'https://xjturc.vercel.app/',
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

      <div class="projects-grid">
        <ContentCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :link="project.link"
          :image="project.image"
        />
      </div>

      <!-- Sponsor 部分 -->
      <div class="sponsor-section mt-12">
        <h1 class="text-2xl font-medium sm:mb-2 sm:text-3xl mb-6">
          Sponsor
        </h1>
        
        <div class="sponsor-content flex flex-col items-center">
          <p class="mb-6 text-gray-600 dark:text-gray-400">
            如果我的项目对你有帮助，欢迎通过微信支付或支付宝支持我的开发工作。
          请在赞助后留言或主动联系我，可以被放入赞助人列表，祝你开心。
          </p>
          
          <div class="payment-qr-container">
            <div class="wechat-qr-wrapper">
              <img 
                src="../static/wechat.png" 
                alt="微信支付二维码" 
                class="qr-code"
              />
              <p class="text-center mt-3 text-sm text-gray-500">
                微信扫码支付
              </p>
            </div>
            
            <div class="alipay-qr-wrapper">
              <img 
                src="../static/alipay.png" 
                alt="支付宝支付二维码" 
                class="qr-code"
              />
              <p class="text-center mt-3 text-sm text-gray-500">
                支付宝扫码支付
              </p>
            </div>
          </div>

          <div class="sponsor-list mt-8 w-full max-w-2xl">
            <h3 class="text-lg font-semibold mb-4 text-center">赞助者列表</h3>
            <Sponsor />
          </div>
        </div>
      </div>
    </div>
  </ProjectPage>
</template>

<style scoped>
.projects-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr; 
}

@media (min-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1400px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.projects-grid > * {
  min-width: 300px;
}

.sponsor-section {
  border-top: 1px solid var(--va-c-divider);
  padding-top: 2rem;
}

.payment-qr-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.wechat-qr-wrapper,
.alipay-qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  flex: 0 0 auto;
  position: relative; /* 为伪元素定位 */
}

.wechat-qr-wrapper:hover,
.alipay-qr-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.qr-code {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border-radius: 8px;
  filter: blur(8px);
  transition: filter 0.3s ease, transform 0.2s ease;
  cursor: pointer;
}

.qr-code:hover {
  filter: blur(0px);
  transform: scale(1.05);
}

.wechat-qr-wrapper:hover .qr-code,
.alipay-qr-wrapper:hover .qr-code {
  filter: blur(0px);
  transform: scale(1.05);
}

/* 添加一个提示文字 */
.wechat-qr-wrapper::before,
.alipay-qr-wrapper::before {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  pointer-events: none;
  opacity: 1;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.wechat-qr-wrapper:hover::before,
.alipay-qr-wrapper:hover::before {
  opacity: 0;
}

/* 暗色模式适配 */
.dark .wechat-qr-wrapper,
.dark .alipay-qr-wrapper {
  background: var(--va-c-bg-soft);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.dark .wechat-qr-wrapper:hover,
.dark .alipay-qr-wrapper:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
}

/* 响应式设计 */
@media (max-width: 640px) {
  .payment-qr-container {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .qr-code {
    width: 180px;
    height: 180px;
  }
  
  .wechat-qr-wrapper,
  .alipay-qr-wrapper {
    padding: 1rem;
  }
}

.sponsor-list {
  margin-top: 2rem;
}
</style>
