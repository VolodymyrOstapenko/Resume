// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//=================================================================

var header = {
  name: {
    firstname: 'Dmytro',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ per month',
  address: 'Ukraine, Kyiv, 01001',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@gmail.com',
      href: 'malito:ivanov@gmail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Sumary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to`work on a new project I learn the domain and try to understand the idea of the project. Good team``player, every colleague is a friend to me.`',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (`tournament position, goals etc), analyzing by simple mathematics models and preparing probability``for such events like: money line - first win / draw / second win, totals etc.`',
      },
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 8,
          isTop: true,
        },
        {
          name: 'VS Code, Git',
          point: 7,
          isTop: true,
        },
        {
          name: 'Terminal, NPM',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'плавання',
          isMain: true,
        },
        {
          name: 'шахи',
          isMain: true,
        },
        {
          name: 'карти',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        { name: 'Школа №1', isEnd: true },
        { name: 'Ліцей №14', isEnd: false },
        { name: 'Унівеситет УкДЛТУ', isEnd: true },
        { name: 'Університет імені Шевченка', isEnd: true },
      ],
      certificates: [
        { name: 'certificat1', id: 1011 },
        { name: 'certificat2', id: 8025 },
        { name: 'certificat3', id: 9586 },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
// ================================================================
// ================================================================
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'It Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Rezume',
              url: 'https://rezume.com.ua/',
              about: '......',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: '....',
                },
                {
                  name: '....',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
// ================================================================
