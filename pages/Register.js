import React from 'react';
import Head from 'next/head';
import styles from '../styles/Register.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { api, port } from '../utils/AxiosCreate';

export default function Register() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlquiCar-Register</title>
      </Head>
      <Formik
        initialValues={{
          rol: '',
          name: '',
          lastname: '',
          identification: '',
          driverLicense: '',
          email: '',
          password: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.rol) {
            errors.rol = 'Required';
          }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.lastname) {
            errors.lastname = 'Required';
          }
          if (!values.identification) {
            errors.identification = 'Required';
          }
          if (!values.driverLicense) {
            errors.driverLicense = 'Required';
          }
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
          console.log(values);
          try {
            (async () => {
              const res = await api.post('/user/signup', values);
              const token = res.data.data.token;
              localStorage.setItem('token', token);
              localStorage.setItem('email', res.data.data.dataUser.email);
              localStorage.setItem('name', res.data.data.dataUser.name);
              localStorage.setItem('lastname', res.data.data.dataUser.lastname);
              localStorage.setItem('rol', res.data.data.dataUser.rol);
              localStorage.setItem(
                'identification',
                res.data.data.dataUser.identification
              );
              localStorage.setItem(
                'driverLicense',
                res.data.data.dataUser.driverLicense
              );
              window.location.assign(process.env.NEXT_PUBLIC_FRONTEND_URL);
            })();
          } catch (err) {}
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.InputRegister}>
              <label htmlFor='rol'></label>
              <Field
                type='text'
                id='rol'
                name='rol'
                placeholder='admin or user'
              />
              <ErrorMessage className='errors' name='rol' component='div' />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='name'></label>
              <Field type='text' id='name' name='name' placeholder='Nombre ' />
              <ErrorMessage className='errors' name='name' component='div' />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='lastname'></label>
              <Field
                type='text'
                id='lastname'
                name='lastname'
                placeholder='Apellido '
              />
              <ErrorMessage
                className='errors'
                name='lastname'
                component='div'
              />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='identification'></label>
              <Field
                type='text'
                id='identification'
                name='identification'
                placeholder='identificación '
              />
              <ErrorMessage
                className='errors'
                name='identification'
                component='div'
              />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='driverLicense'></label>
              <Field
                type='text'
                id='driverLicense'
                name='driverLicense'
                placeholder='Licencia de conducción '
              />
              <ErrorMessage
                className='errors'
                name='driverLicense'
                component='div'
              />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='email'></label>
              <Field type='text' id='email' name='email' placeholder='email ' />
              <ErrorMessage className='errors' name='email' component='div' />
            </div>
            <div className={styles.InputRegister}>
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
              <button
                className={styles.Button}
                type='submit'
                disabled={isSubmitting}
              >
                Registrar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
