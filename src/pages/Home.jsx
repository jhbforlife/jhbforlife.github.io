import Card from '../components/Card';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div id={styles.home}>
      <Card heading="about me" body="hi hello" />
      {/* <Card heading="code" />
      <Card heading="photos" />
      <Card heading="writing" /> */}
    </div>
  );
};

export default Home;
