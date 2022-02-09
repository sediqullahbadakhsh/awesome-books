// Navbar

const linkList = document.getElementById('list-link');
const linkAdd = document.getElementById('add-link');
const linkContact = document.getElementById('contact-link');

const sectionList = document.getElementById('list');
const sectionAdd = document.getElementById('add');
const sectionContact = document.getElementById('contact');

const links = document.getElementsByClassName('links')
const sections = document.getElementsByClassName('section')
    
linkList.addEventListener('click', () => {
  for (let i = 0; i < links.length; i += 1 ) {
    if (links[i].classList.contains('active')) {
      links[i].classList.remove('active')
    }
  } 
  
  linkList.classList.add('active') 
  
  for (let i = 0; i < sections.length; i += 1) {
    if (!sections[i].classList.contains('hidden')){
      sections[i].classList.add('hidden')
    }
  }

  sectionList.classList.remove('hidden')
});

linkAdd.addEventListener('click', () => {
  for (let i = 0; i < links.length; i += 1 ) {
    if (links[i].classList.contains('active')) {
      links[i].classList.remove('active')
    }
  } 
  
  linkAdd.classList.add('active')
  
  for (let i = 0; i < sections.length; i += 1) {
    if (!sections[i].classList.contains('hidden')){
      sections[i].classList.add('hidden')
    }
  }

  sectionAdd.classList.remove('hidden')

});

linkContact.addEventListener('click', () => {
  for (let i = 0; i < links.length; i += 1 ) {
    if (links[i].classList.contains('active')) {
      links[i].classList.remove('active')
    }
  } 
  
  linkContact.classList.add('active')
  
  for (let i = 0; i < sections.length; i += 1) {
    if (!sections[i].classList.contains('hidden')){
      sections[i].classList.add('hidden')
    }
  }

  sectionContact.classList.remove('hidden')
});