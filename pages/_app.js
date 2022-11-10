import '../styles/globals.scss';
import Head from 'next/head';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div className='containerApp'>
      <Head>
        <meta name='description' content='AlquiCar - La mejor opción para tí' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='header'>
        <Link href='/'>Home</Link>
        <Link href='/CarsList'>AlquiCar</Link>
        <Link href='/About'>About</Link>
        <Link href='/Login'>
          <button className='button'>Iniciar sesion</button>
        </Link>
      </div>
      <div className='carousel'></div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
