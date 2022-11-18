import { useState } from 'react';
import { motion } from 'framer-motion';

import { AiOutlineOrderedList } from 'react-icons/ai';

import {
  Container,
  SearchInput,
  OrderButton,
  OrderTypeContainer,
  FilterTypeButton,
  FilterTypeContainer,
} from './styles';
import { theme } from '../../styles/theme';

export default function SearchProject() {
  const [isOrderTypeContainerOpen, setIsOrderTypeContainerOpen] = useState(false);

  const [isFilterTypeContainerOpen, setIsFilterTypeContainerOpen] = useState(false);

  const SelectorVariants = {
    show: {
      width: '110%',
      height: '100%',
      opacity: 1
    },
    hidden: {
      width: '0%',
      height: '0%',
      opacity: 0
    },
  };

  return (
    <Container>
      <SearchInput placeholder="Pesquise algum projeto..." />

      <FilterTypeButton
        className={isFilterTypeContainerOpen ? 'active' : ''}
        onClick={() => {
          setIsFilterTypeContainerOpen((prev) => !prev);
          setIsOrderTypeContainerOpen(false);
        }}
      >
        <AiOutlineOrderedList
          className="icon"
          size={24}
          color={theme.light.colors.purple[50]}
        />
        <p>Filtros</p>
        <FilterTypeContainer
          as={motion.div}
          variants={SelectorVariants}
          animate={isFilterTypeContainerOpen ? 'show' : 'hidden'}
          transition={{ duration: 0.1 }}
          className="dropdown-menu"
        />
      </FilterTypeButton>

      <OrderButton
        className={isOrderTypeContainerOpen ? 'active' : ''}
        onClick={() => {
          setIsOrderTypeContainerOpen((prev) => !prev);
          setIsFilterTypeContainerOpen(false);
        }}
      >
        <AiOutlineOrderedList
          className="icon"
          size={24}
          color={theme.light.colors.purple[50]}
        />
        <p> Ordenar por</p>
        <OrderTypeContainer
          as={motion.div}
          variants={SelectorVariants}
          animate={isOrderTypeContainerOpen ? 'show' : 'hidden'}
          transition={{ duration: 0.15 }}
          className="dropdown-menu"
        />
      </OrderButton>
    </Container>
  );
}
