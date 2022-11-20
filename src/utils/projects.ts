import betterWorld from '../assets/projects/better-world.png';
import instagramClone from '../assets/projects/instagram-clone.png';

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
    name: 'BetterWorld',
    area: 'Front-end',
    date: new Date('11-16-2022'),
    description:
      'Uma simples landing page de uma empresa fictícia que visa ajudar o meio ambiente.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    github: 'https://github.com/juliozambom/betterworld',
    deploy: 'https://betterworld.vercel.app',
    image: betterWorld
  },
  {
    name: 'Instagram Clone',
    area: 'Mobile',
    date: new Date('02-26-2022'),
    description:
      'Aplicação clone da tela de posts do instagram, desenvolvida com o intuito de aprimorar meus conhecimentos em React Native.',
    technologies: [
      'React Native',
      'JavaScript',
      'Animatable',
      'JavaScript',
      'JavaScript',
    ],
    github: 'https://github.com/juliozambom/instagram-clone',
    deploy: '',
    image: instagramClone
  },
];
