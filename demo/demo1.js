import loadJSON from "../lib/helpers.js";

let filePath = "../data/movies.json";
let elementOneId = "floatViewTest1";

loadJSON(filePath, response => {
  let data = JSON.parse(response);
  document.getElementById(elementOneId).objectArray = data;
});
