import { useState } from 'react';

import SearchProject from '../../components/SearchProject';
import ProjectDetailedCards from '../../components/ProjectDetailedCards';
import projects, { IProject } from '../../utils/projects';

import { Container } from './styles';

export default function AllProjects() {
  const [projectsData, setProjectsData] = useState<IProject[]>(projects);

  function changeFilteredProjects(filtered: IProject[]) {
    setProjectsData(filtered);
  }

  return (
    <Container>
      <SearchProject currentProjects={projectsData} onChange={changeFilteredProjects}/>
      <ProjectDetailedCards projects={projectsData}/>
    </Container>
  );
}
