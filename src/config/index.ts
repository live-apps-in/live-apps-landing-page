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
  title: "Ping",
  baseURL: "http://localhost:5000",
  defaultTheme: "pure-light-theme",
  defaultPhonenumberCountry: "IN" as any,
  // defaultTheme: THEME_NAMES.PureLightTheme,
};

// homepage
export const homePageConfig = {
  pingHomepage: 'https://jagalive.co',
  projects: [
    { 
      name: 'Kitty Chan', 
      link: '', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
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
      name: 'Ping', 
      link: '', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
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
      link: '', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
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
      link: '', 
      image: 'https://cdn.discordapp.com/icons/1017387720902967347/2403bfd7aef0c14c6a1a5c4136c7de7f.webp?size=240',
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

  
}