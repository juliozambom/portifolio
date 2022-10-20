import { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { Container } from './styles';

interface IMobileMenu {
  isMenuActive: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  isMenuActive,
  setIsMenuActive,
}: IMobileMenu) {
  const OverlayVariants = {
    hidden: {
      opacity: 0,
      transitionEnd: {
        display: 'none',
      },
    },
    show: {
      opacity: 1,
      display: 'block',
    },
  };

  const MobileMenuVariants = {
    hidden: { right: '-100%' },
    show: { right: 0 },
  };

  function handleMenuClose() {
    setIsMenuActive(false);
  }

  return (
    <Container
      variants={OverlayVariants}
      animate={isMenuActive ? 'show' : 'hidden'}
    >
      <motion.ul
        variants={MobileMenuVariants}
        animate={isMenuActive ? 'show' : 'hidden'}
      >
        <li>
          <Link
            to="About"
            smooth
            offset={-48}
            onClick={() => handleMenuClose()}
          >
            <span>Sobre</span>
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth
            offset={-48}
            onClick={() => handleMenuClose()}
          >
            <span>Projetos</span>
          </Link>
        </li>
        <li>
          <Link
            to="Techs"
            smooth
            offset={-48}
            onClick={() => handleMenuClose()}
          >
            <span>Tecnologias</span>
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth
            offset={-48}
            onClick={() => handleMenuClose()}
          >
            <span>Contato</span>
          </Link>
        </li>
        <span
          className="close-icon-container"
          onClick={() => setIsMenuActive(false)}
        >
          <AiOutlineClose className="close-icon" />
        </span>
      </motion.ul>
    </Container>
  );
}
