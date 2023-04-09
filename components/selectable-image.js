class SelectableImage extends HTMLElement {
  template;
  style;

  constructor() {
    super();
    this.initTemplate();
    this.initStyle();
  }

  initTemplate() {
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <div id="selectable-image">
        <img id="image" />
        <div id="grayscaler">
          <img id="checkmark" />
        </div>
      </div>
    `;
  }

  initStyle() {
    this.style = document.createElement('style');
    this.style.textContent = `
      #selectable-image {
        position: relative;
        cursor: pointer;
        line-height: 0;
        width: 100%;
        height: 100%;
      }
    
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }
    
      #grayscaler {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
    
        display: none;
        background: rgba(0, 0, 0, 0.25);
      }
    
      #checkmark {
        position: absolute;
        top: 33%;
        left: 33%;
        width: 33%;
        height: 33%;
      }
    
      #selectable-image.selected > #grayscaler,
      #selectable-image:hover > #grayscaler {
        display: block;
      }
    `
  }

  static get observedAttributes() {
    return ['image-src', 'checkmark-src', 'selected'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attributeName] = newValue;

    if(attributeName === 'selected') this.updateUIState();
  }

  updateUIState() {
    const el = this.shadowRoot.getElementById('selectable-image');
    el.classList.toggle('selected');
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });
    this.setImageSource();
    this.setCheckmarkSource();
    this.shadowRoot.appendChild(this.template.content);
    this.shadowRoot.append(this.style);
  }

  setImageSource() {
    const el = this.template.content.getElementById('image');
    el.src = this['image-src'];
  }

  setCheckmarkSource() {
    const el = this.template.content.getElementById('checkmark');
    el.src = this['checkmark-src'];
  }
}
window.customElements.define('selectable-image', SelectableImage);