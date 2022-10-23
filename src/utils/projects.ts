export interface IProject {
  name: string;
  area: string;
  description: string;
  technologies: Array<string>;
  github: string;
  deploy: string;
  image: string;
}

export default [
  {
    name: 'BetterWorld',
    area: 'Front-end',
    description:
      'Uma simples landing page de uma empresa fictícia que visa ajudar o meio ambiente.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'JavaScript',
      'JavaScript',
      'HTML',
    ],
    github: '',
    deploy: 'https://betterworld.vercel.app',
    image: 'https://i.imgur.com/8Z7Z7Zu.png',
  },
];
