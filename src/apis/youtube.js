import axios from 'axios';

// const KEY =  'AIzaSyDOU07JibTWw9MIoRgMbco8f9jpDiDauaM';

export default axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
          part: 'snippet',
          maxResults:5,
          key: 'AIzaSyDOU07JibTWw9MIoRgMbco8f9jpDiDauaM'
      }
});