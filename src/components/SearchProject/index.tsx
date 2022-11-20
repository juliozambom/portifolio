import { useState, useEffect } from 'react';
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
import projects, { IProject } from '../../utils/projects';

interface ISearchProjectProps {
  onChange: (projects: IProject[]) => void;
}

export default function SearchProject({ onChange }: ISearchProjectProps) {
  const [isOrderTypeContainerOpen, setIsOrderTypeContainerOpen] = useState(false);

  const [isFilterTypeContainerOpen, setIsFilterTypeContainerOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const filteredProjects = projects.filter((project) => {
      return project.name.toLowerCase().includes(searchQuery.toLowerCase());
    })

    onChange(filteredProjects);

  }, [searchQuery])

  const SelectorVariants = {
    show: {
      width: '90%',
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
      <SearchInput 
        placeholder="Pesquise algum projeto..." 
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="button-wrapper">
        <FilterTypeButton>
            <button
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
          </button>
              <FilterTypeContainer
                as={motion.div}
                variants={SelectorVariants}
                animate={isFilterTypeContainerOpen ? 'show' : 'hidden'}
                transition={{ duration: 0.1 }}
                className="dropdown-menu"
              />
        </FilterTypeButton>

        <OrderButton>
          <button
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
          </button>
          <OrderTypeContainer
              as={motion.div}
              variants={SelectorVariants}
              animate={isOrderTypeContainerOpen ? 'show' : 'hidden'}
              transition={{ duration: 0.15 }}
              className="dropdown-menu"
            />
          </OrderButton>
        </div>
    </Container>
  );
}
