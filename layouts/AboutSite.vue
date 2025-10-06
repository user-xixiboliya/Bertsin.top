<script setup lang="ts">
import AboutSitePage from './AboutSitePage.vue'

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
          <h2 class="text-2xl font-semibold mb-6">✨ 网站特性</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div class="text-3xl mb-3">{{ feature.icon }}</div>
              <h3 class="text-lg font-semibold mb-2">{{ feature.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">{{ feature.description }}</p>
            </div>
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
