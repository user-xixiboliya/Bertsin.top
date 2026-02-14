<script setup lang="ts">
import linksPage from '../linksPage.vue'
</script>

<template>
  <linksPage>
    <template #info>
      <!-- 友链申请信息部分 -->
      <div class="link-application-info prose dark:prose-invert max-w-none mx-auto px-4 py-6">
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h3 class="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
            🔗 友链申请提交信息
          </h3>
          <div class="space-y-3 text-sm text-blue-700 dark:text-blue-300">
            <p><strong>申请方式：</strong>请通过以下方式提交友链申请</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
              <li>发送邮件至：<code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">your-email@example.com</code></li>
              <li>在本页面下方评论区留言</li>
              <li>通过 GitHub Issues 提交申请</li>
            </ul>
            <div class="mt-4">
              <p><strong>申请格式：</strong></p>
              <div class="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded p-4 mt-2 font-mono text-xs">
                <div>网站名称：Your Site Name</div>
                <div>网站地址：https://yoursite.com</div>
                <div>网站描述：简短的网站描述</div>
                <div>网站头像：https://yoursite.com/avatar.png</div>
              </div>
            </div>
            <p class="text-xs opacity-75 mt-4">
              * 申请前请先添加本站友链，互相添加后会尽快处理您的申请
            </p>
          </div>
        </div>
      </div>
    </template>
  </linksPage>
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
