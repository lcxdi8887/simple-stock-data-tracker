function fetchData(api, callback, component) {
  $.getJSON(api, "", function(data) {
      callback.call(component, data);
    }
  ).fail(function() {
    console.log("Data is unavailable.");
  });
}

export { fetchData }