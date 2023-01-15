export const authConfig = {
  authPage: "/auth/login", // exact page where the user will be redirected if not loggedin
  signupPage: "/auth/signup",
  homePage: "/",
  tokenAccessor: "token",
};

// #rbac-setup
export const rbacConfig = {
  roles: ["admin"],
  homePage: {
    admin: "/admin",
  },
  publicRoutes: ["/verification"],
  authRoutes: ["/auth", "/auth/login"], // pages that are used for authentication purposes
};

export const projectConfig = {
  title: "Live Apps",
  baseURL: "http://localhost:5000",
  defaultTheme: "pure-light-theme",
  defaultPhonenumberCountry: "IN" as any,
  // defaultTheme: THEME_NAMES.PureLightTheme,
};

// homepage
export const homePageConfig = {
  pingHomepage: 'https://jagalive.co',
  intro: {
    title: 'Welcome to Live Apps',
    slogan: 'Developing something bigger',
    description: 'We are building projects to learn and help others learn. Join our team of passionate contributors and make a difference in the open-source community. Help us build the future of web development.'
  },
  projects: [
    { 
      name: 'Kitty Chan', 
      link: 'https://jagalive.co', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
      description: 'Serving 300+ Users in 6 Discord Servers. Kitty chan is a Discord Bot, powerful enough to moderate server.',
      features: [
        {
          name: 'Language Control',
          descriptions: [
            'Strong Language Detection',
            'Non-English Detection',
          ]
        },
        {
          name: 'Portal',
          descriptions: [
            'Enable messages across different servers',
            'Filter potential spam messages and mentions',
          ]
        },
        {
          name: 'Game matchmaking',
          descriptions: [
            'Detect players if someone wants to play VALORANT',
            'Find players based on their rank',
          ]
        },
        {
          name: 'Hands-free text',
          descriptions: [
            'Send texts from Amazon Alexa to discord server',
            'Send texts from Google Assistant to discord server',
          ]
        }
      ]
    },
    {
      name: 'Ping', 
      link: 'https://jagalive.co', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
      description: 'Description of the project',
      features: [
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        },
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        }
      ]
    },
    { 
      name: 'LiveCord', 
      link: 'https://jagalive.co', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
      description: 'Description of the project',
      features: [
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        },
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        }
      ]
    },
    { 
      name: 'AirNotion', 
      link: 'https://jagalive.co', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
      description: 'Description of the project',
      features: [
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        },
        {
          name: 'Feature Name',
          descriptions: [
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
            'Description of the feature. Description of the feature. Description of the feature. Description of the feature. Description of the feature.',
          ]
        }
      ]
    },
  ],
  technologies: [
    {
      name: 'React JS',
      link: 'https://reactjs.org/',
      image: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
      description: 'A JavaScript library for building user interface'
    },
    {
      name: 'Node JS',
      link: 'https://nodejs.org/',
      image: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
      description: 'JavaScript runtime environment'
    },
    {
      name: 'React Native',
      link: 'https://reactnative.dev/',
      image: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
      description: 'Native apps for Android and iOS'
    },
    {
      name: 'Material UI',
      link: 'https://reactnative.dev/',
      image: 'https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg',
      description: 'Move faster with intuitive React UI tools'
    },
  ],
  contributors: [
    { 
      name: 'Dikshit', 
      image: 'https://media.licdn.com/dms/image/D5603AQEgdtp1FdEptQ/profile-displayphoto-shrink_800_800/0/1670564217455?e=1678924800&v=beta&t=mT0ulR2HUys4wX8kR_OkXqx4Oze86vUHleLoTpJp-Dc', 
      role: 'Senior Front-end Developer', 
      link: 'https://portfolio.dikshit.live' 
    },
    { 
      name: 'Jaga', 
      image: 'https://media.licdn.com/dms/image/C4D03AQE36ew5sx7HmQ/profile-displayphoto-shrink_800_800/0/1656441989564?e=1678924800&v=beta&t=kFq77FkWMx7inw5MZpfY2wTwQLLSQbEE8LafXx48UMA', 
      role: 'Senior Back-end Developer', 
      link: 'https://portfolio.dikshit.live' 
    },
    { 
      name: 'Inderajith', 
      image: 'https://media.licdn.com/dms/image/C5103AQHK3EqoFyO_2A/profile-displayphoto-shrink_800_800/0/1580924156215?e=1678924800&v=beta&t=sDpZaqptgFpjv60-Z39rGHksBilmAAYVbApzZNJfjCg', 
      role: 'Senior Mobile App Developer', 
      link: 'https://portfolio.dikshit.live' 
    }
  ]
};
