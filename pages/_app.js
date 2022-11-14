import '../styles/globals.scss';
import Head from 'next/head';
import Link from 'next/link';
import Dropdown from '../components/Dropdown';
import { StylesApiProvider } from '@mantine/core';
import { store } from '../store';
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';
import DropdownAdmin from '../components/DropdownAdmin';

function MyApp({ Component, pageProps }) {
  const [token, setToken] = useState(null);
  const [rol, setRol] = useState(null);
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
    const rol = localStorage.getItem('rol');
    setRol(rol);
    const name = localStorage.getItem('name');
    setName(name);
    const lastName = localStorage.getItem('lastName');
    setLastName(lastName);
  }, []);

  const dropdownToRender = rol === 'user' ? <Dropdown /> : <DropdownAdmin />;
  return (
    <Provider store={store}>
      <div className='containerApp'>
        <Head>
          <title>AlquiCar</title>
          <meta
            name='description'
            content='AlquiCar - La mejor opción para tí'
          />
          <link rel='icon' href='/car.png' />
        </Head>
        <div className='header'>
          <Link href='/'>Home</Link>
          <Link href='/CarsList'>AlquiCar</Link>
          {/*<Link href='/About'>Sobre Nosotros</Link>*/}
          {!token ? (
            <Link href='/Login'>
              <button className='button'>Iniciar sesion</button>
            </Link>
          ) : (
            dropdownToRender
          )}
        </div>
        <div className='carousel'></div>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
