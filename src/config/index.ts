import { AmazonS3Logo, AppLogoFullImage, AWSDynamoDBLogo, CassandraDBLogo, DiscordLogo, DockerLogo, ExpressJSLogo, FirebaseLogo, GithubActionsLogo, GithubLogo, InversifyJSLogo, JenkinsLogo, KittyChanLogo, MaterialUILogo, MongoDBLogo, NodeJSLogo, NotionLogo, PostmanLogo, RabbitMQLogo, ReactLogo, RedisLogo } from "src/assets";

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
    description: 'We are building projects to learn and help others learn. Join our team of passionate contributors and make a difference in the open-source community. Help us build the future of web development'
  },
  projects: [
    { 
      name: 'kitty chan', 
      link: 'https://jagalive.co', 
      image: KittyChanLogo,
      id: 'kittychan',
      description: 'Serving 300+ Users in 6 Discord Servers. Kitty chan is a Discord Bot, powerful enough to moderate server',
      isBeta: false,
      features: [
        {
          name: 'Language Control',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Strong Language Detection.',
            'Non-English Detection.',
          ]
        },
        {
          name: 'Portal',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Enable messages across different servers.',
            'Filter potential spam messages and mentions.',
          ]
        },
        {
          name: 'Game matchmaking',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Detect players if someone wants to play VALORANT.',
            'Find players based on their rank.',
          ]
        },
        {
          name: 'Hands-free text',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Send texts from Amazon Alexa to discord server.',
            'Send texts from Google Assistant to discord server.',
          ]
        }
      ]
    },
    {
      name: 'Ping',
      link: 'https://jagalive.co', 
      image: AppLogoFullImage,
      id: 'ping',
      description: 'A chat application inspired from Discord',
      isBeta: true,
      features: [
        {
          name: 'Profile',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Free Animated profile banners and pictures.',
          ]
        },
        {
          name: 'High Resolution',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Source Quality Audio & Video Streaming.',
            'Larger File upload.',
          ]
        }
      ]
    },
    { 
      name: 'LiveCord', 
      link: 'https://jagalive.co', 
      image: AppLogoFullImage,
      id: 'livecord',
      description: 'Replace default Discord Bot Moderation from within Discord to a Web Page',
      isBeta: true,
      features: [
        {
          name: 'Customization',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Manage your server from your Web Browser.',
            'Customize how kitty chan works in your Server.',
          ]
        },
        {
          name: 'Security',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'You can specify teh permission for Bot control from the Web browser.',
            'LiveCord is protected with 2FA.',
          ]
        },
        {
          name: 'Limitations',
          isBeta: false,
          isLimitation: true,
          descriptions: [
            'LiveCord only works with Live Apps Bots (kitty chan as of now)',
          ]
        }
      ]
    },
    { 
      name: 'AirNotion', 
      link: 'https://jagalive.co', 
      image: AppLogoFullImage,
      id: 'airnotion',
      description: 'Use Amazon Alexa or Google Assistant to Modify your Notion database',
      isBeta: true,
      features: [
        {
          name: 'Accessibility',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            'Use your Voice Assistant to modify pages, blocks, database in your Notion Workspace.',
          ]
        },
        {
          name: 'Limitations',
          isBeta: false,
          isLimitation: true,
          descriptions: [
            'AirNotion should be self-hosted and certain API keys needs to be added.',
            'Still in early-stage of development.',
          ]
        }
      ]
    },
  ],
  technologies: [
    {
      name: 'Frontend',
      technologies: [
        {
          name: 'React JS',
          link: 'https://reactjs.org/',
          image: ReactLogo,
        },
        {
          name: 'React Native',
          link: 'https://reactnative.dev/',
          image: ReactLogo,
        },
        {
          name: 'Material UI',
          link: 'https://mui.com/',
          image: MaterialUILogo,
          description: 'Move faster with intuitive React UI tools'
        },
      ]
    },
    {
      name: 'Backend',
      technologies: [
        {
          name: 'Node JS',
          link: 'https://nodejs.org/',
          image: NodeJSLogo,
        },
        {
          name: 'Express JS',
          link: 'https://expressjs.com/',
          image: ExpressJSLogo,
        },
        {
          name: 'Inversify JS',
          link: 'https://inversify.io/',
          image: InversifyJSLogo,
        },
        {
          name: 'RabbitMQ',
          link: 'https://www.rabbitmq.com/',
          image: RabbitMQLogo,
        },
      ]
    },
    {
      name: 'Cloud',
      technologies: [
        {
          name: 'Docker',
          link: 'https://www.docker.com/',
          image: DockerLogo,
        },
        {
          name: 'Jenkins',
          link: 'https://www.jenkins.io/',
          image: JenkinsLogo,
        },
        {
          name: 'GitHub Actions',
          link: 'https://github.com/features/actions',
          image: GithubActionsLogo,
        },
        {
          name: 'AWS S3',
          link: 'https://aws.amazon.com/s3/',
          image: AmazonS3Logo,
        },
        {
          name: 'FireBase',
          link: 'https://firebase.google.com/',
          image: FirebaseLogo,
        },
      ]
    },
    {
      name: 'Database',
      technologies: [
        {
          name: 'MongoDB',
          link: 'https://www.mongodb.com/',
          image: MongoDBLogo,
        },
        {
          name: 'DynamoDB',
          link: 'https://aws.amazon.com/dynamodb/',
          image: AWSDynamoDBLogo,
        },
        {
          name: 'CassandraDB',
          link: 'https://cassandra.apache.org/',
          image: CassandraDBLogo,
        },
        {
          name: 'Redis',
          link: 'https://redis.io/',
          image: RedisLogo,
        },
      ]
    },
    {
      name: 'Tools & Communication',
      technologies: [
        {
          name: 'Github',
          link: 'https://github.com/live-apps-in',
          image: GithubLogo,
        },
        {
          name: 'Discord',
          link: 'https://discord.com/channels/1017387720902967347/1017387724161945632',
          image: DiscordLogo,
        },
        {
          name: 'Notion',
          link: 'https://www.notion.so/Live-Apps-2016f12fc01d481fb29fe7fad545091a',
          image: NotionLogo,
        },
        {
          name: 'Postman',
          link: 'https://www.postman.com/',
          image: PostmanLogo,
        },
      ]
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
  ],
  joinUs: {
    description: 'We are actively looking for contributors for AI/ML, UI/UX domains',
    links: [
      {
        name: 'Discord',
        link: 'https://discord.gg/4uz7vtzc',
        image: DiscordLogo
      }
    ]
  }
};
