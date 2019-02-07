//csv file parsed using CSV to json


const csvFile = './data.csv'
const spreadsheet = "https://docs.google.com/spreadsheets/d/1FPYh5c8LY70TlJAS5X2oHASfNWbKPeQEBtTD13y6YEY/edit?ts=58f10dfb#gid=0"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWFmZTg0YWViNTY1MDA4ZTgzOWY0MSIsInVzZXIiOiI1YzVhZmU4NGI4NTMyYzAwMTkxYzI4NmYiLCJvcmciOiI1YzVhMDYxMjJlYWM4ODAwMTlmMmU0MTkiLCJvcmdOYW1lIjoienp6LXNhcmFoIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiZXhwIjoxNTUwMDcyMDY3LCJhdWQiOiJ1cm46Y29uc3VtZXIiLCJpc3MiOiJ1cm46YXBpIiwic3ViIjoiNWM1YWZlODRiODUzMmMwMDE5MWMyODZmIn0.7JtzujViP56W-Vv6e7W4Agb30Txg4WrASeaCXDs_eYk"

//7 array indices per customer, 6 commas per row
//create an object for every 6 commas that will parse the info correctly
//for each customer, create a data object with their information





//LOOK UP VAR/LET/CONST
let object.firstName = // Before every first comma
let object.lastName = // Before every second comma

//combine first and last to make full name LOOK UP PROPER STRINGIFY
let object.fullName = (object.firstName + object.lastName).to_string

let object.email = //before every third comma
let object.birthday = //before every fourth comma
let object.homePhone = //before every fifth comma
let object.workPhone = //before every sixth comma
let object.customerType = //after every sixth comma





.forEach(person)


//birthday?
var data = JSON.stringify({
  "name": data.name,
  "emails": [
    {
      "type": "home",
      "email": data.email
    }
  ],
  "phones": [
    {
      "type": "work",
      "phone": object.workPhone
    },
    {
      "type": "home",
      "phone": object.homePhone
    },
  ],
  "urls": [
    {
      "url": "https://kustomer.com"
    }
  ],
  "locations": [
    {
      "type": "work",
      "address": "530 7th Ave, New York, NY 10018"
    }
  ],
  "locale": "en_US",
  "tags": [
    object.customerType
  ]
});





console.log(data)



//MAKE POST REQUEST (from Kustomer Docs):


// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });
//
// xhr.open("POST", "https://api.kustomerapp.com/v1/customers");
// xhr.setRequestHeader("authorization", `${token}`);
// xhr.setRequestHeader("content-type", "application/json");
//
// xhr.send(data);
