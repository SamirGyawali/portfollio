import React, {useState} from 'react'
import styles from './Navbar.module.css';
import { getImageURL } from '../../utils';

export const Navbar = () => {
    const [MenuOpen, setMenuOpen] = useState(false);

    return (
    <>
        <nav className={styles.navbar}>
        <img className={styles.menuBtn} src={MenuOpen ? getImageURL("nav/close-menu.svg"): getImageURL("nav/bx-menu.svg")} alt="manu-button" 
                        onClick={()=>setMenuOpen(!MenuOpen)}/>  
          
                <ul className={styles.menuItems}>
                    <li>
                        <a href="/">Home</a> 
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/hobbies">Hobbies</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
        </nav>
    </>
  )
}
