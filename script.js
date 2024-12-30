function navigateTo(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  // Muestra la primera sección después de la bienvenida
  document.querySelector('.welcome button').addEventListener('click', () => {
    document.querySelector('.welcome').style.display = 'none';
    navigateTo('info');
  });
  