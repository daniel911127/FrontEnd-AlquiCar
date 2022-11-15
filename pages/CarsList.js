import React, { useState } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Car from '../components/Car';
import styles from '../styles/CarsList.module.scss';

export default function CarsList(data) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const cars = data.data.data;
  return (
    <div className={styles.container}>
      <Head>
        <title>AlquiCar-Carros</title>
      </Head>
      <div className={styles.containerInfo}>
        <div className={styles.filter}>
          <div className={styles.calendar}>
            <h1>FECHA DE ALQUILER</h1>
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              isClearable={true}
            />
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.item}>
            {cars.map((item) => {
              return (
                <Car
                  key={item._id}
                  id={item._id}
                  brand={item.brand}
                  model={item.model}
                  photo={item.photo}
                  transmition={item.transmition}
                  plate={item.plate}
                  bodyWork={item.bodyWork}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:8080/car');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
