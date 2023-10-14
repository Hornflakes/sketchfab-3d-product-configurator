class TextureSelector extends HTMLElement {
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
      <section>
        <h2>
          <b>Upholstery</b>
        </h2>

        <div class="images">
          <selectable-image
            id="angel"
            image-src="assets/Velvet_Grey.003/Angel_2746.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="baloo"
            image-src="assets/Velvet_Grey.003/Baloo_2073.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="bunny"
            image-src="assets/Velvet_Grey.003/Bunny_203.01.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="casablanca"
            image-src="assets/Velvet_Grey.003/Casablanca_2312.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="dream-velvet"
            image-src="assets/Velvet_Grey.003/Dream_Velvet_202_39.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="eureka"
            image-src="assets/Velvet_Grey.003/Eureka_2124.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="granada"
            image-src="assets/Velvet_Grey.003/Granada_2721.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="hamilton"
            image-src="assets/Velvet_Grey.003/Hamilton_2804.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="hygge"
            image-src="assets/Velvet_Grey.003/Hygge_2539.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="kenia"
            image-src="assets/Velvet_Grey.003/Kenia_702.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="kongo"
            image-src="assets/Velvet_Grey.003/Kongo_721.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="magic-velvet"
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2216.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="prestige"
            image-src="assets/Velvet_Grey.003/Prestige_2762.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="riviera"
            image-src="assets/Velvet_Grey.003/Riviera_36.jpg"
            class="material"
          ></selectable-image>

          <selectable-image
            id="venus-velvet"
            image-src="assets/Velvet_Grey.003/Venus_Velvet_2919.jpg"
            class="material"
          ></selectable-image>
        </div>
      </section>

      <section class="last">
        <h2>
          <b>Colors</b>
        </h2>

        <div class="images colors angel active">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Angel_2746.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Angel_2748.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors baloo">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Baloo_2073.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Baloo_2074.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Baloo_2084.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors bunny">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Bunny_203.01.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors casablanca">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Casablanca_2312.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Casablanca_2316.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors dream-velvet">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Dream_Velvet_202_39.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors eureka">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2124.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2131.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2134.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2143.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2144.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2145.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2147.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Eureka_2148.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors granada">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Granada_2721.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Granada_2722.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Granada_2728.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Granada_2735.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors hamilton">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2804.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2805.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2807.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2811.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2816.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Hamilton_2819.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors hygge">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Hygge_2539.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors kenia">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Kenia_702.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Kenia_795.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors kongo">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Kongo_721.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Kongo_732.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Kongo_735.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Kongo_736.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors magic-velvet">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2216.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2217.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2219.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2225.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2226.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2231.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2234.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2248.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2253.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Magic_Velvet_2258.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors prestige">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2762.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2764.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2765.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2766.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2767.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2768.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2770.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2771.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2772.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2773.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2774.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2775.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2776.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2777.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Prestige_2778.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors riviera">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Riviera_36.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Riviera_41.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Riviera_51.jpg"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/Velvet_Grey.003/Riviera_56.jpg"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors venus-velvet">
          <selectable-image
            image-src="assets/Velvet_Grey.003/Venus_Velvet_2919.jpg"
            class="color"
          ></selectable-image>
        </div>
      </section>
    `;
  }

  initStyle() {
    this.style = document.createElement('style');
    this.style.textContent = `
      *:where(
              :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
          ) {
          all: unset;
          display: revert;
      }

      h2 {
          font-size: 16px;
      }
      
      b {
          font-weight: bold;
      }

      section {
        padding: 20px;

        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      section.last {
        padding-bottom: 30px;
      }

      .images {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      selectable-image {
        height: 72px;
        width: 72px;
      }

      .colors {
        display: none;
      }

      .colors.active {
        display: flex;
      }
    `;
  }

  get materialEls() {
    return this.shadowRoot.querySelectorAll('.material');
  }

  get selectableColorsEls() {
    return this.shadowRoot.querySelectorAll('.colors');
  }

  get colorEls() {
    return this.shadowRoot.querySelectorAll('.color');
  }

  static get observedAttributes() {
    return ['checkmark-src'];
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attributeName] = newValue;
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });

    const selectableImageEls = this.template.content.querySelectorAll('selectable-image');
    this.setImagesCheckmarkSrc(selectableImageEls);

    this.shadowRoot.appendChild(this.template.content);
    this.shadowRoot.append(this.style);

    this.setTextureUrlsAttribute(selectableImageEls);
    this.selectFirstMaterial();
    this.initEventListeners();
  }

  setTextureUrlsAttribute(selectableImageEls) {
    const textureUrls = [];
    for (let el of selectableImageEls) {
      const imageSrc = el.getAttribute('image-src');
      textureUrls.push(imageSrc.slice(imageSrc.lastIndexOf('/') + 1));
    }
    this.setAttribute('texture-urls', JSON.stringify(textureUrls));
  }

  setImagesCheckmarkSrc(selectableImageEls) {
    for (let el of selectableImageEls) {
      el.setAttribute('checkmark-src', this['checkmark-src']);
    }
  }

  selectFirstMaterial() {
    const el = this.materialEls[0];
    this.handleMaterialClick(el);
  }

  initEventListeners() {
    this.initMaterialEventListeners();
    this.initColorEventListeners();
  }

  initMaterialEventListeners() {
    for (let el of this.materialEls) {
      el.addEventListener('click', () => this.handleMaterialClick(el));
    }
  }

  initColorEventListeners() {
    for (let el of this.colorEls) {
      el.addEventListener('click', () => this.handleColorClick(el));
    }
  }

  handleMaterialClick(selectedMaterialEl) {
    this.updateMaterialsUIState(selectedMaterialEl);
    this.updateSelectableColorsUIState(selectedMaterialEl);
  }

  updateMaterialsUIState(selectedMaterialEl) {
    for (let el of this.materialEls) {
      el.removeAttribute('selected');
    }
    selectedMaterialEl.setAttribute('selected', '');
  }

  updateSelectableColorsUIState(selectedMaterialEl) {
    for (let el of this.selectableColorsEls) {
      el.classList.remove('active');
    }
    const selectedColorsEl = this.shadowRoot.querySelector('.' + selectedMaterialEl.id);
    selectedColorsEl.classList.add('active');

    const firstColorEl = selectedColorsEl.querySelector('.color');
    this.handleColorClick(firstColorEl);
  }

  handleColorClick(selectedColorEl) {
    this.updateColorUIState(selectedColorEl);

    const imageSrc = selectedColorEl['image-src'];
    const textureUrl = imageSrc.slice(imageSrc.lastIndexOf('/') + 1);
    this.dispatchSelectEvent(textureUrl);
  }

  updateColorUIState(selectedColorEl) {
    for (let el of this.colorEls) {
      el.removeAttribute('selected');
    }
    selectedColorEl.setAttribute('selected', '');
  }

  dispatchSelectEvent(textureUrl) {
    this.dispatchEvent(
      new CustomEvent('select', {
        detail: { textureUrl: textureUrl },
      })
    );
  }
}
window.customElements.define('texture-selector', TextureSelector);
