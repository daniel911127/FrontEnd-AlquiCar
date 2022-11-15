import React from 'react';
import styles from '../styles/CreateCar.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { api } from '../utils/AxiosCreate';

export default function CreateCar() {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Formik
          initialValues={{
            plate: '',
            transmition: '',
            bodyWork: '',
            brand: '',
            model: '',
            price: '',
            avaiability: '',
          }}
          validate={(values) => {
            const errors = {};
            if (!values.plate) {
              errors.plate = 'Required';
            }
            if (!values.transmition) {
              errors.transmition = 'Required';
            }
            if (!values.bodyWork) {
              errors.bodyWork = 'Required';
            }
            if (!values.brand) {
              errors.brand = 'Required';
            }
            if (!values.model) {
              errors.model = 'Required';
            }
            if (!values.avaiability) {
              errors.avaiability = 'Required';
            }

            return errors;
          }}
          onSubmit={(values) => {
            try {
              (async () => {
                const res = await api.post('/car', values);
                const token = res.data.data;
                window.location.assign('http://localhost:3000/CarsList');
                {
                  /*localStorage.setItem('token', token);
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
              */
                }
              })();
            } catch (err) {}
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className={styles.InputRegister}>
                <label htmlFor='plate'>
                  PLACA
                  <br />
                </label>
                <Field
                  type='text'
                  id='plate'
                  name='plate'
                  placeholder='XXX000'
                />
                <ErrorMessage className='errors' name='plate' component='div' />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='transmition'>
                  TRANSMISIÓN
                  <br />
                </label>
                <Field
                  type='text'
                  id='transmition'
                  name='transmition'
                  placeholder='automatic or manual '
                />
                <ErrorMessage
                  className='errors'
                  name='transmition'
                  component='div'
                />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='bodyWork'>
                  CARROCERÍA
                  <br />
                </label>
                <Field
                  type='text'
                  id='bodyWork'
                  name='bodyWork'
                  placeholder='small, medium or big '
                />
                <ErrorMessage
                  className='errors'
                  name='bodyWork'
                  component='div'
                />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='brand'>
                  MARCA
                  <br />
                </label>
                <Field
                  type='text'
                  id='brand'
                  name='brand'
                  placeholder='marca '
                />
                <ErrorMessage className='errors' name='brand' component='div' />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='model'>
                  MODELO
                  <br />
                </label>
                <Field
                  type='text'
                  id='model'
                  name='model'
                  placeholder='modelo '
                />
                <ErrorMessage className='errors' name='model' component='div' />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='price'>
                  PRECIO
                  <br />
                </label>
                <Field
                  type='number'
                  id='price'
                  name='price'
                  placeholder='precio '
                />
                <ErrorMessage className='errors' name='price' component='div' />
              </div>
              <div className={styles.InputRegister}>
                <label htmlFor='avaiability'>
                  DISPONIBLE
                  <br />
                </label>
                <Field
                  type='avaiability'
                  id='avaiability'
                  name='avaiability'
                  placeholder='true or false'
                />
                <ErrorMessage
                  className='errors'
                  name='avaiability'
                  component='div'
                />
              </div>

              <div>
                <button
                  className={styles.Button}
                  type='submit'
                  disabled={isSubmitting}
                >
                  Crear
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
