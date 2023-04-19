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
    //calls by shift - bar chart
    const Bar2canvas = document.getElementById('callsByShift');
    const Bar2ctx = Bar2canvas.getContext('2d');
    const Bar2data = {
      labels: ['A (8:20 -11:20)', 'B (11:20 - 14:20)', 'C (14:20 - 17:20)', 'D (17:20 - 20:20)', 'E (20:20 - 23:20)', 'F (23:20 - 8:20)'],
      datasets: [{
        label: '',
        data: [4, 7, 6, 5, 7, 1],
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
    const Bar2options = {
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
    const Bar2Chart = new Chart(Bar2ctx, {
      type: 'bar',
      data: Bar2data,
      options: Bar2options
    });
    // calls by disposition - disposition chart
    const Dispositioncanvas = document.getElementById('callsByDisposition');
    const Dispositionctx = Dispositioncanvas.getContext('2d');
    const Dispositiondata = {
      labels: ['RFD Transport', 'UEMR'],
      datasets: [{
        label: 'Disposition',
        data: [10, 20],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };
    const Dispositionoptions = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Disposition Chart'
        }
      }
    };

    const DispositionChart = new Chart(Dispositionctx, {
      type: 'pie',
      data: Dispositiondata,
      options: Dispositionoptions
    });
    //calls by day of the week - bar chart
    const Bar3canvas = document.getElementById('callsByDay');
    const Bar3ctx = Bar3canvas.getContext('2d');
    const Bar3data = {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
        label: '',
        data: [3, 5, 7, 7, 2, 4, 2],
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
    const Bar3options = {
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
    const Bar3Chart = new Chart(Bar3ctx, {
      type: 'bar',
      data: Bar3data,
      options: Bar3options
    });
    // calls by patient type - bar chart
    const Bar4canvas = document.getElementById('callsByPatient');
    const Bar4ctx = Bar4canvas.getContext('2d');
    const Bar4data = {
      labels: ['Student', 'Faculty', 'Visitor'],
      datasets: [{
        label: '',
        data: [26, 1, 3],
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
    const Bar4options = {
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
    const Bar4Chart = new Chart(Bar4ctx, {
      type: 'bar',
      data: Bar4data,
      options: Bar4options
    });
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
            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Shift</h1>
            <canvas id="callsByShift"></canvas>
            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Disposition</h1>
            <canvas id="callsByDisposition"></canvas>
            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Calls By Day of Week</h1>
            <canvas id="callsByDay"></canvas>
            <h1 className='font-manjari  mb-0 flex items-center justify-center' >Patients By Type</h1>
            <canvas id="callsByPatient"></canvas>
        </IonContent>
    </IonPage>
  );
}
export default Reports;