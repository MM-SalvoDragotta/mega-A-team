const rapidApiKey = "689cdde1e7mshecdba67d4030dcfp1c88acjsn0cf409ea52a5";
const rapidApiHost = "covid-19-data.p.rapidapi.com"

const options = {
	headers: {
	  "x-rapidapi-host": rapidApiHost,
	  "x-rapidapi-key": rapidApiKey,
	},
  };

var country = "australia"
const endpointUrl = "https://covid-19-data.p.rapidapi.com/country?name=" + country;


fetch(endpointUrl, options)
	.then(response => {
		return response.json();
	  })
	  .then((body) => {
		console.log(body);
	console.log(body[0].confirmed)
	  })
	  .catch((err) => {
		console.log(err);
	  });
	