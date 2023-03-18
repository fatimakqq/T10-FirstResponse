import { handleGoogleSignin } from '../../store/actions';
import { DisplayUser } from '../../pages';
import styles from '../../styles/Form.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { RegisterValidate, LoginValidate } from "../../lib/validate"
import { useRouter } from 'next/router';
import Layout from '../../layout/layout';
import { getCsrfToken } from 'next-auth/react';
import { Formik, Field, ErrorMessage } from 'formik';
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
  } from '@ionic/react';
import Notifications from './Notifications';
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';
import { getHomeItems } from '../../store/selectors';
import Store from '../../store';
import { googleSignup } from '../../store/actions';
import Image from 'next/image';
import Card from '../ui/Card';

 
  export async function getServerSideProps(context) {
    return {
      props: {
        csrfToken: await getCsrfToken(context),
      },
    };
  };
  
const LoginCard = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    // formik hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate : LoginValidate,
        onSubmit
    })
  
    async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: "http://localhost:3000/tabs/emergencies"
        })
  
        if(status.ok) router.push(status.url)
    }
  
    // Google Handler function
    async function handleGoogleSignin() {
        signIn('google', { callbackUrl : "http://localhost:3000/tabs/emergencies"})
    }
  
    return (
        <Layout>
  
        <Head>
            <title>Login</title>
        </Head>
        
        <section className='w-3/4 mx-auto flex flex-col gap-10'>
            <div className="title">
                <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
                <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
            </div>
  
            {/* form */}
            <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                    <input 
                    type="email"
                    name='email'
                    placeholder='Email'
                    className={styles.input_text}
                    {...formik.getFieldProps('email')}
                    />
                    <span className='icon flex items-center px-4'>
                    </span>
                    
                </div>
                {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
  
                <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                    <input 
                    type={`${show ? "text" : "password"}`}
                    name='password'
                    placeholder='password'
                    className={styles.input_text}
                    {...formik.getFieldProps('password')}
                    />
                      <span className='icon flex items-center px-4' onClick={() => setShow(!show)}>
                    </span>
                    
                </div>
  
                {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
  
                <div className="input-button">
                    <button type='submit' className={styles.button}>
                        Login
                    </button>
                </div>
                <div className="input-button">
                    <button type='button' onClick={handleGoogleSignin} className={styles.button_custom}>
                        Sign In with Google <Image src={'/assets/google.svg'} width="20" height={20} ></Image>
                    </button>
                </div>
            </form>
  
            {/* bottom */}
            <p className='text-center text-gray-400 '>
                don't have an account yet? <Link href={'/register'}><a className='text-blue-700'>Sign Up</a></Link>
            </p>
        </section>
  
        </Layout>
    )
  }
  
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
  
      <Layout>
      <Head>
          <title>Register</title>
      </Head>
  
      <section className='w-3/4 mx-auto flex flex-col gap-10'>
          <div className="title">
              <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
              <p className='w-3/4 mx-auto text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, officia?</p>
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
                  />
              </div>
              {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>}
              <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                  <input 
                  type={`${show.password ? "text" : "password"}`}
                  name='password'
                  placeholder='password'
                  className={styles.input_text}
                  {...formik.getFieldProps('password')}
                  />
              </div>
              {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>}
  
              <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? 'border-rose-600' : ''}`}>
                  <input 
                  type={`${show.cpassword ? "text" : "password"}`}
                  name='cpassword'
                  placeholder='Confirm Password'
                  className={styles.input_text}
                  {...formik.getFieldProps('cpassword')}
                  />
              </div>
              {formik.errors.cpassword && formik.touched.cpassword ? <span className='text-rose-500'>{formik.errors.cpassword}</span> : <></>}
  
              {/* login buttons */}
              <div className="input-button">
                  <button type='submit' className={styles.button}>
                      Sign Up
                  </button>
              </div>
          </form>
  
          {/* bottom */}
          <p className='text-center text-gray-400 '>
              Have an account? <Link href={'/login'}><a className='text-blue-700'>Sign In</a></Link>
          </p>
      </section>
      </Layout>
    )
  };

const Login = () => {
    const homeItems = Store.useState(getHomeItems);
    const [showNotifications, setShowNotifications] = useState(false);
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Login</IonTitle>
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
          <IonTitle size="large">Test</IonTitle>
          <Notifications open={showNotifications} onDidDismiss={() => setShowNotifications(false)} />
  
          <IonModal color="danger" trigger="open-modal">
            <IonHeader>
              <IonToolbar></IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonItem>
                <IonLabel>Active Emergency!!</IonLabel>
              </IonItem>
            </IonContent>
          </IonModal>

          <RegisterCard></RegisterCard>
          <LoginCard></LoginCard>
  
          {/* <LoginCard></LoginCard> */}
          {/* <IonButton onClick={handleGoogleSignin}>Sign In With Google</IonButton>
          <IonCardContent>{DisplayUser}</IonCardContent> */}
  
        </IonContent>
      </IonPage>
    );
  };
  
export default Login;