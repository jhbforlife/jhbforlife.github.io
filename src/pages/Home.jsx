// Internal non-components
import styles from './Home.module.css';

// Internal components
import Card from '../components/Card';

const Home = () => {
  const body = (
    <>
      <p>
        hello 👋 this space is a work in progress but will soon be a central hub
        to view some of my favorite code, photos, and writing.
        <br />
        <br />
        as far as I go, here are some fun facts:
      </p>
      <ul>
        <li>I live in Birmingham, AL</li>
        <li>I am an IB diploma recipient</li>
        <li>I will *at some point* have a BS in Psychology</li>
        <li>I currently work at Shipt as a software engineer intern</li>
        <li>
          I have an amazing fiance named Austin, and a demon-spawned cat named
          Sam E
        </li>
        <li>
          I have a congenital eye disorder called{' '}
          <a
            href="https://nystagmus.org/about/what-is-nystagmus/"
            target="__blank"
          >
            nystagmus
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <div id={styles.home}>
      <Card heading="about me" body={body} />
      {/* <Card heading="code" />
      <Card heading="photos" />
      <Card heading="writing" /> */}
    </div>
  );
};

export default Home;
