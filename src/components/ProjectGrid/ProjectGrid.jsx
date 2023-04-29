import React from 'react';
import styles from './ProjectGrid.module.scss'
import ProjectCard from './../ProjectCard';
import projects from '../../data/projects';

const getProjectCard = (project) => (
    <ProjectCard key={project.id} project={project} />
  );

const ProjectGrid = () => {
  return (
    <section id='projectGrid' className={styles.projectGrid}>
      {projects.map(getProjectCard)}
      </section>
  )
}

export default ProjectGrid
