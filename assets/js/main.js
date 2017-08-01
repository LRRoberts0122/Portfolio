var logo = document.querySelector('#logo');
logo.addEventListener('click', function() {
  window.location.href="index.html";
});

var monocle = document.querySelector('#monocle');
var openbmc = document.querySelector('#openbmc');
var mannacloud = document.querySelector('#mannacloud');

if(monocle && openbmc && mannacloud) {
  monocle.addEventListener('click', function() {
    window.location.href="monocle.html";
  });

  openbmc.addEventListener('click', function() {
    window.location.href="openbmc.html";
  });

  mannacloud.addEventListener('click', function() {
    window.location.href="mannacloud.html";
  });
}
