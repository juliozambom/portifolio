import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 5;
  display: none;

  ul {
    background: ${({ theme }) => theme.colors.purple[900]};
    width: 60vw;
    height: 100vh;
    right: -100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
  }

  li {
    font-size: 1.3rem;
    align-items: center;
    transition: all 0.1s ease-in;
    display: flex;
    flex-direction: column;

    &:after {
      content: '';
      background: ${({ theme }) => theme.colors.purple[500]};
      margin: 24px 0;
      height: 2px;
      width: 35vw;
    }
  }

  span {
    transition: all 0.1s ease-in;

    &:hover {
      color: ${({ theme }) => theme.colors.purple[500]};
      cursor: pointer;
    }
  }

  .close-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
    width: 2rem;
    height: auto;
  }
`;
