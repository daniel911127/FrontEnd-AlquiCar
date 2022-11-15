import React from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { api } from '../utils/AxiosCreate';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>AlquiCar-Login</title>
      </Head>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid Email';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values) => {
          try {
            (async () => {
              const res = await api.post('/user/signin', values);
              const token = res.data.data.token;
              localStorage.setItem('token', token);
              localStorage.setItem('email', res.data.data.dataUser.email);
              localStorage.setItem('name', res.data.data.dataUser.name);
              localStorage.setItem('lastname', res.data.data.dataUser.lastname);
              localStorage.setItem('rol', res.data.data.dataUser.rol);
              window.location.assign(process.env.NEXT_PUBLIC_FRONTEND_URL);
            })();
          } catch (err) {}
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.InputEmail}>
              <label htmlFor='email'></label>
              <Field type='text' id='email' name='email' placeholder='Email ' />
              <ErrorMessage className='errors' name='email' component='div' />
            </div>

            <div className={styles.InputPassword}>
              <label htmlFor='password'></label>
              <Field
                type='password'
                id='password'
                name='password'
                placeholder='Password'
              />
              <ErrorMessage
                className='errors'
                name='password'
                component='div'
              />
            </div>
            <div>
              <p className={styles.Register}>
                <Link href='/Register'>
                  <strong>Registrate </strong>{' '}
                </Link>
              </p>

              <button
                className={styles.Button}
                type='submit'
                disabled={isSubmitting}
              >
                Iniciar sesión
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
