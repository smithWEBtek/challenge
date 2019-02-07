//Read file using Google Docs
// window.FileOpener



const spreadsheet = "https://docs.google.com/spreadsheets/d/1FPYh5c8LY70TlJAS5X2oHASfNWbKPeQEBtTD13y6YEY/edit?ts=58f10dfb#gid=0"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNWFmZTg0YWViNTY1MDA4ZTgzOWY0MSIsInVzZXIiOiI1YzVhZmU4NGI4NTMyYzAwMTkxYzI4NmYiLCJvcmciOiI1YzVhMDYxMjJlYWM4ODAwMTlmMmU0MTkiLCJvcmdOYW1lIjoienp6LXNhcmFoIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLmFkbWluIiwib3JnLnVzZXIiXSwiZXhwIjoxNTUwMDcyMDY3LCJhdWQiOiJ1cm46Y29uc3VtZXIiLCJpc3MiOiJ1cm46YXBpIiwic3ViIjoiNWM1YWZlODRiODUzMmMwMDE5MWMyODZmIn0.7JtzujViP56W-Vv6e7W4Agb30Txg4WrASeaCXDs_eYk"



function handleFiles(files) {
  // Check for the various File API support.
  if (window.FileReader) {
    // FileReader are supported.
    getAsText(files[0]);
  } else {
    alert('FileReader are not supported in this browser.');
  }
}

function getAsText(fileToRead) {
  var reader = new FileReader();
  // Handle errors load
  reader.onload = loadHandler;
  reader.onerror = errorHandler;
  // Read file into memory as UTF-8
  reader.readAsText(fileToRead);
}

function loadHandler(event) {
  var csv = event.target.result;
  processData(csv);
}


//format CSV rows to arrays
function processData(csv) {
  var allTextLines = csv.split(/\r\n|\n/);
  var lines = [];
  while (allTextLines.length) {
    lines.push(allTextLines.shift().split(','));
  }


  //for each array/row, identify indices to make into data objects
  var i;
  for (i = 0; i < lines.length; i++) {
    let firstName = (lines[i][0])
    let lastName = (lines[i][1])
    let email = (lines[i][2]).toLowerCase()
    let birthday = new Date(lines[i][3])
    let homePhone, workPhone;

    if (lines[i][4] != "") {
      homePhone = '+1' + (lines[i][4]).split('').map(n => n.replace('-', '')).join('')
    } else {
      homePhone = "no data for home phone"
    }
    if (lines[i][5] != "") {
      workPhone = '+1' + (lines[i][5]).replace('1-', '').replace('-', '').replace(' ', '').replace('(', '').replace(')', '').replace('.', '')
    } else {
      workPhone = "no data for work phone"
    }

    let customerType = (lines[i][6])

    //1- is a problem in phones


    //phone is not in the right format

    // if the string is empty, have a way to send data
    if (firstName === null) {
      firstName = "not available"
    }

    if (email === null) {
      email = "not available"
    }

    if (customerType === null) {
      customerType = "not available"
    }


    let sendData = JSON.stringify({
      "name": `${firstName} ${lastName}`,
      "emails": [
        {
          "email": email,
          "verified": false,
          "type": "home"
        }
      ],
      "phones": [
        {
          "phone": homePhone,
          "verified": false,
          "type": "home"
        },
        {
          "phone": workPhone,
          "type": "work"
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
      "birthdayAt": birthday,
      "tags": [
        "cool customer",
        "nice",
        `this customer is a ${customerType}`
      ],
    })

    console.log(sendData)



    // MAKE POST REQUEST (from Kustomer Docs):

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://cors-anywhere.herokuapp.com/https://api.kustomerapp.com/v1/customers");
    xhr.setRequestHeader("authorization", `Bearer ${token}`);
    xhr.setRequestHeader("content-type", "application/json");


    xhr.send(sendData);


  }





}








function errorHandler(evt) {
  if (evt.target.error.name == "NotReadableError") {
    alert("Cannot read file !");
  }
}

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;
//
// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });
//
// xhr.open("GET", "https://api.kustomerapp.com/v1/customers");
// xhr.setRequestHeader("authorization", `Bearer ${token}`);
// xhr.setRequestHeader("content-type", "application/json");
