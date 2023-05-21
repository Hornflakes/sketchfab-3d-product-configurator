class Configurator {
  api;
  nodes = {};
  materials = {};
  textures = {};
  ui;

  constructor(urlId) {
    this.urlId = urlId;
  }

  init() {
    const iframe = document.getElementById('sketchfab-viewer');
    const viewer = new Sketchfab(iframe);

    viewer.init(this.urlId, {
      ui_infos: 0,
      ui_controls: 0,
      graph_optimizer: 0,
      success: (api) => {
        this.api = api;
        this.api.start();
        this.api.addEventListener('viewerready', () => {
          this.setHDTextureQuality();
          this.getTextures();
          this.getMaterials();
          this.getNodes();
        });
      },
    });
  }

  setHDTextureQuality = () => {
    this.api.setTextureQuality('hd');
  };

  getTextures = () => {
    this.api.getTextureList((err, textures) => {
      if (!err) {
        textures.forEach((t) => {
          this.textures[t.name] = t;
        });
      }
    });
  };

  getMaterials = () => {
    this.api.getMaterialList((err, materials) => {
      if (!err) {
        materials.forEach((m) => {
          if (m.name.includes('Material')) return;
          this.materials[m.id] = m;
          this.nodes[m.id] = [];
        });
      }
    });
  };

  getNodes = () => {
    this.api.getNodeMap((err, nodes) => {
      if (!err) {
        this.groupNodesByMaterial(nodes);
        this.initUI();
        this.consoleLog();
      }
    });
  };

  groupNodesByMaterial(nodes) {
    for (const [, node] of Object.entries(nodes)) {
      if (this.nodes[node.materialID]) {
        this.nodes[node.materialID].push(node);
      }
    }
  }

  initUI() {
    this.ui = new UI(this);
    this.ui.init();
  }

  consoleLog() {
    console.log('nodes', this.nodes);
    console.log('nodes.length =', Object.keys(this.nodes).length);
    console.log('materials', this.materials);
    console.log('materials.length =', Object.keys(this.materials).length);
    console.log('textures', this.textures);
    console.log('textures.length =', Object.keys(this.textures).length);
  }

  setMaterialTexture(materialId, textureId) {
    const material = this.materials[materialId];
    const texture = this.textures[textureId];

    material.channels.AlbedoPBR.enable = true;
    material.channels.AlbedoPBR.texture = texture;
    material.channels.AlbedoPBR.color = false;

    this.api.setMaterial(material);
  }

  showNode(id) {
    this.nodes[id].forEach((n) => {
      this.api.show(n.instanceID);
    });
  }

  hideNode(id) {
    this.nodes[id].forEach((n) => {
      this.api.hide(n.instanceID);
    });
  }
}

class UI {
  dropdownHeaderEls;
  materialSelectorEls;
  formEl;
  formWidth = 532;
  scrollBarWidth;

  constructor(configurator) {
    this.configurator = configurator;
  }

  init() {
    this.getScrollbarWidth();
    this.getHTMLElements();
    this.setMaterialIdAttributes();
    this.initEventListeners();
  }

  getScrollbarWidth() {
    let scrollBox = document.createElement('div');
    scrollBox.style.position = 'absolute';
    scrollBox.style.visibility = 'hidden';
    scrollBox.style.overflow = 'scroll';

    document.body.appendChild(scrollBox);
    this.scrollBarWidth = scrollBox.offsetWidth - scrollBox.clientWidth;
    document.body.removeChild(scrollBox);
  }

  getHTMLElements() {
    this.dropdownHeaderEls = document.getElementsByClassName('dropdown-header');
    this.materialSelectorEls = document.getElementsByTagName('material-selector');
    this.formEl = document.querySelector('form');
    this.updateFormElWidth();
  }

  setMaterialIdAttributes() {
    const materialIds = Object.entries(this.configurator.materials).reduce((acc, [id, _]) => {
      acc.push(id);
      return acc;
    }, []);

    const back = document.querySelector('.back');
    back.setAttribute('material-id', materialIds[0]);

    const seat = document.querySelector('.seat');
    seat.setAttribute('material-id', materialIds[2]);
  }

  initEventListeners() {
    this.initDropdownHeaderEventListeners();
    this.initMaterialSelectorEventListeners();
  }

  initDropdownHeaderEventListeners() {
    for (let el of this.dropdownHeaderEls) {
      el.addEventListener('click', () => this.handleDropdownHeaderClick(el));
    }
  }

  handleDropdownHeaderClick(dropdownHeaderEl) {
    this.toggleDropdownEl(dropdownHeaderEl);
    this.updateFormElWidth();
  }

  toggleDropdownEl(dropdownHeaderEl) {
    dropdownHeaderEl.classList.toggle('active');

    const dropdownItemsEl = document.querySelector('.' + dropdownHeaderEl.id);
    dropdownItemsEl.classList.toggle('hidden');
  }

  updateFormElWidth() {
    if (this.formEl.offsetWidth > this.formEl.clientWidth) {
      this.setFormElWidthStyle(this.formWidth + this.scrollBarWidth);
    } else {
      this.setFormElWidthStyle(this.formWidth);
    }
  }

  setFormElWidthStyle(width) {
    this.formEl.style.width = width + 'px';
  }

  initMaterialSelectorEventListeners() {
    for (let el of this.materialSelectorEls) {
      el.addEventListener('select', (e) => this.selectMaterial(e));
    }
  }

  selectMaterial(event) {
    this.configurator.setMaterialTexture(event.detail.materialId, event.detail.textureId);
  }
}

/** INITIALIZING THE CONFIGURATOR */

const urlId = 'be502576c6d044309c5e72ebbb7eafcb';
const configurator = new Configurator(urlId);

configurator.init();
