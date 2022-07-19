import Footer from './footer'
import {Component} from "react";
import Sidebar from "./Sidebar";
import styles from "../styles/Home.module.css";
// import Head from 'next/head';
import Header from "./Header";

export default class Layout extends Component<{ children: any }> {
    render() {
        let {children} = this.props;
        return (
            <div className={styles.container}>
                {/*<Head>*/}
                {/*    <title>Create dashboard</title>*/}
                {/*    <meta name="description" content="Created by streamline"/>*/}
                {/*    <link rel="icon" href="/pro.ico"/>*/}
                {/*</Head>*/}
                <div className={styles.container}>
                    <Sidebar/>
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </div>
            </div>
        )
    }
}