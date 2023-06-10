function filterData(fetchedData) {
  return fetchedData.data.filter(place => {
    return place.designation === "National Park" ||
      place.designation === "National Parks" ||
      place.designation === "National Park & Preserve" ||
      place.designation === "National and State Parks" ||
      (place.designation === "" && place.name === "National Park of American Samoa")
  })
};

export { filterData };