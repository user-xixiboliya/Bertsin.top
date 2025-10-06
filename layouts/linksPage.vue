<script setup lang="ts">
import { useFrontmatter } from 'valaxy'
import { ref, onMounted } from 'vue'

const frontmatter = useFrontmatter()

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
    name: 'Arthals’ ink',
    url: 'https://arthals.ink',
    desc: '所见高山远木，阔云流风；所幸岁月盈余，了无拘束',
    avatar: ' https://cdn.arthals.ink/Arthals.png',
    rss: 'https://arthals.ink/rss.xml'
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
  }
]

onMounted(() => {
  randomizedLinks.value = shuffleArray(friendLinks)
})
</script>

<template>
  <SakuraPage>
    <div class="links-page-content max-w-6xl mx-auto px-4 py-8">
      <!-- 友链卡片网格 -->
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

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

/* 在中等屏幕上确保能显示2个 */
@media (min-width: 768px) {
  .links-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
}

/* 在大屏幕上确保能显示3个 */
@media (min-width: 1024px) {
  .links-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    max-width: 1200px;
    margin: 0 auto 2rem auto;
  }
}

/* 在超大屏幕上限制最大宽度，确保友链不会过度拉伸 */
@media (min-width: 1400px) {
  .links-grid {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1000px;
  }
}

.link-card {
  height: 100px;
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
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  max-height: 2.4em; /* 约等于两行的高度 */
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
    height: 90px;
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
