const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    if (!error) {
      const data = JSON.parse(body);
      if (data[0] === null) {
        callback(error, null);
        return;
      } else {
        callback(null, data["ip"]);
        return;
      }
    } else {
      callback(error, null);
      return;
    }
  });
};

module.exports = { fetchMyIP };
