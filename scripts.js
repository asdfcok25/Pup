document.addEventListener('DOMContentLoaded', function() {
  const btnPoopDL = document.getElementById('btnPoopDL');
  const btnYoutube = document.getElementById('btnYoutube');
  const contentFrame = document.getElementById('contentFrame');

  btnPoopDL.addEventListener('click', function() {
    contentFrame.src = 'https://poopdl.dapuntaratya.com/';
    btnPoopDL.classList.add('active');
    btnYoutube.classList.remove('active');
  });

  btnYoutube.addEventListener('click', function() {
    contentFrame.src = 'https://www.youtube.com/';
    btnYoutube.classList.add('active');
    btnPoopDL.classList.remove('active');
  });
});
