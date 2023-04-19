
export const emLogInfo = [
<<<<<<< HEAD
    { logId: "1", isActive: "true", date: "2/20/23", location: "ECSS 2.415", title: "Head Injury", timeStart: "1:02PM", timeEnd: "1:34PM", time: "1:02PM - 1:34PM" },
    { logId: "2", isActive: "true", date: "2/20/23", location: "SU", title: "Seizure", timeStart: "7:40PM", timeEnd: "8:25PM", time: "7:40PM - 8:25PM" },
    { logId: "3", isActive: "true", date: "2/20/23", location: "SCI 1.210", title: "Fainting/Unconscious", timeStart: "11:27PM", timeEnd: "12:08AM", time: "11:27PM - 12:08AM" },

    { logId: "4", isActive: "true", date: "2/19/23", location: "ECSS 2.415", title: "Traumatic Injury", timeStart: "1:47PM", timeEnd: "2:00PM" },
    { logId: "5", isActive: "true", date: "2/19/23", location: "GR 2.220", title: "Respiratory Distress", timeStart: "2:49PM", timeEnd: "3:11PM" },
    { logId: "6", isActive: "true", date: "2/17/23", location: "SU", title: "Seizure", timeStart: "11:34PM", timeEnd: "12:08AM" },
    { logId: "7", isActive: "true", date: "2/16/23", location: "McDermott L.", title: "Behavioral Disorder", timeStart: "3:02PM", timeEnd: "3:30PM" },
    { logId: "8", isActive: "true", date: "2/16/23", location: "SCI 3.707", title: "Abdominal Pain", timeStart: "7:54AM", timeEnd: "8:12AM" },
    { logId: "9", isActive: "true", date: "2/15/23", location: "SLC 1.222", title: "Fainting/Unconscious", timeStart: "4:44PM", timeEnd: "5:24PM" },
]; //end of emLogInfo array

=======
  {  logId: "1", isActive: "true", date: "4/26/23", location: "ECSS 2.415", mapLocation: "Erik Jonsson School of Engineering and Computer Science, ECSS", title: "Head Injury", timeStart: "1:02PM", timeEnd: "ACTIVE", time: "1:02 - 1:34PM", lat:"-25.42986",lng:"-66.56283", info: "21 year old male" },
  {  logId: "2", isActive: "true", date: "4/24/23", location: "SU", mapLocation: "8645X7P2+PC", title: "Seizure", timeStart: "7:40", timeEnd: "8:25PM", time: "7:40 - 8:25PM", lat:null,lng:null, info: "18 year old female" },
  {  logId: "3", isActive: "true", date: "4/23/23", location: "SCI 1.210", mapLocation: "Sciences Building, Richardson",title: "Fainting/Unconscious", timeStart: "11:27", timeEnd: "12:08AM", time: "11:27 - 12:08AM",lat:null,lng:null, info: "47 year old male" },
  ]; //end of emLogInfo array

/*
  export async function updateCoordinates() {
    const apiKey = "AIzaSyDWhhJfm9B9r5evrHoSDWRUQX3gr6ac2W4";
    const geocoder = new window.google.maps.Geocoder();
    for (const log of emLogInfo) {
      const address = log.mapLocation;
      await geocoder.geocode({ address, key: apiKey }, (results, status) => {
        if (status === "OK") {
          log.lat = results[0].geometry.location.lat();
          log.lng = results[0].geometry.location.lng();
        } else {
          console.error(`Geocode error: ${status}`);
        }
      });
    }
  }
*/
export const notifications = [
  { title: 'New friend request', when: '6 hr' },
  { title: 'Please change your password', when: '1 day' },
  { title: 'You have a new message', when: '2 weeks' },
  { title: 'Welcome to the app!', when: '1 month' }, 
];
>>>>>>> 335bcdb36d27416278aacf005e963e7b55d0f20e

export const calendarInfo = [
    { shiftID: "1", date: "4/26/23", timeStart: "8AM", timeEnd: "12PM", time: "8AM - 12PM" },
    { shiftID: "2", date: "6/1/23", timeStart: "3PM", timeEnd: "7PM", time: "3PM - 7PM" },
    { shiftID: "3", date: "6/7/23", timeStart: "5AM", timeEnd: "8AM", time: "5AM - 8AM" },
]; //end of calendarInfo array