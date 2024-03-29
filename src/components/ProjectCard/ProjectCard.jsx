import React from 'react';
import styles from './ProjectCard.module.scss';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectCard = (props) => {

  const {
    projectName,
    projectImage,
    altText,
    githubLink,
    pagesLink,
    description,
  } = props.project;

  return (
    <Link to={pagesLink} target="blank" style={{ textDecoration: "none"}}>
    <div className={styles.projectCard}>
      <img src={projectImage} alt={altText} />
      <section className={styles.rightHandSide}>
        <h1 className={styles.projectName}>{projectName}</h1>
        <p>{description}</p>
      <section className={styles.linkIcons}>
         <a href={githubLink} target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        <a href={pagesLink} target='blank'><FontAwesomeIcon icon={faRocket} /></a>
      </section>
      </section>
    </div>
    </Link>
  )
}


export default ProjectCard
