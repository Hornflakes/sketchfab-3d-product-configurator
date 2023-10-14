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
    return [
      'data-sketchfab-url-id',
      'data-base-textures-url',
      'data-material-texture-urls',
      'data-selected-material-texture-url',
    ];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attributeName] = newValue;

    if (attributeName === 'data-sketchfab-url-id') return;
    if (attributeName === 'data-base-texture-url') return;

    if (attributeName === 'data-material-texture-urls') this.initConfigurator();
    else if (attributeName === 'data-selected-material-texture-url') this.selectMaterialTexture(this[attributeName]);
  }

  initConfigurator() {
    this.configurator = new Configurator(this['data-sketchfab-url-id'], this['data-base-textures-url']);
    this.configurator.init(JSON.parse(this['data-material-texture-urls']));
  }

  selectMaterialTexture(attr) {
    const objEntry = Object.entries(JSON.parse(attr))[0];
    this.configurator.setMaterialTexture(objEntry[0], objEntry[1]);
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
