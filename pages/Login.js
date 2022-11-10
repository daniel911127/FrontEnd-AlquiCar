import React from 'react';
import styles from '../styles/Login.module.scss';
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
            <div className={styles.InputEmail}>
              <label htmlFor='name'></label>
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
              <Link href='/'>
                <button
                  className={styles.Button}
                  type='submit'
                  disabled={isSubmitting}
                >
                  Iniciar sesión
                </button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
