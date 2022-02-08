// Navbar

const linkList = document.getElementById('list-link');
const linkAdd = document.getElementById('add-link');
const linkContact = document.getElementById('contact-link');

const sectionList = document.getElementById('list');
const sectionAdd = document.getElementById('add');
const sectionContact = document.getElementById('contact');

linkList.addEventListener('click', () => {
  if (sectionList.classList.contains('hidden')) {
    sectionList.classList.remove('hidden');
    if (sectionAdd.classList.contains('hidden')) {
      return true;
    }
    sectionAdd.classList.add('hidden');

    if (sectionContact.classList.contains('hidden')) {
      return true;
    }
    sectionContact.classList.add('hidden');
  }
  if (sectionAdd.classList.contains('hidden')) {
    return true;
  }
  sectionAdd.classList.add('hidden');

  if (sectionContact.classList.contains('hidden')) {
    return true;
  }
  sectionContact.classList.add('hidden');

  return true;
});

linkAdd.addEventListener('click', () => {
  if (sectionAdd.classList.contains('hidden')) {
    sectionAdd.classList.remove('hidden');
    if (sectionList.classList.contains('hidden')) {
      return true;
    }
    sectionList.classList.add('hidden');

    if (sectionContact.classList.contains('hidden')) {
      return true;
    }
    sectionContact.classList.add('hidden');
  }
  if (sectionList.classList.contains('hidden')) {
    return true;
  }
  sectionList.classList.add('hidden');

  if (sectionContact.classList.contains('hidden')) {
    return true;
  }
  sectionContact.classList.add('hidden');

  return true;
});

linkContact.addEventListener('click', () => {
  if (sectionContact.classList.contains('hidden')) {
    sectionContact.classList.remove('hidden');
    if (sectionAdd.classList.contains('hidden')) {
      return true;
    }
    sectionAdd.classList.add('hidden');

    if (sectionList.classList.contains('hidden')) {
      return true;
    }
    sectionList.classList.add('hidden');
  }
  if (sectionAdd.classList.contains('hidden')) {
    return true;
  }
  sectionAdd.classList.add('hidden');

  if (sectionList.classList.contains('hidden')) {
    return true;
  }
  sectionList.classList.add('hidden');

  return true;
});
