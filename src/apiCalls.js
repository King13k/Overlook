let fetchData = (extension) => {
  return fetch(`http://localhost:3001/api/v1/${extension}`)
    .then((response) => {
      if(response.ok) {
        // console.log(response.json())
        return response.json();
      } else {
        throw Error(response.statusText)
      }
    })
    .catch(err => console.log(err));
};

const postData = (data) => {
//   return fetch(`http://localhost:3001/api/v1/bookings`, {
//     method: 'POST',
//     header: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   })
//     .then(response => {
//       console.log(response.json())
//       throw "response"
//       }
//       return response.json()
//     })
}


export {fetchData, postData}
