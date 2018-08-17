/* global google*/

document.addEventListener('DOMContentLoaded', () => {

//***********************************************
//Code to activate burger menu on mobile in BULMA
// Add a click event on each burger menu
//***********************************************

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {

    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  //*****************
  //GOOGLE MAPS SETUP
  //*****************

  function initMap() {


    const location = {lat: 51.5002, lng: 0.1332};
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: location
    });

    new google.maps.Marker({
      position: {lat: 51.5002, lng: 0.1332},
      map: map
    });
  }

  if($('#map')[0]) initMap();
//
//   function initMap() {
//
//     const geocoder = new google.maps.Geocoder();
//     const address = $('#salonAddress').text();
//     // gets the latitute and longitude of the restuarant based in its address
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status === google.maps.GeocoderStatus.OK) {
//         const latitude = results[0].geometry.location.lat(); //number
//         const longitude = results[0].geometry.location.lng(); //number
//
//         const location = {lat: latitude, lng: longitude};
//         const map = new google.maps.Map($('#map')[0], {
//           zoom: 15,
//           center: location
//         });
//         new google.maps.Marker({
//           position: location,
//           map: map
//         });
//       }
//     });
//   }
//
//   if($('#map')[0]) initMap();
//
});
