fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
		var stations = data.network.stations;

for (var i = 0; i < stations.length; i++) {
  // console.log(stations[i].name + ' // ' + stations[i].empty_slots + ' // ' + stations[i].free_bikes);

// Stations
		var liste = document.querySelector('.names');
  	var currentLi = document.createElement('tr');
  	currentLi.textContent = stations[i].name
		liste.appendChild(currentLi)
// Vélos libres
  	var listefree = document.querySelector('.free_bikes');
  	var currentLifree = document.createElement('tr');
  	currentLifree.textContent = stations[i].free_bikes
		listefree.appendChild(currentLifree)
// Emplacements libres
  	var listeempty = document.querySelector('.empty_slots');
  	var currentLiempty = document.createElement('tr');
  	currentLiempty.textContent = stations[i].empty_slots
  	listeempty.appendChild(currentLiempty)

// Définition variables
var total = stations[i].extra.slots
var free = stations[i].free_bikes

// Condition proportionnelle
if (free >= (total/2)) {
	console.log(stations[i].name + 'go' + ' ' + total/2);
	console.log(stations[i].free_bikes);
//
// function changecouleur(#F4F4F4) {
// document.getElementById('names').style.color="blue";

}
		}
	});
});











//
	2// var free = data.network.stations.free_bikes;
  // var empty = data.network.stations.empty_slots;

	3// if (stations[i].free_bikes >= ((stations[i].extra.slots) % 2)
		// console.log(stations[i].name +"  "+  "libre")


  1// var free = stations[i].free_bikes
  // var empty = stations[i].empty_slots
  // var nombrevélos = function(i) { return 'free' + 'empty';}
  // if ( 'free' >= 'nombrevélos' % 2) {  }
