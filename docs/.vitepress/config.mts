import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Applications",
  description: "Online course of lectures on Frontend and Backend development",
  base: '/WebAppDev/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Лекції', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Frontend',
        items: [
          { text: '1. Вступ до веб-розробки і основи JavaScript', link: '/frontend/f1' },
          { text: '2. Робота з об\'єктами та масивами у JavaScript', link: '/frontend/f2' },
          { text: '3. Розробка інтерактивних веб-сторінок з використанням JavaScript', link: '/frontend/f3' },
          { text: '4. Основи React', link: '/frontend/f4'  },
          { text: '5. Робота зі станом в React', link: '/api-examples' },
          { text: '6. Робота з формами в React', link: '/api-examples' },
          { text: '7. Робота з API в React', link: '/api-examples' },
          { text: '8. Роутинг в React', link: '/api-examples' },
          { text: '9. Додаткові можливості React', link: '/api-examples' },
          { text: '10. Оптимізація та тестування в React', link: '/api-examples' }
        ]
      },
      {
        text: 'Backend',
        items: [
          { text: '1. Вступ до backend розробки та роль у WEB-застосунках', link: '/markdown-examples' },
          { text: '2. Основи Node.js', link: '/api-examples' },
          { text: '3. Робота з базами даних MySQL', link: '/api-examples' },
          { text: '4. Робота з базами даних MongoDB', link: '/api-examples' },
          { text: '5. Основи backend розробки з використанням PHP', link: '/api-examples' },
          { text: '6. Основи backend розробки з використанням Python', link: '/api-examples' },
          { text: '7. Основи backend розробки з використанням Java', link: '/api-examples' },
          { text: '8. Розгортання WEB-застосунків', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
