function getData() {
  return fetch(`https://developer.nps.gov/api/v1/parks?limit=469&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Server error')
      };

      // TO DO: add cleaning function to returned json
      // const filteredParks = this.state.fetch.filter(place => place.designation === "National Park")
      return response.json();
    })
}

export { getData }