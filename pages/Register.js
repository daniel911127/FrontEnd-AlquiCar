import React from 'react';
import styles from '../styles/Register.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';

export default function Login() {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ name: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
          ) {
            errors.name = 'Invalid Email';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles.InputRegister}>
              <label htmlFor='name'></label>
              <Field type='text' id='name' name='name' placeholder='Nombre ' />
              <ErrorMessage className='errors' name='name' component='div' />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='lastName'></label>
              <Field
                type='text'
                id='lastName'
                name='lastName'
                placeholder='Apellido '
              />
              <ErrorMessage
                className='errors'
                name='lastName'
                component='div'
              />
            </div>
            <div className={styles.InputRegister}>
              <label htmlFor='Identification'></label>
              <Field
                type='text'
                id='Identification'
                name='Identification'
                placeholder='Identificación '
              />
              <ErrorMessage
                className='errors'
                name='Identification'
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
              <label htmlFor='Email'></label>
              <Field type='text' id='Email' name='Email' placeholder='Email ' />
              <ErrorMessage className='errors' name='Email' component='div' />
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
            <div className={styles.InputRegister}>
              <label htmlFor='rol'></label>
              <Field type='text' id='rol' name='rol' placeholder='rol' />
              <ErrorMessage className='errors' name='rol' component='div' />
            </div>

            <div>
              <Link href='/'>
                <button
                  className={styles.Button}
                  type='submit'
                  disabled={isSubmitting}
                >
                  Registrar
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
