import axios from 'axios';

import { API_KEY } from '../environment';

export const get_current_city_weather = (city: string) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
  );
};

export const get_five_day_weather = (city: string) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );
};

export const get_16_day_weather = (city: string) => {
  return axios.get(
    `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=16&appid=${API_KEY}`
  );
};
