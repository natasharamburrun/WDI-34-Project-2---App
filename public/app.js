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

//   /* global google */
//   function initMap() {
//     // const venue = { lat: 51.5002, lng:  0.1332 };
//     const location = { 'lat': parseFloat($('#map')[0].dataset.lat, 10), 'long': parseFloat($('#map')[0].dataset.long, 10) };
//     console.log(location);
//     //google maps display
//     const map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 14,
//       center: location
//     });
//     new google.maps.Marker({
//       position: location,
//       map: map
//     });
//   }
//
//   document.addEventListener('DOMContentLoaded', () => {
//     $('form').validate();
//     initMap();
//   });
//   //
});

// map
/* global google  */

function initMap() {
  const venue = { 'lat': parseFloat($('#map')[0].dataset.lat, 10), 'lng': parseFloat($('#map')[0].dataset.long, 10) };
  console.log(venue);

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: venue
  });
  new google.maps.Marker({
    position: venue,
    map: map
  });
}


window.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('map')) initMap();
});
