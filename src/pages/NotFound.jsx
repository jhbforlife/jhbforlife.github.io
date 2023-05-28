import Card from '../components/Card';

const NotFound = () => {
  return (
    <Card
      style={{
        height: 'fit-content',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      body={
        <div>
          <h1>oops! nothing here...</h1>
          <div
            style={{
              width: '100%',
              height: 0,
              paddingBottom: '145%',
              position: 'relative',
            }}
          >
            <iframe
              src='https://giphy.com/embed/VwoJkTfZAUBSU'
              width='100%'
              height='100%'
              style={{ position: 'absolute' }}
            ></iframe>
          </div>
        </div>
      }
    />
  );
};

export default NotFound;
