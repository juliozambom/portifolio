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
import { IProject } from '../../utils/projects';

interface ISearchProjectProps {
  currentProjects: IProject[];
  onChange: (projects: IProject[]) => void;
}

export default function SearchProject({ currentProjects, onChange }: ISearchProjectProps) {
  const [projects, setProjects] = useState(currentProjects);

  const [isOrderTypeContainerOpen, setIsOrderTypeContainerOpen] = useState(false);
  const [isFilterTypeContainerOpen, setIsFilterTypeContainerOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    onChange(filteredProjects);
  }, [searchQuery, filterType])

  const searchedProjects = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  });

  const filteredProjects = searchedProjects.filter((project) => {
    if (['Front-end', 'Back-end', 'Mobile', 'Full-stack'].some((area) => area === filterType)) {
      return project.area === filterType;
    }

    if(['MongoDB', 'MySQL', 'Socket.io'].some((tech) => tech === filterType)) {
      return project.technologies.map((tech) => {
        return tech === filterType;
      }).includes(true)
    }

    return searchedProjects;
  })

  


  const SelectorVariants = {
    show: {
      width: '90%',
      opacity: 1
    },
    hidden: {
      width: '0%',
      height: '0%',
      opacity: 0
    },
  };

  const filterOptions = [
    'Front-end',
    'Back-end',
    'Mobile',
    'Full-stack',
    'MongoDB',
    'MySQL',
    'Socket.io'
  ];

  function handleSelectFilterType(type: string) {
    if(filterType === type) {
      setFilterType('');
    } else {
      setFilterType(type);
    }

    setIsFilterTypeContainerOpen(false);
  }

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
            >
              {filterOptions.map((filterOption) => (
                <span className={filterType === filterOption ? 'active' : ''} onClick={() => handleSelectFilterType(filterOption)}>{filterOption}</span>
              ))}
            </FilterTypeContainer>
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
          >
            <span>Recentes</span>
            <span>Antigos</span>
          </OrderTypeContainer>
          </OrderButton>
        </div>
    </Container>
  );
}
