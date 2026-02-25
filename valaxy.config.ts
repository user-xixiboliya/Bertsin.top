import type { ThemeUserConfig } from 'valaxy-theme-sakura'
import { defineValaxyConfig } from 'valaxy'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonMeting } from 'valaxy-addon-meting'
import { addonWaline } from 'valaxy-addon-waline'
// import { addonBackgrounds } from 'valaxy-addon-backgrounds'
import { addonHitokoto } from 'valaxy-addon-hitokoto'
import { addonComponents, ValaxyThemesResolver } from 'valaxy-addon-components'
import { SpeedInsights } from "@vercel/speed-insights/next"

export default defineValaxyConfig<ThemeUserConfig>({
  theme: 'sakura',
  devtools: true,

  themeConfig: {
    ui: {
      primary: '#FF5253',
      toggleDarkButton: {
        lightIcon: 'i-line-md-moon-alt-to-sunny-outline-loop-transition',
        darkIcon: 'i-line-md-sunny-outline-to-moon-loop-transition',
      },
      pinnedPost: {
        icon: 'i-fa-anchor',
      },
      postList: {
        icon: 'i-fa-envira',
        responsive:{
          xl: 2,
          '2xl': 2
        }
      },
      scrollDown: {
        icon: 'i-fa-chevron-down',
      },
    }, //ui
    scrollDown: {
      enable: true,
    },


    
    hero: {
      title: 'Bertsin\'s Blogs ',
      motto: 'You got to put the past behind you before you can move on.',
      urls: [
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-858k3j.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3l2vm3.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-3z9dz9.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-rrdgp1.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-zyxq6j.jpg',
        // Source: https://www.pixiv.net/artworks/72203573
        'https://valaxy-theme-sakura.s3.bitiful.net/home-wallpaper.jpg',
        'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper/yae-miko-sunset-sakura-genshin-impact-moewalls-com.mp4',
      ],
      randomUrls: true,
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/563098369-1-208.mp4',
      playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/theming-demos/mashiro/The Pet Girl of Sakurasou.mp4',
      // playerUrl: 'https://valaxy-theme-sakura.s3.bitiful.net/PV/Original PV Little love song MONGOL 800 cover by Amatsuki.mp4',
      style: 'dim',
      fixedImg: true,
      typewriter: true,
      enableHitokoto: true,
      waveTheme:'horizontal',
    },

    notice: {
      message: '<b>本站采用valaxy+sakura theme的构建方式，访问<a href="https://github.com/WRXinYue/valaxy-theme-sakura">Valaxy-Sakura</a>获取更多信息。</br>',
    },

    pinnedPost: {
      text: '往日之影',

      entries: [
        {
          title: 'Docs',
          desc: '主题文档',
          link: 'https://sakura.valaxy.site',
          img: 'https://valaxy-theme-sakura.s3.bitiful.net/wallpaper-2025%2Fwallhaven-yxoejx.jpg',
        },
      ],
    },

    pagination: {
      type: 'infinite-scroll',
      animation: true,
      itemsPerPage: 10,
      infiniteScrollOptions: {
        preload: true,
      },
    },

    postList: {
      text: 'Discovery',
      isImageReversed: true,
      // defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://www.loliapi.com/acg/pc/?random'],
      defaultImage: ['https://www.dmoe.cc/random.php?random', 'https://img.xjh.me/random_img.php?random?type=bg&return=302'],
      
    },

    postFooter: {
      navigationMerge: true,  
    },

    navbar: [
      {
        icon: 'i-fa-fort-awesome',
        locale: 'menu.home',
        link: '/',
      },
      {
        icon: 'i-line-md-folder-twotone',
        text: '博文',
        link: '/blogs',
      },
      {
        icon: 'i-fa-tags',
        locale: '项目',
        link: '/projects',
      },
      {
        icon: 'i-fa-archive',
        locale: 'menu.archives',
        link: '/archives',
      },
      {
        icon: 'i-fa-edit',
        text: '留言板',
        link: '/comment',
      },
      {
        text: '友情链接',
        icon: 'i-fa-chain',
        link: '/links',
        items: [
          {
            text: 'GitHub',
            icon: 'i-line-md-github-twotone',
            link: 'https://github.com/user-xixiboliya',
          },
          {
            text: 'Valaxy',
            icon: 'i-ri-cloud-fill',
            link: 'https://github.com/YunYouJun/valaxy',
          },
          {
            text: 'Sakura',
            icon: 'i-twemoji-blossom',
            link: 'https://sakura.valaxy.site/',
          },
        ],
      },
      {
       text: ' 关于本站',
       icon: 'i-fa-info-circle',
       link: '/about',
      },
      {
        text: '曾经的家',
        icon: 'i-fa-leaf',
        link: 'https://user-xixiboliya.github.io/',
        target: '_blank',
      },
      {
        text: 'RSS',
        icon: 'i-fa-feed',
        link: '/atom.xml',
        target: '_blank',
      },
    ],
    navbarOptions: {
      title: ['Bertsin\'s', 'Home'],
      offset: 0,
      enableHover: true,
      animIn: 'fadeIn',
      animOut: 'fadeOut',
      invert:false,
      showMarker:true,
      autoHide: ['home'],
      tools:['toggleDark','search'],
      hamburgerStyle: 'old',
    },

    sidebar: [
      {
        text: '🌈',
        locale: 'menu.home',
        link: '/',
      },
      {
        text: '📂 博文',
        link: '/blogs',
      },
      {
        text: '🏷️ 项目',
        link: '/projects',
      },
      {
        text: '📚 归档',
        link: '/archives',
      },
      {
        text: '📝 留言板',
        link: '/comment',
      },
      {
        text: '🔗 友链',
        link: '/links',
      },
      {
        text: '📌 关于本站',
        link: '/about',
      },
      {
        text: '📰 RSS',
        link: '/atom.xml',
        target: '_blank',
      }
    ],
    sidebarOptions: {
      position: 'left',
      enableOnDesktop: false,
    },

    tags: {
      rainbow: true,
    },

    footer: {
      since: 2024,
      powered: true,
    },

    scrollToTop: true,
    scrollIndicator: true,
    scrollLock: false,
  },
  addons: [
    addonWaline({
      serverURL: 'https://waline.wrxinyue.org',
      pageview: true,
      comment: true,
    }),
    addonMeting({
      global: true,
      props: {
        id: '2489775340',
        server: 'netease',
        type: 'playlist',
      },
      options: {
        autoHidden: true,
        animationIn: true,
        lyricHidden: true,
      },
    }),
    addonBangumi({
      api: 'https://yi_xiao_jiu-bangumi.web.val.run',
      bilibiliUid: '438788541',
      bgmEnabled: false,
    }),
    // addonBackgrounds({}),
    addonHitokoto({
      api: 'intl',
    }),
    addonComponents(),
  ],
})