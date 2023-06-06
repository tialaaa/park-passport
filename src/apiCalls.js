function getData() {
  return fetch(`https://developer.nps.gov/api/v1/parks?limit=469&api_key=${process.env.REACT_APP_API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Server error')
      };

      return response.json();
    })
};

export { getData };
