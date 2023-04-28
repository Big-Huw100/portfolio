import React from 'react';
import styles from './ProjectCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = (props) => {

  const {
    projectName,
    projectImage,
    githubLink,
  } = props.project;

  return (
    <div className={styles.projectCard}>
      <h1 className={styles.projectName}>{projectName}</h1>
      <img src={projectImage} />
      <span className={styles.linkIcons}>
         <a href={githubLink} target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        <FontAwesomeIcon icon={faRocket} />
      </span>
    </div>
  )
}


export default ProjectCard
