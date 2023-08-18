let isTemplate = window.location.pathname
const divTemplate = document.querySelector('.template')
if (isTemplate === '/invoice/') {
  divTemplate.style.display = 'block'
} else {
  divTemplate.style.display = 'none'
}
function closeTemplate() {
  divTemplate.style.display = 'none'
}
