import styles from './App.module.scss';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';

const App = () => {
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
    <ProjectCard />
    </>
  );
}

export default App;
