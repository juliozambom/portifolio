import js from '../assets/techs/js.png';
import ts from '../assets/techs/ts.png';
import node from '../assets/techs/node.png';
import react from '../assets/techs/react.png';
import styled from '../assets/techs/styled.png';
import mysql from '../assets/techs/mysql.png';

export interface ITech {
  name: string;
  icon: any;
}

export default [
  {
    name: 'JavaScript',
    icon: js,
  },
  {
    name: 'TypeScript',
    icon: ts,
  },
  {
    name: 'NodeJS',
    icon: node,
  },
  {
    name: 'React',
    icon: react,
  },
  {
    name: 'Styled Components',
    icon: styled,
  },
  {
    name: 'MySQL',
    icon: mysql,
  },
];
