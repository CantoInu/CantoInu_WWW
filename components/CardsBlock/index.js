import React from 'react'
import { Container } from 'components/Page'
import styles from './index.module.scss'

const CardsBlock = () => {
  return (
    <Container className={styles.cardsBlockWrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.title}>Card 1</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.circle}>
            {'card content'}
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Card 2</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.circle}>
            {'card content'}
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Card 3</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.circle}>
            {'card content'}
          </div>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Card 4</h3>
          <div className={styles.bar}>
            <div className={styles.emptybar}></div>
            <div className={styles.filledbar}></div>
          </div>
          <div className={styles.circle}>
            {'card content'}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CardsBlock
