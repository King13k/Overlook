const fetchData = (extension) => {
  return fetch(`http://localhost:3001/api/v1/${extension}`)
    .then((response) => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    })
    .catch(err => console.log(err));
};

const fetchSingleApi = (userId) => {
  return fetch(`http://localhost:3001/api/v1/customers/${userId}`)
    .then(response => response.json())
};

const postData = (data) => {
  return fetch("http://localhost:3001/api/v1/bookings", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if(response.ok) {
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    })
    .catch(err => console.log(err))
  }



export {fetchData,fetchSingleApi,postData}
