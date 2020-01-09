const path = require('path');
const {getPosts} = require(path.resolve('./auto-post/lib/push'));

module.exports = {
  base: "/",
  title: 'DevPresso',
  description: 'Dev Blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/post/'}
    ],
    sidebar: [
      // {
      //   title: 'TIL',
      //   children: getPosts('../../docs/post/TIL')
      // },
      {
        title: 'CSS',
        children: getPosts('../../docs/post/CSS')
      },
      {
        title: 'English',
        children: getPosts('../../docs/post/English')
      },
      {
        title: 'JavaScript',
        children: getPosts('../../docs/post/JavaScript')
      },
      {
        title: 'FP',
        children: getPosts('../../docs/post/FP')
      },
      // {
      //   title: 'VuePress',
      //   children: getPosts('../../docs/post/VuePress')
      // }
    ]
  },
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }]
  ],
  markdown: {
    lineNumbers: true
  }
}

