import styles from './styles.module.css'

const Rating = ( {rate}: {rate: number} ) => {

  return (
  <span className={styles.star5_rating} data-rate={rate}></span>
  )
}

export default Rating
