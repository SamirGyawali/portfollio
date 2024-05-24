import { getImageURL } from '../../utils'
import styles from './Projects.module.css'
import React from 'react'

const Projects = () => {
  return (
    <section className={styles.container}>
        <div className={styles.projecttextdiv}>
                <h1 className={styles.project}>
                    PROJECTS
                </h1>
                <p className={styles.projectintro}>
                    Here are some projects that made through the maze
                    of procastination and coffee breaks.
                </p>
                <div className={styles.conclusiondiv}>
                    <span className={styles.conclusion}>Yes! i do . . . <span className={styles.sometimes}>sometimes</span> . . . complete projects after starting them.</span>
                </div>
        </div>
        <div className={styles.projectcontainer}>
                <div className={styles.project1}>
                    <img src={getImageURL("projects/todo.png")} className={styles.projectimage} alt="todoimage" />
                    <p className={styles.projectheading}>
                        The Porcastinator <br />
                        To-do List
                    </p>
                    <p className={styles.projectdescription}>
                        Designed for those who <br />
                        thrive on last minute  <br />
                        panic.
                    </p>
                    <span className={styles.learnmore}> Learn more</span>
                </div>
                <div className={styles.project2}>
                    <img src={getImageURL("projects/weather.png")} className={styles.projectimage} alt="weatherimage" />
                    <p className={styles.projectheading}>
                            Weather or Not
                    </p>
                    <p className={styles.projectdescription}>
                        Now you can blame <br />
                        weather for not going to <br />
                        the gym.
                    </p>
                    <span className={styles.learnmore}> Learn more</span>
                </div>
        </div>

    </section>
  )
}

export default Projects