const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const randomNumber = (min, limit) => Math.floor(Math.random() * (limit - min)) + min;

const generateRecord = () => {
  let record = [];
  record.push(faker.name.findName());
  record.push(faker.address.city());
  record.push(randomNumber(0, 500)); //friends
  record.push(randomNumber(0, 5000)); //photos
  record.push(randomNumber(0, 2000)); //reviews
  record.push(faker.internet.avatar());
  record.push(faker.random.words()); //location name
  record.push(faker.lorem.paragraph()); //review
  record.push(randomNumber(0, 6)); //stars
  record.push(randomNumber(0, 13) + '-' + randomNumber(1, 31) + '-' + randomNumber(2000, 2019));
  return record;
};

const csvWriter = createCsvWriter({
  path: './fakeData.csv',
  header: [
    {id: 'name', title: 'name'},
    {id: 'lang', title: 'userLoc'},
    {id: 'lang', title: 'numFriends'},
    {id: 'lang', title: 'numPhotos'},
    {id: 'lang', title: 'numReviews'},
    {id: 'lang', title: 'photoLoc'},
    {id: 'lang', title: 'locname'},
    {id: 'lang', title: 'message text'},
    {id: 'lang', title: 'stars'},
    {id: 'lang', title: 'posted date'},
  ]
});

const createRecordSet = (limit) => {
  const records = [];
  let i = 0;
  while (i < limit) {
    records.push(generateRecord());
    i += 1;
  }
  return records;
};

const records = createRecordSet(100000);
console.log('here are the records', records)

// csvWriter.writeRecords(records)       // returns a promise
//   .then(() => {   
//     console.log('...Done');
//   });

// csvWriter.writeRecords(records);


  // name varchar(20) => faker firstName
  // userLoc varchar(40) => faker city
  // numFriends int (0-500)
  // numPhotos int (0-1000)
  // numReviews int (0-1000)
  // photoLoc varchar(200) => faker avatar
  // locname varchar(100),

  //  message text => faker Lorem sentence,
  // stars int NOT NULL, (1-5)
  // posted date, faker date