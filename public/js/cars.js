"use strict";
var pageCount = 1
// this is the base API url
var baseUrl = `http://mimeocarlisting.azurewebsites.net/api/cars/${pageCount}/3`;
console.log(pageCount)

function formatCars(carsJSON) {
  console.log(carsJSON)
  var newRow = carsJSON.map(function(car){
    return `<div class="col-md-4 car"><h2>${car.Make}</h2><p><strong>Model:</strong> ${car.Model}</p><p><strong>Year:</strong> ${car.Year}</p></div>`
  }).join('')

  return `<div class="row">${newRow}</div>`
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a
  // div with a class "row"
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON))


}

function fetchJSON() {
  $.ajax({
       url: baseUrl,
       contentType: 'application/json',
       dataType: 'jsonp',
       success: function(data) {
         addCarsToDOM(data)
         pageCount++
       }
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()
  })
}
