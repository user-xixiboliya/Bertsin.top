<script setup lang="ts">
import LinkPage from './linksPage.vue'
import { ref, onMounted } from 'vue'

const copiedItem = ref('')

const copyToClipboard = async (text: string, displayText: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedItem.value = displayText
    console.log(`已复制 "${displayText}" 到剪贴板！`)
    
    setTimeout(() => {
      copiedItem.value = ''
    }, 3000)
  } catch (err) {
    console.error('复制失败:', err)
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    
    copiedItem.value = displayText
    setTimeout(() => {
      copiedItem.value = ''
    }, 3000)
  }
}

// 友链相关逻辑
interface Link {
  name: string
  url: string
  desc: string
  avatar: string
  rss?: string
}

const randomizedLinks = ref<Link[]>([])

const shuffleArray = (array: any[]) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const friendLinks: Link[] = [
  {
    name: 'YunYouJun',
    url: 'https://www.yunyoujun.cn',
    desc: '希望能成为一个有趣的人',
    avatar: 'https://www.yunyoujun.cn/images/avatar.jpg',
    rss: 'https://www.yunyoujun.cn/atom.xml'
  },
  {
    name: 'Sakura',
    url: 'https://sakura.wrxinyue.org',
    desc: 'A beautiful blog theme',
    avatar: 'https://avatars.githubusercontent.com/u/44045911?v=4',
    rss: 'https://sakura.wrxinyue.org/atom.xml'
  },
  {
    name: 'Axi\'s Blog',
    url: 'https://axi404.top',
    desc: '一只可爱小猫',
    avatar: 'https://axi404.top/avatar/avatar.png',
    rss: 'https://axi404.top/rss.xml'
  },
  {
    name: 'Gaster',
    url: 'https://github.com/WDGaster703',
    desc: 'HITsz电气大牛，HOA master',
    avatar: 'https://avatars.githubusercontent.com/u/182055930?v=4',
    rss: ''
  },
  {
    name: '小树',
    url: 'https://www.juniortree.com',
    desc: '你突然对我说 七里香的名字很美',
    avatar: 'https://pic.axi404.top/xiaoshu.7sn53widtv.webp',
    rss: 'https://www.juniortree.com/rss.xml'
  },
  {
    name: '开卷空间',
    url: 'https://huang2202.github.io/',
    desc: '一个关于追寻北极星的博客',
    avatar: 'https://huang2202.github.io/_astro/nova.BRIMhOvw_Z1lgdTW.webp',
    rss: 'https://huang2202.github.io/atom.xml'
  },
  {
    name: 'SilverDragon',
    url: 'https://blog.electro-dragon.site/',
    desc: 'Pure trash',
    avatar: 'https://blog-material.electro-dragon.site/my_avatar.png',
    rss: 'https://blog.electro-dragon.site/rss.xml'
  }
  
]

onMounted(() => {
  randomizedLinks.value = shuffleArray(friendLinks)
})
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <LinkPage>
      <template #info>
        <!-- 友链卡片网格 -->
        <div class="links-page-content px-4 py-8">
          <div class="links-grid">
            <div
              v-for="link in randomizedLinks"
              :key="`${link.name}-${link.url}`"
              class="link-card group"
            >
              <a 
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="block h-full"
              >
                <div class="link-card-inner">
                  <div class="flex items-center gap-4">
                    <div class="avatar-container">
                      <img 
                        :src="link.avatar" 
                        :alt="`${link.name} avatar`"
                        class="avatar"
                        loading="lazy"
                        @error="(e) => (e.target as HTMLImageElement).src = 'https://via.placeholder.com/60x60?text=?' "
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="link-name">{{ link.name }}</h3>
                      <p class="link-desc">{{ link.desc }}</p>
                    </div>
                    <div class="link-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- 友链统计 -->
          <div class="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
            共 {{ randomizedLinks.length }} 个友链 · 随机排序喵
          </div>
        </div>
      </template>
    </LinkPage>
    
    <div class="flex justify-center px-4 py-6">
      <div class="flex items-center gap-3 pb-3 border-border/30">
        <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
          </svg>
        </div>
        <div>
          <h2 id="apply-links" class="text-2xl font-semibold m-0">Apply Links</h2>
        </div>
      </div>
    </div>

       <div class="px-4 py-6">
      <div class="bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 rounded-2xl p-6 border border-border/30 space-y-6">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span class="text-xs font-medium text-primary">ℹ️</span>
            </div>
            <p class="text-sm text-muted-foreground m-0">本站信息如下（点击快速复制）：</p>
          </div>
          <div class="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-5">
            <div class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 break-words">
              <span class="text-sm font-medium text-muted-foreground text-end">Name:</span>
              <samp 
                class="text-sm font-mono px-2 py-1 rounded-md cursor-pointer transition-all duration-200"
                :class="copiedItem === 'Bertsin\'s Blog' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-muted/30 hover:bg-muted/50'"
                @click="copyToClipboard('Bertsin\'s Blog', 'Bertsin\'s Blog')"
              >
                <span v-if="copiedItem === 'Bertsin\'s Blog'">✓ 已复制</span>
                <span v-else>Bertsin's Blog</span>
              </samp>

              <span class="text-sm font-medium text-muted-foreground text-end">Desc:</span>
              <samp 
                class="text-sm font-mono px-2 py-1 rounded-md cursor-pointer transition-all duration-200"
                :class="copiedItem === '神秘小天地' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-muted/30 hover:bg-muted/50'"
                @click="copyToClipboard('神秘小天地', '神秘小天地')"
              >
                <span v-if="copiedItem === '神秘小天地'">✓ 已复制</span>
                <span v-else>神秘小天地</span>
              </samp>

              <span class="text-sm font-medium text-muted-foreground text-end">Link:</span>
              <samp 
                class="text-sm font-mono px-2 py-1 rounded-md cursor-pointer transition-all duration-200"
                :class="copiedItem === 'https://bertsin.top' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-muted/30 hover:bg-muted/50'"
                @click="copyToClipboard('https://bertsin.top', 'https://bertsin.top')"
              >
                <span v-if="copiedItem === 'https://bertsin.top'">✓ 已复制</span>
                <span v-else>https://bertsin.top</span>
              </samp>

              <span class="text-sm font-medium text-muted-foreground text-end">Avatar:</span>
              <samp 
                class="text-sm font-mono px-2 py-1 rounded-md cursor-pointer transition-all duration-200"
                :class="copiedItem === 'https://bertsin.top/avatar.png' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' : 'bg-muted/30 hover:bg-muted/50'"
                @click="copyToClipboard('https://bertsin.top/avatar.png', 'https://bertsin.top/avatar.png')"
              >
                <span v-if="copiedItem === 'https://bertsin.top/avatar.png'">✓ 已复制</span>
                <span v-else>https://bertsin.top/avatar.png</span>
              </samp>
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
              <span class="text-xs">📝</span>
            </div>
            <p class="text-sm text-muted-foreground m-0">申请时还请按照这个模板留言。</p>
          </div>
          <div class="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-5">
            <div class="space-y-3">

              <ul class="space-y-2 text-sm text-muted-foreground m-0 list-none">
                <li class="flex items-center gap-2">
                  <span class="text-blue-500 text-lg leading-none">•</span>
                  <span>在你的友链上添加了本站；</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500 text-lg leading-none">•</span>
                  <span>请确保你的站点活着；</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-500 text-lg leading-none">•</span>
                  <span>博客内容不违反国家法律。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 添加留言格式说明 -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
              <span class="text-xs">💬</span>
            </div>
            <p class="text-sm text-muted-foreground m-0">请按照以下格式留言申请友链：</p>
          </div>
          <div class="bg-background/60 backdrop-blur-sm rounded-xl border border-border/50 p-5">
            <div class="space-y-3">
              <h4 class="text-sm font-medium text-foreground m-0 flex items-center gap-2">
                <span class="text-purple-500">📝</span>留言格式
              </h4>
              <div class="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                <div class="space-y-1">
                  <div><span class="text-blue-600 dark:text-blue-400">name:</span> <span class="text-gray-600 dark:text-gray-400">#您的名字</span></div>
                  <div><span class="text-blue-600 dark:text-blue-400">url:</span> <span class="text-gray-600 dark:text-gray-400">#您的网址</span></div>
                  <div><span class="text-blue-600 dark:text-blue-400">desc:</span> <span class="text-gray-600 dark:text-gray-400">#简短描述</span></div>
                  <div><span class="text-blue-600 dark:text-blue-400">image:</span> <span class="text-gray-600 dark:text-gray-400">#一张图片</span></div>
                </div>
              </div>
              <p class="text-xs text-muted-foreground m-0">
                💡 请将上述格式中的注释替换为您的实际信息
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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

/* 友链卡片样式 */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .links-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

@media (min-width: 1024px) {
  .links-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}

@media (min-width: 1400px) {
  .links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.link-card {
  height: 110px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid var(--va-c-divider);
  background: var(--va-c-bg);
  min-width: 280px;
}

.link-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: var(--va-c-primary);
}

.link-card-inner {
  padding: 1.25rem;
  height: 100%;
  display: flex;
  align-items: center;
}

.avatar-container {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--va-c-divider);
  transition: border-color 0.3s ease;
}

.group:hover .avatar-container {
  border-color: var(--va-c-primary);
}

.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.group:hover .avatar {
  transform: scale(1.1);
}

.link-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--va-c-text);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
}

.group:hover .link-name {
  color: var(--va-c-primary);
}

.link-desc {
  font-size: 0.875rem;
  color: var(--va-c-text-light);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 3em;
}

.link-icon {
  flex-shrink: 0;
  color: var(--va-c-text-light);
  transition: all 0.3s ease;
  opacity: 0.6;
}

.group:hover .link-icon {
  color: var(--va-c-primary);
  opacity: 1;
  transform: translate(2px, -2px);
}

/* 响应式设计 */
@media (max-width: 767px) {
  .links-grid {
    grid-template-columns: 1fr !important;
    gap: 1rem;
  }
  
  .link-card {
    height: 100px;
    min-width: auto;
  }
  
  .link-card-inner {
    padding: 1rem;
  }
  
  .avatar-container {
    width: 50px;
    height: 50px;
  }
  
  .link-name {
    font-size: 1rem;
  }
  
  .link-desc {
    font-size: 0.8rem;
    -webkit-line-clamp: 1;
    max-height: 1.2em;
    white-space: nowrap;
    display: block;
    -webkit-box-orient: initial;
    line-height: 1.2;
  }
}

/* 暗色模式适配 */
.dark .link-card {
  background: var(--va-c-bg-soft);
}

.dark .link-card:hover {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}
</style>
``` 
