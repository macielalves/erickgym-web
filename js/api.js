// Adaptação
function get_json(url, callback) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("{\"ok\": false}");
      }
      return response.json();
    })
    .then(data => callback(data))
    .catch(e => console.error(e));
};

export function get_data_api(url, callback) {
  get_json(url, data => callback(data));
}


// exemplo MDN
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText)
  };
  xhr.open('GET', url, true);
  xhr.send();
}

export function getDataAPI(url, callback) {
  getJSON(url, data => callback(JSON.parse(data)));
}