import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://github.com/user-xixiboliya',
  mode:'auto',
  lang: 'zh-CN',
  title: 'Bertsin Home',
  author: {
    name: ' Bertsin',
    avatar: 'https://i.imglt.com/20260214/c37821a7cc3ad4bf4717c03dfb6ecfce.jpg',
    intro: 'XJTU Student',
  },
  description: 'Valaxy Theme Sakura1 Preview.',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/user-xixiboliya',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/jizhideyunyoujun',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=1371872444',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/bertsin/',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/651491932',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: '微信公众号',
      link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
      icon: 'i-ri-wechat-2-line',
      color: '#1AAD19',
    },
  ],

  search: {
    enable: true,
    provider: 'fuse',
  },
  license: {
    enabled: true,
    language: 'zh-CN',
    type: 'by-sa',
  },
  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '微信支付',
        url: 'https://s1.img-e.com/20260213/698f343716444.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
