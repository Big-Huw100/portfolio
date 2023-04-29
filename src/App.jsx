import styles from './App.module.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectGrid from './components/ProjectGrid/ProjectGrid';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <main className={styles.App}>
      <Header />
      <Intro />
      <ProjectGrid />
      <Footer />
    </main>
    </>
  );
}

export default App;
