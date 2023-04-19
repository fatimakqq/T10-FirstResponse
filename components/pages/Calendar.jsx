'use client';

import {
  IonPage,
  IonButton,
  IonDatetime,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
} from '@ionic/react';

import { motion } from 'framer-motion';
import Store from '../../store';
import * as selectors from '../../store/selectors';
import React from 'react';

const CustomButton = ({ timeStart, timeEnd, date, shiftID }) => {
  return (
    <div className="w-400 mx-30 h-84">
      <IonItem routerLink={`/shift/${shiftID}`} routerDirection="forward">
        <motion.button
          whileHover={{ scale: 1.105, backgroundColor: "rgba(220, 116, 0, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          className="w-full h-full bg-green-500 bg-opacity-49 border border-green-500 text-white font-bold py-2 px-4 rounded-lg"
          style={{ backgroundColor: "rgba(39, 88, 68, 0.49)" }}
        >

          <div className="p-2 flex justify-between">
            <div>
              <h2 className="text-left text-5xl font-majari leading-8 pb-0">{timeStart} - {timeEnd}</h2>
              <h3 className="text-left text-2xl font-manjari leading-5 mt-2 opacity-40">Tap to see details</h3>
            </div>
            <div className="text-right">
              <h3 className="text-right text-2xl font-manjari">{date}</h3>
            </div>
          </div>
        </motion.button>
      </IonItem>
    </div>
  );
};

const Calendar = () => {
  const calendar = Store.useState(selectors.getCalendar);
  const calendarInfo = Store.useState(selectors.getCalendarInfo);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonTitle className="font-majorMonoDisplay text-7xl leading-none pb-8">
          <div>CALENDAR/</div>
          <div>SCHEDULE</div>
        </IonTitle>

        <IonTitle className='font-manjari text-green-800 text-right text-5xl leading-none pb-5'>
          today
        </IonTitle>
        {
          <div className='grid grid-cols-1 gap-6'>
            {calendarInfo.map((log, index) => (
              log.shiftID == 2 ? (
                <React.Fragment key={index}>
                  <IonTitle className='font-manjari text-green-800 text-right text-5xl leading-none pb-5'>
                    upcoming
                  </IonTitle>

                  <CustomButton
                    shiftID={log.logId}
                    time={log.time}
                    date={log.date}
                    timeStart={log.timeStart}
                    timeEnd={log.timeEnd}
                  />
                </React.Fragment>
              ) : (

                <CustomButton
                  shiftID={log.logId}
                  time={log.time}
                  date={log.date}
                  timeStart={log.timeStart}
                  timeEnd={log.timeEnd}
                />
              )

            ))}
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
