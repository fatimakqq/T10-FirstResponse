// export const images = [
//   '/img/c1.avif',
//   '/img/c2.avif',
//   '/img/c3.avif',
// ];

// export const homeItems = [
//   {
//     title: 'Head Injury',
//     type: 'Blog',
//     text: 'We just got back from a trip to Maui, and we had a great time...',
//     author: 'Max Lynch',
//     authorAvatar: '/img/max.jpg',
//     image: images[0],
//   },
//   {
//     title: 'Head Injury',
//     type: 'Blog',
//     text:
//       'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
//     author: 'Max Lynch',
//     authorAvatar: '/img/max.jpg',
//     image: images[1],
//   },
//   {
//     title: 'Head Injury',
//     type: 'Blog',
//     text:
//       'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
//     author: 'Max Lynch',
//     authorAvatar: '/img/max.jpg',
//     image: images[2],
//   },
// ];

//////
export const emLogInfo = [
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

// Some fake lists 
export const lists = [
  {
    name: 'Groceries',
    id: 'groceries',
    items: [{ name: 'Apples' }, { name: 'Bananas' }, { name: 'Milk' }, { name: 'Ice Cream' }],
  },
  {
    name: 'Hardware Store',
    id: 'hardware',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  { name: 'Work', id: 'work', items: [{ name: 'TPS Report' }, { name: 'Set up email' }] },
  { name: 'Reminders', id: 'reminders' },
];
