import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { store } from '../store';
import { Provider } from 'react-redux';
import { StylesApiProvider } from '@mantine/core';

export default function MyData() {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [identification, setIdentification] = useState(null);
  const [driverLicense, setDriverLicense] = useState(null);
  useEffect(() => {
    const name = localStorage.getItem('name');
    const lastName = localStorage.getItem('lastName');
    const email = localStorage.getItem('email');
    const identification = localStorage.getItem('identification');
    const driverLicense = localStorage.getItem('driverLicense');
    setName(name);
    setLastName(lastName);
    setEmail(email);
    setIdentification(identification);
    setDriverLicense(driverLicense);
  }, []);
  console.log(name, lastName, email, identification, driverLicense);

  return <div className={styles.container}>MisDatos</div>;
}
