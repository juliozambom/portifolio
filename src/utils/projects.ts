import betterWorld from '../assets/projects/better-world.png';
import instagramClone from '../assets/projects/instagram-clone.png';
import toDoListApp from '../assets/projects/to-do-list-app.png';
import trainya from '../assets/projects/trainya.png';

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
    date: new Date('10-13-2022'),
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
    ],
    github: 'https://github.com/juliozambom/instagram-clone',
    deploy: '',
    image: instagramClone
  },
  {
    name: 'To do list APP',
    area: 'Full-stack',
    date: new Date('04-05-2022'),
    description: 'Aplicativo onde o usuário pode criar suas próprias notas e salva-lás em seu usuário previamente cadastrado no sistema',
    technologies: [
      'React Native',
      'JavaScript',
      'MySQL',
      'Moti',
      'Axios'
    ],
    github: 'https://github.com/juliozambom/to-do-list-mobileapp',
    deploy: '',
    image: toDoListApp
  },
  {
    name: 'Trainya APP',
    area: 'Mobile',
    date: new Date('11-16-2022'),
    description: `Foi desenvolvido um sistema de gerenciamento de academias (Plataforma web) e um gestor pessoal de atividades físicas(App mobile).
      O projeto conta com integrações entre ambas as plataformas, incluindo atualização de informações em tempo real`,
    technologies: [
      'React Native',
      'Styled Components',
      'Socket.io',
      'TypeScript',
      'Expo Camera',
      'Native Base',
      'Axios'
    ],
    github: 'https://github.com/juliozambom/to-do-list-mobileapp',
    deploy: '',
    image: trainya
  },
];
