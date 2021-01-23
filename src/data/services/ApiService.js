const baseUrl = 'http://192.168.100.7:3002/api/foodnative';

export const ApiService = {
  get(endpoint) {
    return fetch(`${baseUrl}${endpoint}`).then((res) => {
      return res.json();
    });
  },
  post(endpoint, data) {
    return fetch(`${baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      return res.json();
    });
  },
};
