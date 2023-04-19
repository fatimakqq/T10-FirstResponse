import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import Chart from 'chart.js/auto';
const CallsByType = () =>{
    
}

const Reports = () => {
  useEffect(() => {
    
    //calls by type: bar chart ------------------------------------------------
    const canvas = document.getElementById('callsByTypeBar');
    const ctx = canvas.getContext('2d');

    const data = {
      labels: ['Trauma', 'Fall', 'Dizziness', 'Injury', 'Intoxication', 'Abdominal Pain', 'Seizure', 'Illness', 'Breathing', 'Syncope'],
      
      datasets: [{
        label: '',
        data: [12, 4, 3, 8, 2, 3, 4,5,7,2],
        backgroundColor: [
            'rgba(255, 159, 64, 0.2)', //orange fill
          'rgba(75, 192, 192, 0.2)', 
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',//green fill
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
            'rgba(255, 159, 64, 1)', //orange outline
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',//green outline
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 2
      }]
    };

    const options = {
        
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins:{
        legend:{
            display:false
        }
      }
    };

    const barChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
      
    });

    // response times- line chart ------------------------------------------------
    const lineCanvas = document.getElementById('responseTimesLine');
    const lineCtx = lineCanvas.getContext('2d');

    const lineData = {
      labels: ['Apr 1-7', 'Apr 8-14', 'Apr 15-21', 'Apr 22-28', 'Apr 29-31'],
      datasets: [{
        label: 'My First Dataset',
        data: [24, 27, 26, 22, 24],
        fill: false,
        borderColor: 'rgba(255, 159, 64, 1)',
        lineTension: 0.1
      }]
    };

    const lineOptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins:{
        legend:{
        display:false
        }
      }
      
    };
    const lineChart = new Chart(lineCtx, {
      type: 'line',
      data: lineData,
      options: lineOptions
    });

    //INSERT MORE GRAPHS HERE


    

    // Cleanup function to destroy the charts
    return () => {
      barChart.destroy();
      lineChart.destroy();
    };
  }, []);

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle className= "font-majorMonoDisplay">Reports</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent> 
            <div className="flex mt-5 text-gray-400 items-center justify-center"> 
                <select className="bg-transparent  font-manjari border-none "interface="popover" 
                placeholder="Last 30 days">
                    <option value="month" selected>Last 30 days</option>
                    <option value="week">Last 1 week</option>
                    <option value="year">Last 1 year</option>
                </select>
            </div>
       
            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Type</h1>
            <canvas id="callsByTypeBar"></canvas>


            <h1 className='  font-manjari  mb-0 flex items-center justify-center' >Response Times</h1>
            <canvas id="responseTimesLine"></canvas>

            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Shift -bar</h1>

            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Disposition -pie</h1>

            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Day of Week -bar</h1>

            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Patients By Type -bar</h1>
            
            

        </IonContent>
       
    </IonPage>
  );
}

export default Reports;
