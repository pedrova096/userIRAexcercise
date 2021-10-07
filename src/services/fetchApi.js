import {BASE_URL} from 'src/constants/endpoints';

const fetchApi = async ({
  url,
  method,
  body,
  headers = {
    ['Content-Type']: 'application/json',
  },
}) => {
  try {
    if (body && method !== 'GET') {
      body = JSON.stringify(body);
    }
    if (url.startsWith('/')) {
      url = BASE_URL + url;
    }
    const response = await fetch(url, {method, body, headers});
    if (response.ok) {
      return await response.json();
    }
    throw Error('There was an error, please try later');
  } catch (error) {
    throw error;
  }
};

fetchApi.post = args => fetchApi({...args, method: 'POST'});
fetchApi.get = args => fetchApi({...args, method: 'GET'});
fetchApi.patch = args => fetchApi({...args, method: 'PATCH'});

export default fetchApi;
