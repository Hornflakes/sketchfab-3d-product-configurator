class SketchfabViewer extends HTMLElement {
  template;
  style;
  configurator;

  constructor() {
    super();
    this.initTemplate();
    this.initStyle();
  }

  initTemplate() {
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <iframe
        id="sketchfab-viewer"
        allowfullscreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        frameborder="0"
      ></iframe>
    `;
  }

  initStyle() {
    this.style = document.createElement('style');
    this.style.textContent = `
      iframe {
        width: 100%;
      }
    `;
  }

  static get observedAttributes() {
    return ['data-url-id', 'data-back-texture-id', 'data-seat-texture-id', 'data-legs-texture-id'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attributeName] = newValue;

    if (attributeName === 'data-url-id') this.initConfigurator(this[attributeName]);
    else this.selectMaterial(attributeName, this[attributeName]);
  }

  initConfigurator(urlId) {
    this.configurator = new Configurator(urlId);
    this.configurator.init();
  }

  selectMaterial(attributeName, textureId) {
    let materialId;
    switch (attributeName) {
      case 'data-back-texture-id': {
        materialId = this.configurator.materialIds.backMaterialId;
        break;
      }
      case 'data-seat-texture-id': {
        materialId = this.configurator.materialIds.seatMaterialId;
        break;
      }
      case 'data-legs-texture-id': {
        materialId = this.configurator.materialIds.legsMaterialId;
        break;
      }
    }
    this.configurator.setMaterialTexture(materialId, textureId);
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.appendChild(this.template.content);
    this.shadowRoot.append(this.style);
  }
}
window.customElements.define('sketchfab-viewer', SketchfabViewer);
