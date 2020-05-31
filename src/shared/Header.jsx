import { hot } from 'react-hot-loader/root';
import  * as React from 'react';
import styles from './header.css';
import myimg from './train.png';

function HeaderComponent() {
   return (
      <header>
         <h1 className={styles.example}>Hello React!!!</h1>
         <img src={myimg} alt="myimg" className = {styles.trainmove}></img>
      </header>
   )
}
export const Header = hot (HeaderComponent);