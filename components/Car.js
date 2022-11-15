import Image from 'next/image';
import React from 'react';
import image from '../public/carrusel/imagen5.jpg';
import styles from '../styles/components/Car.module.scss';

export default function Car({
  id,
  brand,
  model,
  photo,
  transmition,
  bodywork,
  price,
  plate,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src={image}
          alt='Picture of the author'
          width={180}
          height={195}
        ></Image>
      </div>
      <div className={styles.info}>
        <p>Marca:{brand}</p>
        <p>Modelo:{model}</p>
        <p>Transmision:{transmition}</p>
        <p>Tamaño:{bodywork}</p>
        <p>Placa:{plate}</p>
        <p>${price}</p>
        <button>Alquilar</button>
      </div>
    </div>
  );
}
