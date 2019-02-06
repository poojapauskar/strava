var http = require('http');
const https = require('https');

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-Type": "application/json"});


	var urlStr = "www.strava.com"

	//{'Authorization': 'Bearer 0e232f4b512d2be27e9f77ae0e66da5d71e0f92f'}

	var options = {
	   host: urlStr,
	   port: '443',
	   path: '/api/v3/athlete/activities?after=1548897113',
	   method: 'GET',
	   // authentication headers
	   headers: {
	      'Authorization': 'Bearer 0e232f4b512d2be27e9f77ae0e66da5d71e0f92f'
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





});

server.listen(8080);


// URL = str(sheet.cell_value(j, 8))
// 			TOKEN = "Bearer " + str(sheet.cell_value(j, 3))
// 			DATE = str(sheet.cell_value(j, 7))
// 			personId = int(sheet.cell_value(j, 1))
// 			print "personId --- " + str(personId)

// 			HEADERS = {"Authorization":TOKEN}
			
// 			print "No." + str(count) + " => " + str(HEADERS) + "\n => " + URL
// 			print "DATE " + DATE
			
// 			r = requests.get(url = URL, headers=HEADERS ) 

// 			# extracting data in json format 
// 			data = r.json() 
// 			# data = ""
// 			print str(data) 