document.addEventListener('DOMContentLoaded', function() {
  const btnPoopDL = document.getElementById('btnPoopDL');
  const btnYoutube = document.getElementById('btnYoutube');
  const dynamicIframe = document.getElementById('dynamicIframe');
  const modalTitle = document.getElementById('modalTitle');
  const iframeModal = new bootstrap.Modal(document.getElementById('iframeModal'));

  btnPoopDL.addEventListener('click', function() {
    dynamicIframe.src = 'https://poopdl.dapuntaratya.com/';
    modalTitle.textContent = 'PoopDL Downloader';
  });

  btnYoutube.addEventListener('click', function() {
    dynamicIframe.src = 'https://www.youtube.com/';
    modalTitle.textContent = 'YouTube';
  });

  // Reset iframe when modal is closed
  document.getElementById('iframeModal').addEventListener('hidden.bs.modal', function() {
    dynamicIframe.src = '';
  });
});
