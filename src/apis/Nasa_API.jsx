import axios from 'axios';

export function getAPOD(date = '') {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=SnhXUAk6vrVz2m05FXJ8KTUg7aa54Ak5nwKHHqOD&date=${date}`
  );
}
