const Call = {

  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then((response) => {
        if(response.ok) {
          console.log(response.json())
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
    .then(response => console.log(response.json()))
    .catch(error => console.log(error))

  }


}
export default Call;