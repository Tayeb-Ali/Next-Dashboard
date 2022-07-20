import styles from '../styles/Home.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBookOpen,
    faCog,
    faHeart,
    faRocket,
    faSignOutAlt,
    faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Sidebar() {
    return (
        <div id="sidebar" className={styles.navContainer}>
            <div className={styles.logo}>
                <h2>DashBoard</h2>
            </div>
            <div className={styles.wrapper}>
                <ul>
                    <li>
                        <FontAwesomeIcon
                            icon={faTachometerAlt}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="#">Dashboard</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faRocket}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="#">Explore</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faBookOpen}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="/forms">Forms</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faHeart}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="#">Favourite</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faCog}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="#"> Settings</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faSignOutAlt}
                            style={{width: "18px", cursor: "pointer"}}
                        />{" "}
                        <Link href="#">Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}