<script lang="ts" setup>
import Avatar from '../components/Home/Avatar.vue'
import AboutMe from '../components/Home/AboutMe.vue'
import WebsiteList from '../components/Home/WebsiteList.vue'
import Education from '../components/Home/Education.vue'
import Skills from '~/components/Home/skills.vue'
import GithubCalendar from '~/components/Home/GithubCalendar.vue'
import Statistics from '~/components/Home/Statistics.vue'
import GithubStats from '~/components/Home/GithubStats.vue'
import Post from '~/components/Home/Post.vue'

const avatarLinks = [
  { text: 'China', icon: 'i-fa-map-marker' },
  { text: 'GitHub', icon: 'i-line-md-github-twotone', href: 'https://github.com/user-xixiboliya' },
  { text: 'Email', icon: 'i-fa-envelope', href: 'mailto:linboxi123@163.com' },
  { text: '旧博客', icon: 'i-fa-leaf', href: 'https://user-xixiboliya.github.io/' },
]

const websites = [
  {
    href: 'https://xjturc.vercel.app/',
    imgSrc: 'https://s1.img-e.com/20260213/698f42b8e6f00.png',
    title: 'XJTU ROBOCON tutorial',
    description: 'XJTU ROBOCON 文档教程网站',
  },
  {
    href: 'https://github.com/user-xixiboliya/AI-system-HW',
    imgSrc: 'https://i.imglt.com/20260213/d1dec77e9fff1495aaec7aada0f9796e.png',
    title: 'AI system project',
    description: 'AI system homework projects for 2025 XJTU AI system',
  }
]

const educationList = [
  {
    href: 'https://www.xjtu.edu.cn/',
    title: '西安交通大学',
    description: '人工智能专业，全日制本科',
    date: '2023年9月 - 至今',
  },
]

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'C++', 'C', 'Shell', 'TypeScript', 'Vue'],
  },
  {
    category: 'AI Skills',
    items: ['Pytorch', 'Isaac Sim', 'TensorFlow', 'HuggingFace'],
  },
  {
    category: 'Tools & Infra',
    items: ['Docker', 'Git', 'Linux', 'CUDA', 'Vim'],
  },
]

const statistics = [
  {
    icon: 'i-fa-clock',
    value: 476,
    label: 'Days Online',
    type: 'number'
  },
  {
    icon: 'i-fa-calendar',
    value: 'Oct 4, 2025',
    label: 'Last Updated',
    type: 'text'
  },
  {
    icon: 'i-fa-file-text',
    value: '33.4w',
    label: 'Total Words',
    type: 'number'
  }
]
</script>

<template>
  <!-- <SakuraHomeLayout /> -->
  <div class="prose dark:prose-invert max-w-none mx-auto px-4 py-8">
    <div class="flex justify-center">
      <Avatar
        name="Bertsin"
        avatar-src="https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg"
        :links="avatarLinks"
        class="mb-10 mt-10"
      />
    </div>
    <AboutMe
      title="About"
      more-link-text="More about me"
      more-link-href="https://github.com/user-xixiboliya"
      class="w-full max-w-5xl mx-auto">
      <p>学生 / <span class="barbara-text">芭芭拉小姐！</span></p> 
      <p>
        我是一名来自西安交通大学的人工智能专业的在读生，是 23 级，也是全国机器人竞赛 ROBOCON (简称RC) 的坑友。Feel free to reach out to me via email or GitHub!
      </p>
    </AboutMe>
    <Post
      title="Posts"
      class="w-full max-w-5xl mx-auto mt-12"
    />
    <Education
      title="Education"
      :education-list="educationList"
      class="w-full max-w-5xl mx-auto mt-12"
  />
    <WebsiteList
      title="Website List"
      :websites="websites"
      class="w-full max-w-5xl mx-auto mt-12"
    />
    <Skills
      title="Skills"
      :skills="skills"
      class="w-full max-w-5xl mx-auto mt-12"
    />
    <GithubStats
      title="GitHub Stats"
      username="user-xixiboliya"
      class="w-full max-w-5xl mx-auto mt-12"
    />
    <GithubCalendar
      username="user-xixiboliya"
      color="1aff1a"
      class="w-full max-w-5xl mx-auto mt-12"
    />

  </div> 

</template>

<style scoped>
.barbara-text {
  filter: blur(3px);
  transition: filter 0.3s ease;
  cursor: pointer;
}

.barbara-text:hover {
  filter: blur(0px);
}
</style>


