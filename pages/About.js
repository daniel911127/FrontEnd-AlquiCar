import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/About.module.scss';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlquiCar-Nosotros</title>
      </Head>
      <div className={styles.about1}>
        <Image src={''} alt='Picture of the author' width={400} height={400} />
        <p>Alquila con tranquilidad y seguridad 100% garantizada</p>
      </div>
      <div className={styles.about2}>
        <Image src={''} alt='Picture of the author' width={300} height={300} />
        <p>Estas a un Click de la mejor experiencia que puedas tener</p>
      </div>
    </div>
  );
}
