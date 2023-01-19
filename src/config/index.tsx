import { styled } from "@mui/material/styles";
import { AmazonS3Logo, AppLogoFullImage, AWSDynamoDBLogo, CassandraDBLogo, DiscordLogo, DockerLogo, ExpoLogo, ExpressJSLogo, FirebaseLogo, GithubActionsLogo, GithubLogo, GraphQLLogo, InversifyJSLogo, JenkinsLogo, KittyChanLogo, MaterialUILogo, MongoDBLogo, NestJSLogo, NextJSLogo, NginxLogo, NodeJSLogo, NotionLogo, PostmanLogo, RabbitMQLogo, ReactLogo, RedisLogo, ReduxLogo, StyledComponentsLogo } from "src/assets";

// custom designs
// https://cssgradient.io/blog/css-gradient-text/ -- reference
const IntroGradient = styled('span')`
  background: linear-gradient(90deg, #4AC7FA 0%, #E649F5 100%);
  background-clip: text;
  text-fill-color: transparent;
  font-weight: bold;
`;

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
    title: <>Welcome to <IntroGradient>Live Apps</IntroGradient></>,
    slogan: <>Developing something <b style={{ fontSize: 30 }}>Bigger</b></>,
    description: 'We are building projects to learn and help others learn. Join our team of passionate contributors and make a difference in the open-source community. Help us build the future of web development'
  },
  projects: [
    { 
      name: 'kitty chan', 
      link: 'https://kittychan.jagalive.in', 
      image: KittyChanLogo,
      id: 'kittychan',
      description: <>Serving <b style={{ fontSize: 20 }}>400+</b> users in <b style={{ fontSize: 20 }}>8</b> Discord servers. Kitty chan is a <b>Discord bot</b>, powerful enough to moderate your Discord server</>,
      isBeta: false,
      isLive: true,
      features: [
        {
          name: 'Language Control',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Strong <b>Language Detection.</b></>,
            <><b>Non-English</b> Detection.</>,
          ]
        },
        {
          name: 'Portal',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Enable messages <b>across different servers.</b></>,
            <>Filter potential <b>spam messages, links</b> and mentions.</>,
          ]
        },
        {
          name: 'Game matchmaking',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Detect players if someone wants to <b>play VALORANT.</b></>,
            <><b>Players Matchmaking</b> based on their rank.</>,
          ]
        },
        {
          name: 'Hands-free text',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Send texts from <b>Amazon Alexa</b> to discord server.</>,
            <>Send texts from <b>Google Assistant</b> to discord server.</>,
          ]
        }
      ]
    },
    {
      name: 'Ping',
      link: 'https://jagalive.in', 
      image: AppLogoFullImage,
      id: 'ping',
      description: 'A chat application inspired from Discord',
      isBeta: true,
      features: [
        {
          name: 'Customization',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Free <b>Animated profile</b> banners and pictures.</>,
            <><b>Animated server/community profile</b> picture and background.</>,
          ]
        },
        {
          name: 'High Resolution',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Source Quality <b>Audio & Video Streaming.</b></>,
            'Larger File upload.',
          ]
        },
        {
          name: 'Limitation',
          isBeta: false,
          isLimitation: true,
          descriptions: [
            <>Closed Beta will be available only for few discord users.</>,
            'Does not support iOS Devices',
          ]
        },
      ]
    },
    { 
      name: 'LiveCord', 
      link: 'https://jagalive.in', 
      image: DiscordLogo,
      id: 'livecord',
      description: <><b>Replace default Discord Bot Moderation</b> from within Discord to a Web Page</>,
      isBeta: true,
      features: [
        {
          name: 'Customization',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <><b>Manage your server</b> from your Web Browser.</>,
            <><b>Customize how kitty chan works</b> in your Server.</>,
          ]
        },
        {
          name: 'Security',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>You can specify the <b>permission for Bot control</b> from the Web browser.</>,
            <>LiveCord is <b>protected with 2FA.</b></>,
          ]
        },
        {
          name: 'Limitations',
          isBeta: false,
          isLimitation: true,
          descriptions: [
            <>LiveCord only works with <b>Live Apps Bots</b> (kitty chan as of now)</>,
          ]
        }
      ]
    },
    { 
      name: 'AirNotion', 
      link: 'https://jagalive.in', 
      image: NotionLogo,
      id: 'airnotion',
      description: <>Use Amazon Alexa or Google Assistant to <b>Modify your Notion database</b></>,
      isBeta: true,
      features: [
        {
          name: 'Accessibility',
          isBeta: false,
          isLimitation: false,
          descriptions: [
            <>Use your <b>Voice Assistant to modify</b> pages, blocks, database in your Notion Workspace.</>,
          ]
        },
        {
          name: 'Limitations',
          isBeta: false,
          isLimitation: true,
          descriptions: [
            <>AirNotion should be <b>self-hosted</b> and certain API keys needs to be added.</>,
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
          name: 'Next JS',
          link: 'https://nextjs.org/',
          image: NextJSLogo,
        },
        {
          name: 'Expo',
          link: 'https://expo.dev/',
          image: ExpoLogo,
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
        },
        {
          name: 'Redux',
          link: 'https://redux.js.org/',
          image: ReduxLogo,
        },
        {
          name: 'Styled Components',
          link: 'https://styled-components.com/',
          image: StyledComponentsLogo,
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
          name: 'Nest JS',
          link: 'https://nestjs.com/',
          image: NestJSLogo,
        },
        {
          name: 'GraphQL',
          link: 'https://graphql.org/',
          image: GraphQLLogo,
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
          name: 'Nginx',
          link: 'https://www.nginx.com/',
          image: NginxLogo,
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
      role: 'Frontend Web', 
      link: 'https://portfolio.dikshit.live' 
    },
    { 
      name: 'Jaga', 
      image: 'https://media.licdn.com/dms/image/C4D03AQE36ew5sx7HmQ/profile-displayphoto-shrink_800_800/0/1656441989564?e=1678924800&v=beta&t=kFq77FkWMx7inw5MZpfY2wTwQLLSQbEE8LafXx48UMA', 
      role: 'Backend & DevOps', 
      link: 'https://www.linkedin.com/in/jagadheesh-m-77927817b/' 
    },
    { 
      name: 'Inderajith', 
      image: 'https://media.licdn.com/dms/image/C5103AQHK3EqoFyO_2A/profile-displayphoto-shrink_800_800/0/1580924156215?e=1678924800&v=beta&t=sDpZaqptgFpjv60-Z39rGHksBilmAAYVbApzZNJfjCg', 
      role: 'Mobile App & UI/UX', 
      link: 'https://portfolio.dikshit.live' 
    }
  ],
  joinUs: {
    description: <>We are actively looking for contributors in <b>AI/ML, UI/UX</b> domains.</>,
    links: [
      {
        name: 'Discord',
        link: 'https://discord.com/invite/6FcsJBYaaE',
        image: DiscordLogo
      }
    ]
  }
};
