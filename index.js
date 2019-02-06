//csv file parsed
//use file reader for google spreadsheet

const spreadsheet = "https://docs.google.com/spreadsheets/d/1FPYh5c8LY70TlJAS5X2oHASfNWbKPeQEBtTD13y6YEY/edit?ts=58f10dfb#gid=0"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWFmZTg0YWViNTY1MDA4ZTgzOWY0MSIsInVzZXIiOiI1YzVhZmU4NGI4NTMyYzAwMTkxYzI4NmYiLCJvcmciOiI1YzVhMDYxMjJlYWM4ODAwMTlmMmU0MTkiLCJvcmdOYW1lIjoienp6LXNhcmFoIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiZXhwIjoxNTUwMDcyMDY3LCJhdWQiOiJ1cm46Y29uc3VtZXIiLCJpc3MiOiJ1cm46YXBpIiwic3ViIjoiNWM1YWZlODRiODUzMmMwMDE5MWMyODZmIn0.7JtzujViP56W-Vv6e7W4Agb30Txg4WrASeaCXDs_eYk"




var data = JSON.stringify({
  "name": "John Smith",
  "emails": [
    {
      "type": "home",
      "email": "johnsmith@example.com"
    }
  ],
  "phones": [
    {
      "type": "work",
      "phone": "+18005551212"
    }
  ],
  "socials": [
    {
      "type": "twitter",
      "userid": "1234",
      "username": "@johnsmith",
      "url": "http://twitter.com/johnsmith"
    }
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
  "gender": "m",
  "tags": [
    "cool customer",
    "nice"
  ]
});

const data = './data.txt'.split(',')
console.log(data)


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
