const form = document.querySelector('#lead-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const summary = [
    `Nombre: ${data.get('nombre')}`,
    `Empresa: ${data.get('empresa')}`,
    `Email: ${data.get('email')}`,
    `Necesidad: ${data.get('necesidad')}`,
    `Proyecto: ${data.get('proyecto') || 'Sin detalle adicional'}`,
  ].join('\n');
  status.textContent = 'Gracias. Abrimos tu correo para enviar la solicitud a EGOCREA.';
  window.location.href = `mailto:hola@egocrea.es?subject=${encodeURIComponent('Nueva solicitud desde la web')}&body=${encodeURIComponent(summary)}`;
});
