fetch('http://api.citybik.es/v2/networks/bicloo').then(function(res) {
	return res.json().then(function(data) {
		var stations = data.network.stations;

for (var i = 0; i < stations.length; i++) {
  // console.log(stations[i].name + ' // ' + stations[i].empty_slots + ' // ' + stations[i].free_bikes);

	var liste = document.querySelector('.names');
  var currentLi = document.createElement('tr');
  currentLi.textContent = stations[i].name
	liste.appendChild(currentLi)
}

for (var i = 0; i < stations.length; i++) {

    var listefree = document.querySelector('.free_bikes');
    var currentLifree = document.createElement('tr');
    currentLifree.textContent = stations[i].free_bikes
  	listefree.appendChild(currentLifree)

}

for (var i = 0; i < stations.length; i++) {

    var listeempty = document.querySelector('.empty_slots');
    var currentLiempty = document.createElement('tr');
    currentLiempty.textContent = stations[i].empty_slots
  	listeempty.appendChild(currentLiempty)

// console.log(stations[i].free_bikes)
}
	var free = data.network.stations.free_bikes;
  var empty = data.network.stations.empty_slots;
for (var i = 0; i < stations.length; i++) {

  // var free = stations[i].free_bikes
  // var empty = stations[i].empty_slots
  var nombrevélos = function(i) { return 'free' + 'empty';}

  if ( 'free' >= 'nombrevélos' % 2) {

  console.log(stations[i].name + "libre")
  }
}
	});
});
