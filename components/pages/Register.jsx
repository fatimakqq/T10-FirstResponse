import { handleGoogleSignin } from '../../store/actions';
import { DisplayUser } from '../../pages';
import styles from '../../styles/Form.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { RegisterValidate, LoginValidate } from "../../lib/validate"
import { useRouter } from 'next/router';
import { getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
import Converter from './Converter';
import * as Yup from 'yup';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonMenuButton,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonModal,
    IonItem,
    IonRouterOutlet,
    Route,
  } from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { googleSignup } from '../../store/actions';
import Image from 'next/image';
import Card from '../ui/Card';
import googleLogo from '../../assets/google.png'


 
export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    };
  };

const RegisterCard = () => {
  
    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username : '',
            email: '',
            password: '',
            cpassword: ''
        },
        validate: RegisterValidate,
        onSubmit
    })
  
    async function onSubmit(values){
        const options = {
            method: "POST",
            headers : { 'Content-Type': 'application/json',
                        Accept: "application/json"},
            body: JSON.stringify(values),
        }
  
        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000/tabs/login')
            })
    }
  
    return (

  
      <section className='w-3/4 mx-auto flex flex-col'>
          <div className="title">
            <h1 className='text-white text-4xl font-majorMonoDisplay font-bold py-4'>Register</h1>
          </div>
  
          {/* form */}
          <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
              <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                  <input 
                  type="text"
                  name='Username'
                  placeholder='Username'
                  className={styles.input_text}
                  {...formik.getFieldProps('username')}
                  style={{ backgroundColor: '#262151', fontFamily:'manjari', paddingTop:'20px' }}
                  />
              </div>
              {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>}
              <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                  <input 
                  type="email"
                  name='email'
                  placeholder='Email'
                  className={styles.input_text}
                  {...formik.getFieldProps('email')}
                  style={{ backgroundColor: '#262151', fontFamily:'manjari', paddingTop:'20px' }}
                  />
              </div>
              {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
              <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input 
                  type={`${show.password ? "text" : "password"}`}
                  name='password'
                  placeholder='Password'
                  className={styles.input_text}
                  {...formik.getFieldProps('password')}
                  style={{ backgroundColor: '#262151', fontFamily:'manjari', paddingTop:'20px' }}
                  />
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" height="40" 
                    className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"

                    viewBox="0 0 24 24"
                    >
                      <path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"
                      fill="white"
                      />
                    </svg>
              </div>
              {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
  
              <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                  <input 
                  type={`${show.cpassword ? "text" : "Password"}`}
                  name='cpassword'
                  placeholder='Confirm Password'
                  className={styles.input_text}
                  {...formik.getFieldProps('cpassword')}
                  style={{ backgroundColor: '#262151' , fontFamily:'manjari', paddingTop:'20px'}}
                  />
              </div>
              {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>}
  
              {/* login button */}
              <div className="input-button">
                    <button type='submit' className="bg-utd-orange text-white py-2 px-4 rounded-xl font-manjari font-bold pt-3 w-full h-12">
                        Sign In
                    </button>
              </div>
              <div class="flex items-center w-full h-1 my-1">
                  <hr class=" bg-white mt-4 mb-2 w-1/2 bg-black border-none mr-3"/>
                  <span class="font-bold font-manjari mt-2">or</span>
                  <hr class="bg-white mt-4 mb-2 w-1/2 bg-black border-none ml-3"/>
            </div>
            <div className="input-button">
                  <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                    <Image src={googleLogo} alt="Google Logo" width="50" height="50" />
                    <span className="sr-only">Login with Google</span>
                  </button>
            </div>
                
          </form>

      </section>
    )
  };

const Register = () => {
    const homeItems = Store.useState(getHomeItems);
    const [showNotifications, setShowNotifications] = useState(false);
  
    return (
      

      <IonPage>
        <IonRouterOutlet>
        <Route path="/register" render={() => <Converter />} exact={true} />
      </IonRouterOutlet>
        <IonHeader>
          <IonToolbar>
            <IonTitle className="font-majorMonoDisplay">Login or Register</IonTitle>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={() => setShowNotifications(true)}>
                <IonIcon icon={notificationsOutline} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding" fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
          <RegisterCard></RegisterCard>
  
        </IonContent>
      </IonPage>
    );
  };
  
export default Register;