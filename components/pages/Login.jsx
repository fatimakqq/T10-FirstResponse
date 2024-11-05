import React, { useState } from 'react';
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
} from '@ionic/react';
import { notificationsOutline } from 'ionicons/icons';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple frontend validation
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    
    if (Object.keys(newErrors).length === 0) {
      // For prototype, just redirect to main page
      window.location.href = '/tabs/emergencies';
    } else {
      setErrors(newErrors);
    }
  };

  const handleGoogleSignin = () => {
    // For prototype, just redirect to main page
    window.location.href = '/tabs/emergencies';
  };

  const handleCreateAccount = () => {
    window.location.href = '/signup';
  };

  return (
    <section className='w-3/4 mx-auto flex flex-col'>
      <div className="title">
        <h1 className='text-white text-4xl font-bold py-4'>Sign In</h1>
      </div>

      <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
        <div className={`input-group ${errors.email ? 'border-rose-600' : ''}`}>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className="w-full p-3 rounded-lg bg-[#262151] text-white"
            style={{ fontFamily: 'manjari', paddingTop: "20px" }}
          />
        </div>
        {errors.email && <span className='text-rose-500'>{errors.email}</span>}

        <div className={`input-group relative ${errors.password ? 'border-rose-600' : ''}`}>
          <input 
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className="w-full p-3 rounded-lg bg-[#262151] text-white"
            style={{ fontFamily: 'manjari', paddingTop: "20px" }}
          />
          <svg 
            onClick={() => setShowPassword(!showPassword)}
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-500"
            viewBox="0 0 24 24"
          >
            <path 
              d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 5c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm0-2c-2.209 0-4 1.792-4 4 0 2.209 1.791 4 4 4s4-1.791 4-4c0-2.208-1.791-4-4-4z"
              fill="white"
            />
          </svg>
        </div>
        {errors.password && <span className='text-rose-500'>{errors.password}</span>}

        <div className="input-button">
          <button 
            type='submit' 
            className="bg-orange-500 text-white py-2 px-4 rounded-xl font-bold w-full h-12"
          >
            Sign In
          </button>
        </div>

        <div className="flex items-center w-full h-1 my-4">
          <hr className="bg-white mt-4 mb-4 w-1/2 border-none mr-3"/>
          <span className="font-bold mt-3">or</span>
          <hr className="bg-white mt-4 mb-4 w-1/2 border-none ml-3"/>
        </div>

        <div className="input-button">
          <button 
            type='button' 
            onClick={handleGoogleSignin} 
            className="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <img 
              src="/api/placeholder/24/24" 
              alt="Google Logo" 
              className="w-6 h-6 mr-2" 
            />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="flex justify-center">
          <p className="mt-12">
            Don't have an account?
            <a 
              className="ml-2 text-green-600 cursor-pointer" 
              onClick={handleCreateAccount}
            >
              Create a new one
            </a>
          </p>
        </div>
      </form>
    </section>
  );
};

const Login = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="font-majorMonoDisplay">Sign In or Register</IonTitle>
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
        
        {showNotifications && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowNotifications(false)}
          >
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-lg font-bold mb-2">Notifications</h2>
              <p>No new notifications</p>
            </div>
          </div>
        )}

        <LoginCard />
      </IonContent>
    </IonPage>
  );
};

export default Login;