export interface IProject {
  name: string;
  area: string;
  date: Date;
  description: string;
  technologies: Array<string>;
  github: string;
  deploy: string;
  image: string;
}

export default [
  {
    name: 'Trainya',
    area: 'Front-end',
    date: new Date('11-16-2022'),
    description:
      'Uma simples landing page de uma empresa fictícia que visa ajudar o meio ambiente.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
    ],
    github: '',
    deploy: 'https://betterworld.vercel.app',
    image:
      'https://camo.githubusercontent.com/c20bb05671ff3096b4a8d7c6bd26602f2ab7c3c0dbe8e793560d3a4275ec1d3e/68747470733a2f2f692e696d6775722e636f6d2f535566754b6b492e706e67',
  },
  {
    name: 'BetterWorld',
    area: 'Front-end',
    date: new Date('11-16-2021'),
    description:
      'Uma simples landing page de uma empresa fictícia que visa ajudar o meio ambiente.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
    ],
    github: '',
    deploy: '',
    image:
      'https://camo.githubusercontent.com/c20bb05671ff3096b4a8d7c6bd26602f2ab7c3c0dbe8e793560d3a4275ec1d3e/68747470733a2f2f692e696d6775722e636f6d2f535566754b6b492e706e67',
  },
  {
    name: 'BetteBackrWorld',
    area: 'Back-end',
    date: new Date('11-16-2019'),
    description:
      'Uma simples landing page de uma empresa fictícia que visa ajudar o meio ambiente.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Socket.io',
      'MongoDB',
    ],
    github: '',
    deploy: '',
    image:
      'https://camo.githubusercontent.com/c20bb05671ff3096b4a8d7c6bd26602f2ab7c3c0dbe8e793560d3a4275ec1d3e/68747470733a2f2f692e696d6775722e636f6d2f535566754b6b492e706e67',
  },
];
