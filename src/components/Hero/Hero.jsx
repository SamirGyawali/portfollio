import styles from './Hero.module.css'
import { getImageURL } from '../../utils'

import React from 'react'

const Hero = () => {
  return (
    <section className={styles.container}>
    <div className={styles.content}>
      <div className={styles.names}>
        <h1 className={styles.fname}>
              SAMIR
        </h1>
        <p className={styles.lname}>GYAWALI</p>
        <p className={styles.intro}>Turning features into bugs</p>
      </div>
      <div className={styles.contentwrap}>
          <h4 className={styles.intro02}>Knack for Accidental Innovation</h4>
          <p className={styles.description}>
              When i'm not coding, i'm Crafting:<br />
              turning bugs into features and painting into pixel fun.
              It's a quirky blend of tech and art<br />
          </p>
          <div className={styles.conclusiondiv}>
            <span className={styles.conclusion}>—think of it as code with a splash of</span><span className={styles.color}> color!</span>
          </div>
      </div>
    </div>
    <img src={getImageURL("hero/img01.png")} alt="HeroImage" className={styles.heroImg}/>
</section>
  )
}

export default Hero