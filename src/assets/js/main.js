$(document).ready(function() {
  $(".button-collapse").sideNav({
    closeOnClick: true,
    draggable: true
  });

  if ($('.toprow')) {
    $('.toprow').pushpin({
      top: $('.toprow').offset().top
    })
  }
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
}
