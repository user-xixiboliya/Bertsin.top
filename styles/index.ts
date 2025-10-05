import './vars.scss'

// 确保字体变量被应用
if (typeof document !== 'undefined') {
  document.documentElement.style.setProperty('--va-font-serif', "'KaiTi', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif")
  document.documentElement.style.setProperty('--va-font-sans', "'Century Gothic', 'Montserrat', 'Satoshi', ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'")
  document.documentElement.style.setProperty('--va-font-mono', "'ComicShannsMono', 'Fira Code', Menlo, Monaco, Consolas, 'Courier New', monospace")
}