/**
 * Created by kee on 15/9/27.
 */
import React, { Component } from 'react'
import styles from './styles/index.css'

class Me extends Component{
    render(){
        const me = require('./images/me.png');
        //const me2 = require('./images/7436176.jpg');
        return (
            <div className={styles.header}>
               <header id="header">
                    <div>
                        <img src={me} className={styles.me}/>
                    </div>
                   <div>
                    <p className={styles.name}>xiaokekeT</p>
                   </div>
               </header>
            </div>
        )
    }
}
export default Me