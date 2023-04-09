class MaterialSelector extends HTMLElement {
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
          <b>Materiale</b>
        </h2>

        <div class="images">
          <selectable-image
            id="angel"
            image-src="assets/upholstery/Angel 2746.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="baloo"
            image-src="assets/upholstery/Baloo 2073.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="bunny"
            image-src="assets/upholstery/Bunny 203.01.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="casablanca"
            image-src="assets/upholstery/Casablanca 2312.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="dream-velvet"
            image-src="assets/upholstery/Dream Velvet 202 39.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="eureka"
            image-src="assets/upholstery/Eureka 2124.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="granada"
            image-src="assets/upholstery/Granada 2721.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="hamilton"
            image-src="assets/upholstery/Hamilton 2804.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="hygge"
            image-src="assets/upholstery/Hygge 2539.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="kenia"
            image-src="assets/upholstery/Kenia 702.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="kongo"
            image-src="assets/upholstery/Kongo 721.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="magic-velvet"
            image-src="assets/upholstery/Magic Velvet 2216.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="prestige"
            image-src="assets/upholstery/Prestige 2762.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="riviera"
            image-src="assets/upholstery/Riviera 36.JPG"
            class="material"
          ></selectable-image>

          <selectable-image
            id="venus-velvet"
            image-src="assets/upholstery/Venus Velvet 2919.JPG"
            class="material"
          ></selectable-image>
        </div>
      </section>

      <section>
        <h2>
          <b>Culori</b>
        </h2>

        <div class="images colors angel active">
          <selectable-image
            image-src="assets/upholstery/Angel 2746.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Angel 2748.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors baloo">
          <selectable-image
            image-src="assets/upholstery/Baloo 2073.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Baloo 2074.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Baloo 2084.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors bunny">
          <selectable-image
            image-src="assets/upholstery/Bunny 203.01.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors casablanca">
          <selectable-image
            image-src="assets/upholstery/Casablanca 2312.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Casablanca 2316.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors dream-velvet">
          <selectable-image
            image-src="assets/upholstery/Dream Velvet 202 39.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors eureka">
          <selectable-image
            image-src="assets/upholstery/Eureka 2124.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2131.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2134.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2143.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2144.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2145.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2147.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Eureka 2148.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors granada">
          <selectable-image
            image-src="assets/upholstery/Granada 2721.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Granada 2722.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Granada 2728.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Granada 2735.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors hamilton">
          <selectable-image
            image-src="assets/upholstery/Hamilton 2804.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Hamilton 2805.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Hamilton 2807.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Hamilton 2811.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Hamilton 2816.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Hamilton 2819.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors hygge">
          <selectable-image
            image-src="assets/upholstery/Hygge 2539.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors kenia">
          <selectable-image
            image-src="assets/upholstery/Kenia 702.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Kenia 795.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors kongo">
          <selectable-image
            image-src="assets/upholstery/Kongo 721.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Kongo 732.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Kongo 735.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Kongo 736.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors magic-velvet">
          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2216.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2217.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2219.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2225.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2226.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2231.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2234.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2248.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2253.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Magic Velvet 2258.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors prestige">
          <selectable-image
            image-src="assets/upholstery/Prestige 2762.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2764.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2765.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2766.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2767.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2768.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2770.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2771.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2772.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2773.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2774.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2775.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2776.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2777.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Prestige 2778.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors riviera">
          <selectable-image
            image-src="assets/upholstery/Riviera 36.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Riviera 41.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Riviera 51.JPG"
            class="color"
          ></selectable-image>

          <selectable-image
            image-src="assets/upholstery/Riviera 56.JPG"
            class="color"
          ></selectable-image>
        </div>

        <div class="images colors venus-velvet">
          <selectable-image
            image-src="assets/upholstery/Venus Velvet 2919.JPG"
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
    return ['material-id', 'checkmark-src'];;
  }

  attributeChangedCallback(attributeName, oldValue, newValue) {
    if (oldValue === newValue) return;
    this[attributeName] = newValue;
  }

  connectedCallback() {
    this.attachShadow({
      mode: 'open'
    });
    this.setImagesCheckmarkSource();
    this.shadowRoot.appendChild(this.template.content);
    this.shadowRoot.append(this.style);
    
    this.selectFirstMaterial();
    this.initEventListeners();
  }

  setImagesCheckmarkSource() {
    const selectableImageEls = this.template.content.querySelectorAll('selectable-image')
    for(let el of selectableImageEls) {
      el.setAttribute('checkmark-src', this['checkmark-src'])
    }
  }

  selectFirstMaterial() {
      const el = this.materialEls[0];
      this.onSelectMaterial(el);
  }

  initEventListeners() {
    this.initMaterialEventListeners();
    this.initColorEventListeners();
  }

  initMaterialEventListeners() {
    for(let el of this.materialEls) {
      el.addEventListener("click", () => this.onSelectMaterial(el));
    }
  }

  initColorEventListeners() {
    for(let el of this.colorEls) {
      el.addEventListener("click", () => this.onSelectColor(el));
    }
  }

  onSelectMaterial(selectedMaterialEl) {
    this.updateMaterialsUIState(selectedMaterialEl);
    this.updateSelectableColorsUIState(selectedMaterialEl);
  }

  updateMaterialsUIState(selectedMaterialEl) {
    for(let el of this.materialEls) {
      el.removeAttribute('selected');
    }
    selectedMaterialEl.setAttribute('selected', '');
  }

  updateSelectableColorsUIState(selectedMaterialEl) {
    for(let el of this.selectableColorsEls) {
      el.classList.remove('active');
    }
    const selectedColorsEl = this.shadowRoot.querySelector('.' + selectedMaterialEl.id);
    selectedColorsEl.classList.add('active');

    const firstColorEl = selectedColorsEl.querySelector('.color');
    this.onSelectColor(firstColorEl);
  }
 
  onSelectColor(selectedColorEl) {
    this.updateColorUIState(selectedColorEl);
    this.dispatchSelectEvent();
  }

  updateColorUIState(selectedColorEl) {
    for(let el of this.colorEls) {
      el.removeAttribute('selected');
    }
    selectedColorEl.setAttribute('selected', '');
  }

  dispatchSelectEvent() {
    this.dispatchEvent(new CustomEvent("select"));
  }
}
window.customElements.define('material-selector', MaterialSelector);