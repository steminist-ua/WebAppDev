import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Development",
  description: "Online course of lectures on Frontend and Backend development",
  base: '/WebAppDev/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Головна', link: '/' },
      { text: 'Матеріали', link: '/frontend/f1' },
      { text: 'Frontend RoadMap', link: 'https://roadmap.sh/frontend' },
      { text: 'Backend RoadMap', link: 'https://roadmap.sh/backend' },
      { text: 'Підготовка до співбесід', link: 'https://steminist-ua.github.io/Interview-Questions/' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Frontend',
        items: [
          { text: '1. Вступ до веб-розробки і основи JavaScript', link: '/frontend/f1' },
          { text: '2. Робота з об\'єктами та масивами у JavaScript', link: '/frontend/f2' },
          { text: '3. Розробка інтерактивних веб-сторінок з використанням JavaScript', link: '/frontend/f3' },
          { text: '4. Основи React', link: '/frontend/f4'  },
          { text: '5. Робота зі станом в React', link: '/frontend/f5' },
          { text: '6. Робота з формами в React', link: '/frontend/f6' },
          { text: '7. Робота з API в React', link: '/frontend/f7' },
          { text: '8. Роутинг в React', link: '/frontend/f8' },
          { text: '9. Додаткові можливості React', link: '/frontend/f9' },
          { text: '10. Оптимізація та тестування в React', link: '/frontend/f10' }
        ]
      },
      {
        text: 'Backend',
        items: [
          { text: '1. Вступ до backend розробки та роль у WEB-застосунках', link: '/backend/b1' },
          { text: '2. Основи Node.js', link: '/backend/b2' },
          { text: '3. Робота з базами даних MySQL', link: '/backend/b3' },
          { text: '4. Робота з базами даних MongoDB', link: '/backend/b4' },
          { text: '5. Основи backend розробки з використанням PHP', link: '/backend/b5' },
          { text: '6. Основи backend розробки з використанням Python', link: '/backend/b6' },
          { text: '7. Основи backend розробки з використанням Java', link: '/backend/b7' },
          { text: '8. Розгортання WEB-застосунків', link: '/backend/b8' }
        ]
      },
      {
        text: 'Додаткові матеріали',
        items: [
          {text: 'Підготовка до іспиту (тестування)', link: 'test'},
          {text: 'Ідеї проєктів (react)', link: '/frontend/ideas'},
          {text: 'Ідеї проєктів (backend)', link: '/backend/ideas'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/steminist-ua' },
      { icon: 'instagram', link: 'https://www.instagram.com/steminist.ua' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/anastasiia-iskandarova-mala/' }
    ]
  }
})
