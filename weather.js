let updateWidget = function(data) {
  console.log("Got weather data: ", data)
  console.log("Weather icon: ", data.weather[0])
  $(".card-text").text("It is " + Math.round(data.main.temp) +  " degrees outside.")
  $(".card-title").text(data.name)
  $("card-img-top bg-primary img-fluid").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png")

  // HINT:
  // Weather icons are provided for you. Sample URL: http://openweathermap.org/img/w/01d.png
  // The very last part ('01d.png') should be obtained from the weather information.

}

let getWeather = function(info) {
  console.log(info)
  window.myInfo = info

  let latitude = info.coords.latitude.toFixed(4);
  let longitude = info.coords.longitude.toFixed(4);
  let apiKey = 'b9dad23a2ba7ee97e3cb9f2d4a7d2b5b'; // REPLACE THIS VALUE with your own key.

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let handlePosition = function(event) {
  console.log("Starting handlePosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather);
  console.log("Ending handlePosition...")
}

$("#get_forecast").on("click", handlePosition)

////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANY CODE BEYOND THIS POINT
////////////////////////////////////////////////////////////

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }
