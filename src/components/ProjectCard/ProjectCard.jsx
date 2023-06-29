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
    pagesLink,
    description,
  } = props.project;

  return (
    <div className={styles.projectCard}>
      <img src={projectImage} />
      <section className={styles.rightHandSide}>
        <h1 className={styles.projectName}>{projectName}</h1>
        <p>{description}</p>
      <section className={styles.linkIcons}>
         <a href={githubLink} target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href={pagesLink} target='blank'><FontAwesomeIcon icon={faRocket} /></a>
      </section>
      </section>
    </div>
  )
}


export default ProjectCard
