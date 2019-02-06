"use strict";

var http = require('http');
const https = require('https');

const activityId=2120500013;
var token='0e232f4b512d2be27e9f77ae0e66da5d71e0f92f';

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "application/json"});


	var urlStr = "www.strava.com"

	//{'Authorization': 'Bearer 0e232f4b512d2be27e9f77ae0e66da5d71e0f92f'}

	var options = {
	   host: urlStr,
	   port: '443',
	   path: '/api/v3/activities/'+activityId+'?include_all_efforts=true',
	   method: 'GET',
	   // authentication headers
	   headers: {
	      'Authorization': 'Bearer '+token
	   }   
	};



	https.get(options, (resp) => {
	  let data = '';

	  // A chunk of data has been recieved.
	  resp.on('data', (chunk) => {
	    data += chunk;
	  });

	  // The whole response has been received. Print out the result.
	  resp.on('end', () => {
	    console.log("Test : " + data);
  		res.end(data);

	  });



	}).on("error", (err) => {
	  console.log("Error:-" + err.message);
	  	res.end(JSON.stringify({ Error: err.message }));
	});

    console.log("-----------------------")

	var options2 = {
	   host: urlStr,
	   port: '443',
	   path: '/api/v3/activities/'+activityId+'/laps',
	   method: 'GET',
	   // authentication headers
	   headers: {
	      'Authorization': 'Bearer '+token
	   }   
	};



	https.get(options2, (resp2) => {
	  let data2 = '';

	  // A chunk of data has been recieved.
	  resp2.on('data', (chunk2) => {
	    data2 += chunk2;
	  });

	  // The whole response has been received. Print out the result.
	  resp2.on('end', () => {
	    console.log("Test : " + data2);
  		res.end(data2);

	  });



	}).on("error", (err) => {
	  console.log("Error:-" + err.message);
	  	res.end(JSON.stringify({ Error: err.message }));
	});





});

server.listen(8080);

