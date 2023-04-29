import styles from './App.module.scss';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

import projects from './data/projects';


const App = () => {

  const getProjectCard = (project) => (
    <ProjectCard key={project.id} project={project} />
  );

  return (
    <>
    <section className={styles.header}>
      <img className={styles.img} src="./images/huw-godzilla.jpg" alt="Me with Godzilla" />
      <h1 className={styles.title}>Huw Williams</h1>
    </section>
    <section className={styles.intro}>
      <NavBar />
      <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae ipsum quidem autem, atque modi nostrum aspernatur non consequuntur eaque dolore ratione maxime error alias accusamus recusandae aliquid totam magnam. Suscipit.</p>
    </section>
    <section id='projectGrid' className={styles.projectGrid}>
      {projects.map(getProjectCard)}
      </section>
    <Footer />
    </>
  );
}

export default App;
