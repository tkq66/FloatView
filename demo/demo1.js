import { loadJSON, getRandomSample } from "../lib/helpers.js";

let filePath = "../data/movies.json";
let elementOneId = "floatViewTest1";

loadJSON(filePath, response => {
  let data = JSON.parse(response);
  let sampleData = getRandomSample(data, 200);
  document.getElementById(elementOneId).objectArray = sampleData;
});
