<script setup lang="ts">
import LinkPage from './linksPage.vue'
import { ref } from 'vue'

const copiedItem = ref('')

const copyToClipboard = async (text: string, displayText: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedItem.value = displayText
    console.log(`已复制 "${displayText}" 到剪贴板！`)
    
    // 3秒后清除复制状态
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
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <LinkPage />
    
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
</style>
