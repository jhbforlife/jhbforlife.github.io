import styles from './Card.module.css';

const Card = ({ heading, body, style }) => {
  return (
    <div className={styles.card} style={style}>
      <h2>{heading}</h2>
      {typeof body === 'string' ? <p>{body}</p> : body}
    </div>
  );
};

export default Card;
