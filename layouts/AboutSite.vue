<script setup lang="ts">
import AboutSitePage from './AboutSitePage.vue'

const distributionSites = [
  {
    name: 'GitHub',
    domain: 'bertsin.github.io',
    url: 'https://bertsin.github.io/bertsinblog/',
    logo: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#181717"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>'
  },
  {
    name: 'Vercel',
    domain: 'bertsin.vercel.app',
    url: 'https://bertsin.vercel.app/',
    logo: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>'
  },
  {
    name: 'Netlify',
    domain: 'bertsin.netlify.app',
    url: 'https://bertsin.netlify.app/',
    logo: '<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" fill="#00C7B7"><title>Netlify icon</title><path d="M16.934 8.519a1.044 1.044 0 0 1 .303.23l2.349-1.045-2.192-2.171-.491 2.954zM12.06 6.546a1.305 1.305 0 0 1 .209.574l3.497 1.482a1.044 1.044 0 0 1 .355-.177l.574-3.55-2.13-2.234-2.505 3.852v.053zm11.933 5.491l-3.748-3.748-2.548 1.044 6.264 2.662s.053.042.032.042zm-.627.606l-6.013-2.569a1.044 1.044 0 0 1-.7.407l-.647 3.957a1.044 1.044 0 0 1 .303.731l3.633.762 3.33-3.31v-.062zM15.4 9.25L12.132 7.86a1.2 1.2 0 0 1-1.044.543h-.199L8.185 12.58l7.225-3.132v.01a.887.887 0 0 1 0-.167.052.052 0 0 0-.01-.041zm3.967 7.308l-3.195-.658a1.096 1.096 0 0 1-.46.344l-.761 4.72 4.437-4.396s-.01.02-.021.02zm-4.469-.324a1.044 1.044 0 0 1-.616-.71l-5.95-1.222-.084.136 5.398 7.81.323-.324.919-5.67s.031.022.01.011zm-6.441-2.652l5.878 1.211a1.044 1.044 0 0 1 .824-.522l.637-3.894-.135-.115-7.308 3.132a1.817 1.817 0 0 1 .104.188zm-2.464.981l-.125-.125-2.537 1.044 1.232 1.222 1.399-2.172zm1.67.397a1.368 1.368 0 0 1-.563.125 1.389 1.389 0 0 1-.45-.073l-1.544 2.245 6.765 6.702 1.19-1.18zm-.95-2.641a1.702 1.702 0 0 1 .314 0 1.378 1.378 0 0 1 .344 0l2.735-4.25a1.19 1.19 0 0 1-.334-.824 1.242 1.242 0 0 1 0-.271l-3.32-1.535-2.672 2.6zm.303-7.402l3.237 1.378a1.242 1.242 0 0 1 .835-.282 1.357 1.357 0 0 1 .397.063l2.526-3.947L11.923.041 7.016 4.854s-.01.052 0 .063zm-1.21 8.164a1.566 1.566 0 0 1 .24-.334L3.278 8.613 0 11.797l5.804 1.284zm-.262.7L.533 12.735l2.203 2.235 2.777-1.18z"/></svg>'
  },
  {
    name: 'Cloudflare',
    domain: 'bertsin.pages.dev',
    url: 'https://bertsin.pages.dev/',
    logo: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#F38020"><title>Cloudflare</title><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.443 17.335a5.963 5.963 0 0 1-3.443 1.135c-3.313 0-6-2.687-6-6s2.687-6 6-6a5.963 5.963 0 0 1 3.443 1.135l-1.33 1.33a3.963 3.963 0 0 0-2.113-.665c-2.209 0-4 1.791-4 4s1.791 4 4 4c.739 0 1.424-.202 2.023-.558l1.42 1.423z"/></svg>'
  },

]

const techStack = [
  {
    category: 'Frontend',
    items: [
      { name: 'Vue 3', description: '现代化的 JavaScript 框架' },
      { name: 'Valaxy', description: '基于 Vue 3 的静态站点生成器' },
      { name: 'TypeScript', description: '类型安全的 JavaScript 超集' },
      { name: 'Sakura Theme', description: '美观的博客主题' }
    ]
  },
  {
    category: 'Styling',
    items: [
      { name: 'UnoCSS', description: '原子化 CSS 引擎' },
      { name: 'SCSS', description: 'CSS 预处理器' },
      { name: 'Tailwind CSS', description: '实用优先的 CSS 框架' }
    ]
  },
  {
    category: 'Deployment',
    items: [
      { name: 'Vercel', description: '现代化的部署平台' },
      { name: 'GitHub Actions', description: '自动化 CI/CD 流程' }
    ]
  }
]

const features = [
  {
    icon: '🎨',
    title: '美观设计',
    description: '采用 Sakura 主题，提供优雅的视觉体验'
  },
  {
    icon: '📱',
    title: '响应式布局',
    description: '完美适配桌面端、平板和移动设备'
  },
  {
    icon: '🚀',
    title: '高性能',
    description: '基于静态站点生成，加载速度极快'
  },
  {
    icon: '🌙',
    title: '暗色模式',
    description: '支持明暗主题切换，保护用户视力'
  },
  {
    icon: '📝',
    title: 'Markdown 支持',
    description: '原生支持 Markdown 语法，写作体验流畅'
  },
  {
    icon: '🔍',
    title: 'SEO 优化',
    description: '内置 SEO 优化，提升搜索引擎可见性'
  }
]

const updateLogs = [
  {
    version: 'v2.0.0',
    date: '2024-12-20',
    updates: [
      '升级到 Valaxy 框架',
      '重新设计首页布局',
      '添加项目展示页面',
      '集成 GitHub 统计信息'
    ]
  },
  {
    version: 'v1.5.0',
    date: '2024-11-10',
    updates: [
      '添加评论系统',
      '优化代码高亮',
      '改进搜索功能',
      '修复已知 bug'
    ]
  }
]

const statistics = [
  { label: '文章数量', value: '42+', icon: '📄' },
  { label: '访问量', value: '10k+', icon: '👀' },
  { label: '运行天数', value: '365+', icon: '📅' },
  { label: '代码提交', value: '200+', icon: '💻' }
]
</script>
<template>
  <AboutSitePage class="AboutSite">
    <div class="prose dark:prose-invert max-w-none mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <div id="content-header" class="animate mb-8">
          <h1 class="text-3xl font-bold sm:mb-2 sm:text-4xl">
            关于本站
          </h1>
          <div class="text-sm text-muted-foreground italic">
            <span class="waline-pageview-count" data-path="/about-site">892</span> views
          </div>
        </div>

        <!-- 网站简介 -->
        <section class="mb-12">
          <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
            <h5 class="text-2xl font-semibold mb-4 text-blue-800 dark:text-blue-200">
              🌸 欢迎来到 Bertsin's Blog
            </h5>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              这是一个基于 Valaxy 框架构建的个人技术博客，专注于分享人工智能、机器人学、前端开发等领域的知识与经验。
              本站采用现代化的技术栈，追求简洁美观的设计和优秀的用户体验。
            </p>
          </div>
        </section>

        <!-- 网站统计 -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">📊 网站统计</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="stat in statistics"
              :key="stat.label"
              class="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <div class="text-2xl mb-2">{{ stat.icon }}</div>
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {{ stat.value }}
              </div>
              <div class="text-sm text-gray-600 dark:text-gray-400">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </section>

        <!-- 网站特性 -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">✨ 网页分发</h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            为了提供更好的访问体验和可靠性，本站在多个平台进行了部署，您可以选择合适的镜像站点进行访问：
            </p>
            <div class="grid md:grid-cols-2 gap-4">
            <a
              v-for="site in distributionSites"
              :key="site.name"
              :href="site.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 p-3 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 group"
            >
              <!-- Logo Wrapper -->
              <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-muted dark:bg-gray-700/50">
                <div
                  class="h-6 w-6"
                  v-html="site.logo"
                ></div>
              </div>
              <!-- Title and Domain -->
              <div class="flex-grow">
                <h4 class="font-semibold text-gray-800 dark:text-gray-200">{{ site.name }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ site.domain }}</p>
              </div>
              <!-- Arrow Icon -->
              <div class="w-6 h-6 text-gray-400 dark:text-gray-500 group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" /></svg>
              </div>
            </a>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">📕版权</h2>
          <!-- <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"> -->
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              如你所见，本站中的所有原创内容及设计整体，除非特别说明，均使用 CC BY-NC-SA 4.0 协议进行授权。这意味着您可以在协议允许的范围内自由地分享、复制本作品的内容及基于本作品内容进行创作，但必须注明原作者和链接，并且不得用于任何商业目的。
              </p>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              本站中的绝大多数博客封面均选自 Pixiv 的公开作品，并且在转载时尽可能地声明了原作链接。包括封面在内，本站中使用了一些来自互联网的图片等素材或商标、标志及相关知识产权，无论是否标注有 © 或 ™ 及其他标识，均归属它们各自的权利持有人所有，并无意侵犯其作品、商标或版权。如果本站中存在侵犯您权益的内容，请您联系我，我将尽快予以删除。
            </p>
          <!-- </div> -->
        </section>

        <!-- 更新日志 -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">📝 更新日志</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div
              v-for="log in updateLogs"
              :key="log.version"
              class="bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div class="flex items-center justify-between mb-3">
                <h3 class="text-lg font-semibold text-green-600 dark:text-green-400">
                  {{ log.version }}
                </h3>
                <span class="text-sm text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {{ log.date }}
                </span>
              </div>
              <ul class="space-y-1">
                <li
                  v-for="update in log.updates"
                  :key="update"
                  class="flex items-start space-x-2"
                >
                  <span class="text-green-500 mt-1 text-sm">•</span>
                  <span class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{{ update }}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section class="mb-12">
          <h2 class="text-2xl font-semibold mb-6">🎇主题</h2>
          <!-- <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8"> -->
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              本站采用的主题为 Valaxy-Sakura，得益于贡献者们对 Valaxy 的付出，valaxy支持的热重载、 PJAX experience以及轻量快速的开发体验为本站的构建提供了良好的体验，当然valaxy的生态仍需要共同完善。主页部分参考了 Astro 的 Pure, Cactus 以及 Resume 的设计并且基于Vue3、UnoCSS/Tailwind CSS进行了复现与修改；修改大量组件样式，并且对于Friend Links页面进行重写，添加了Projects页面等，修复大量Bugs例如pagination跳转路由自动注册错误等问题。
              </p>
          <!-- </div> -->
        </section>
      </div>
    </div>
  </AboutSitePage>
</template>

<style scoped>
.AboutSite {
  background: var(--va-c-bg);
}

/* 自定义动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate {
  animation: fadeInUp 0.6s ease-out;
}

/* 响应式设计优化 */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

/* 更新日志卡片特殊样式 */
.grid.md\\:grid-cols-2 {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid.md\\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
