const path = require('path');
const {getPosts} = require(path.resolve('./auto-post/lib/push'));

module.exports = {
  title: 'DevPresso',
  description: 'Dev Blog',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/post/'}
    ],
    sidebar: [
      {
        title: 'TIL',
        children: getPosts('../../docs/post/TIL')
        // children: getPosts('./dist/post/TIL')
      },
      {
        title: 'English',
        children: getPosts('../../docs/post/English')
        // children: getPosts('./dist/post/English')
      },
      {
        title: 'JavaScript',
        children: getPosts('../../docs/post/JavaScript')
        // children: getPosts('./dist/post/JavaScript')
      },
      {
        title: 'VuePress',
        children: getPosts('../../docs/post/VuePress')
        // children: getPosts('./dist/post/VuePress')
      }
    ]
  }
}

