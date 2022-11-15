import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import styles from '../styles/MyData.module.scss';
import { store } from '../store';
import { Provider } from 'react-redux';

export default function MyData() {
  const [name, setName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [email, setEmail] = useState(null);
  const [identification, setIdentification] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);
  useEffect(() => {
    const name = localStorage.getItem('name');
    const lastname = localStorage.getItem('lastname');
    const email = localStorage.getItem('email');
    const identification = localStorage.getItem('identification');
    const driverLicense = localStorage.getItem('driverLicense');
    setName(name);
    setLastname(lastname);
    setEmail(email);
    setIdentification(identification);
    setDriverLicense(driverLicense);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.data}>
          <h1>Mis Datos</h1>
        </div>
        <div className={styles.body}>
          <p className={styles.data}>
            NOMBRE <br />
            {name}
            <br />
          </p>
          <p className={styles.data}>
            APELLIDO <br />
            {lastname} <br />
          </p>
          <p className={styles.data}>
            CORREO <br />
            {email} <br />
          </p>
          <p className={styles.data}>
            DOCUMENTO <br />
            {identification} <br />
          </p>
          <p className={styles.data}>
            LICENCIA <br />
            {driverLicense} <br />
          </p>
        </div>
      </div>
    </div>
  );
}
