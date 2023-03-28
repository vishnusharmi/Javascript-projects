const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data)); //
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const displayTemperature = (temperature) => {
  console.log(temperature);
  setInnerText("city", temperature.name);
  setInnerText("temp", temperature.main.temp);
  setInnerText("weather", temperature.weather[0].main);

  const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("image-icon");
  imgIcon.setAttribute("src", url);
};

const ipEle = document.getElementById("Ip");
const countryEle = document.getElementById("country");
const cityEle = document.getElementById("city");

fetch(`http://ip-api.com/json/?fields=61439

`)
  .then((response) => response.json())
  .then((response) => {
    ipEle.textContent = response.query;
    countryEle.textContent = response.country;
    cityEle.textContent = response.city;
    console.log(response);
  });
