document.addEventListener('DOMContentLoaded', function() {
  const btnPoopDL = document.getElementById('btnPoopDL');
  const btnYoutube = document.getElementById('btnYoutube');
  const iframeContainer = document.getElementById('iframeContainer');

  function loadIframe(url) {
    iframeContainer.innerHTML = `<iframe src="${url}" allowfullscreen></iframe>`;
    iframeContainer.style.display = 'block';
  }

  btnPoopDL.addEventListener('click', function() {
    loadIframe('https://poopdl.dapuntaratya.com/');
  });

  btnYoutube.addEventListener('click', function() {
    loadIframe('https://www.youtube.com/');
  });
});
