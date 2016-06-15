'use strict';

/**
* Typical interaction: 1 setting station | 2. (usual) getting n. bikes and docks
* api source: api:
*/
var Configstore = require('configstore');
var userConf = new Configstore('hubway');

var uri = 'http://api.citybik.es/hubway.json';
var stationData;

// setting the options global // undefined if not set yet
var userHome = userConf.get('home');
var userWork = userConf.get('work');
var userRelax = userConf.get('relax');
var userCoffee = userConf.get('coffee');

var stationId;

var userOptions = [userHome, userWork, userRelax, userCoffee];

var buttons = document.getElementsByTagName("button");
console.log( buttons );
// add event listerner to a

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', checkUserOption(buttons[i]), false )
}

function checkUserOption(button) {
  return function() {
    if ( !userConf.get(button.value) ) {
      console.log('got in')
      // ---
      swal({
        title: 'Submit your '+ button.value +' station id',
        input: 'stationId',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function(stationId) {
          return new Promise(function(resolve, reject) {
            setTimeout(function() {
              if (email === 'taken@example.com') {
                reject('This email is already taken.');
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false
      }).then(function(email) {
        swal({
          type: 'success',
          title: 'Hubway Awesomeness',
          html: 'We saved your' + station.id + '!'
        });
      })
      // ---
      userConf.set(button.value, stationId);
    } else {
      // show station data
      alert('got data')
    }
  }
}


// to set the stations - use configstore

function promptUser() {
   return;
}

function getStationData() {
  // gets triggered when user clicks on one of the buttons
  fetch(uri)
    .then( function(response) {
      return response.json();
    }).then( function(json) {
      // r
      stationData = json;
    }).catch( function(err) {
      console.log('checkout the error: ', err);
    })
}
