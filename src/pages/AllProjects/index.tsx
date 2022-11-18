import { useState } from 'react';

import SearchProject from '../../components/SearchProject';
import ProjectDetailedCards from '../../components/ProjectDetailedCards';
import projects, { IProject } from '../../utils/projects';

export default function AllProjects() {
  const [projectsData, setProjectsData] = useState<IProject[]>(projects);

  function changeFilteredProjects(filtered: IProject[]) {
    setProjectsData(filtered);
  }

  return (
    <>
      <SearchProject onChange={changeFilteredProjects}/>
      <ProjectDetailedCards projects={projectsData}/>
    </>
  );
}
