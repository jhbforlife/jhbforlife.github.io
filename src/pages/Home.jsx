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
        as far as i go, here are some fun facts:
      </p>
      <ul>
        <li>i am located in boston, ma</li>
        <li>
          i graduated from jcib in 2017 and earned my{' '}
          <a
            href='https://www.ibo.org/programmes/diploma-programme/what-is-the-dp/'
            rel='noreferrer'
            target='_blank'
          >
            ib diploma
          </a>
        </li>
        <li>
          i am an Engineer at{' '}
          <a href='https://shipt.com' rel='noreferrer' target='_blank'>
            shipt
          </a>
        </li>
        <li>
          me and my amazing husband austin have a demon-spawned cat named sam e
        </li>
        <li>
          i have a congenital eye disorder called{' '}
          <a
            href='https://nystagmus.org/about/what-is-nystagmus/'
            rel='noreferrer'
            target='_blank'
          >
            nystagmus
          </a>
        </li>
      </ul>
    </>
  );

  return (
    <div id={styles.home}>
      <Card heading='about me' body={body} />
      {/* <Card heading="code" />
      <Card heading="photos" />
      <Card heading="writing" /> */}
    </div>
  );
};

export default Home;
