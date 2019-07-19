const Call = {

  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
      })
      .catch(error => console.log(error))
  },

  postRes(data) {
    return fetch('http://localhost:3001/api/v1/reservations', 
    {method: 'POST', 
    body: JSON.stringify(data),
    header: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    if(response.ok) {
      return response.json()
    }
  })
    .catch(error => console.log(error))

  }


}
export default Call;