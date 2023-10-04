const sketchfabViewerEl = document.querySelector('sketchfab-viewer');
const formEl = document.querySelector('form');
const formWidth = 532;
let scrollBarWidth;

{
  const scrollBox = document.createElement('div');
  scrollBox.style.position = 'absolute';
  scrollBox.style.visibility = 'hidden';
  scrollBox.style.overflow = 'scroll';

  document.body.appendChild(scrollBox);
  scrollBarWidth = scrollBox.offsetWidth - scrollBox.clientWidth;
  document.body.removeChild(scrollBox);

  const dropdownHeaderEls = document.getElementsByClassName('dropdown-header');
  for (let el of dropdownHeaderEls) {
    el.addEventListener('click', () => handleDropdownHeaderClick(el));
  }
}

const backTextureSelectors = document.getElementsByClassName('back');
for (let el of backTextureSelectors) {
  el.addEventListener('select', (e) => selectBackTexture(e));
}

const seatTextureSelectors = document.getElementsByClassName('seat');
for (let el of seatTextureSelectors) {
  el.addEventListener('select', (e) => selectSeatTexture(e));
}

sketchfabViewerEl.setAttribute('data-url-id', '1ea391ec7c3440f18c2a6a7be3fdb184');
sketchfabViewerEl.setAttribute('texture-urls', backTextureSelectors[0].getAttribute('texture-urls'));

const handleDropdownHeaderClick = (dropdownHeaderEl) => {
  toggleDropdownEl(dropdownHeaderEl);
  updateFormElWidth();
};

const toggleDropdownEl = (dropdownHeaderEl) => {
  dropdownHeaderEl.classList.toggle('active');

  const dropdownItemsEl = document.querySelector('.' + dropdownHeaderEl.id);
  dropdownItemsEl.classList.toggle('hidden');
};

const updateFormElWidth = () => {
  if (formEl.offsetWidth > formEl.clientWidth) {
    setFormElWidthStyle(formWidth + scrollBarWidth);
  } else {
    setFormElWidthStyle(formWidth);
  }
};

const setFormElWidthStyle = (width) => {
  formEl.style.width = width + 'px';
};

const selectBackTexture = (e) => {
  sketchfabViewerEl.setAttribute('data-back-texture-id', e.detail.textureId);
};

const selectSeatTexture = (e) => {
  sketchfabViewerEl.setAttribute('data-seat-texture-id', e.detail.textureId);
};
