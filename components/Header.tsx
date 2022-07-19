import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {useState} from "react";

export default function Header() {
    const [name, setName] = useState("Elteyab");
    return (
        <>
            <div className={styles.headContainer}>
                <div className={styles.headwrapper}>
                    <div className={styles.title}>
                        <h2>
                            Hello, <span>{name}</span>
                        </h2>
                        <p>welcome to the board.</p>
                    </div>
                    <div className={styles.profile}>
                        <img src="profile.png" alt="profile" className={styles.image}/>
                    </div>
                </div>
            </div>
        </>
    );
}