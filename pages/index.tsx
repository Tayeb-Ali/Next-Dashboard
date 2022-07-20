import type {NextPage} from 'next'
import React from "react";
import styles from "../styles/Home.module.css";
import {Line} from "react-chartjs-2";
import Dashboard from "../components/pages/dashboard";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export
const data1 = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ],
    datasets: [
        {
            label: "Sales/ month",
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 0,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0,
            pointRadius: 0,
            pointHitRadius: 0,
            data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
        },
    ],
};

const Home: NextPage = () => {

    const data14 = {
        labels: ["Organic", "Social Media", "Websites"],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return (
        <>
            <div className={styles.contentcontainer}>
                <div className={styles.contentwrapper}>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Companies</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Customers</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Users</h2>
                        </div>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.categories}>
                            <h2>Projects</h2>
                        </div>
                    </div>
                </div>

                <Dashboard/>

                <div className={styles.charts}>
                    <div className={styles.bar}>
                        <h2>Sales</h2>
                        {/*<Line data={data1} width={400} height={400} />*/}
                    </div>
                    <div className={styles.circle}>
                        <h2>Customers Arrived</h2>
                        {/*<Doughnut data={data} config/>*/}
                        <Doughnut data={data} width={400} height={400}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
