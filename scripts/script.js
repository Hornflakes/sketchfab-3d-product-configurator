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
		const iframe = document.getElementById('sketchfab-viewer')
		const viewer = new Sketchfab(iframe);

		viewer.init(this.urlId, {
			ui_infos: 0,
			ui_controls: 0,
			graph_optimizer: 0,
			success: (api) => {
				this.api = api;
				this.api.start();
				this.api.addEventListener(
					"viewerready",
					() => {
						this.getTextures();
						this.getMaterials();
						this.getNodes();
					}
				);
			}
		});
	}

  getTextures = () => {
    this.api.getTextureList((err, textures) => {
			if (!err) {
				textures.forEach((t) => {
					this.textures[t.uid] = t;
				});
			}
    });
  }

	getMaterials = () => {
		this.api.getMaterialList(
			(err, materials) => {
				if (!err) {
					materials.forEach((m) => {
						this.materials[m.id] = m;
						this.nodes[m.id] = [];
					})
				}
		});
	}

  getNodes = () => {
    this.api.getNodeMap((err, nodes) => {
      if(!err) {
				this.groupNodesByMaterial(nodes);
        this.initUI();

				this.consoleLog();
      }
		});
  }

	groupNodesByMaterial(nodes) {
		for (const [,node] of Object.entries(nodes)) {
			if(node.materialID) {
				this.nodes[node.materialID].push(node);
			}
		}
	}

  initUI() {
    this.ui = new UI(this);
    this.ui.init();
  }

  consoleLog() {
    console.log('nodes -->', this.nodes);
    console.log('materials -->', this.materials);
    console.log('textures -->', this.textures);
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
		})
	}

	hideNode(id) {
		this.nodes[id].forEach((n) => {
			this.api.hide(n.instanceID);
		})
	}
}

class UI {
  dropdownHeaderEls;
  materialEls;
  selectableColorsEls;
  colorEls;

	constructor(configurator) {
		this.configurator = configurator;
	}

  init() {
    this.getHTMLElements();
    this.initDropdownHeaderEventListeners();
    this.initMaterialEventListeners();
    this.initColorEventListeners();
  }

  getHTMLElements() {
    this.dropdownHeaderEls = document.getElementsByClassName('dropdown-header');
    this.materialEls = document.getElementsByClassName('material');
    this.selectableColorsEls = document.getElementsByClassName('colors');
    this.colorEls = document.getElementsByClassName('color');
  }

  initDropdownHeaderEventListeners() {
    for(let el of this.dropdownHeaderEls) {
      el.addEventListener("click", () => this.onClickDropdownHeader(el));
    }
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

  onClickDropdownHeader(dropdownHeaderEl) {
    const dropdownArrow = dropdownHeaderEl.getElementsByClassName('chevron')[0];
    this.animateDropdownArrow(dropdownArrow);

    const dropdownItemsEl = document.getElementsByClassName(dropdownHeaderEl.id)[0];
    dropdownItemsEl.classList.toggle('hide-dropdown');
  }

  animateDropdownArrow(el) {
    el.classList.toggle('rotate-180');
  }

  onSelectMaterial(selectedMaterialEl) {
    this.updateMaterialsUIState(selectedMaterialEl);
    this.updateSelectableColorsUIState(selectedMaterialEl);
  }

  updateMaterialsUIState(selectedMaterialEl) {
    for(let el of this.materialEls) {
      el.classList.remove('selected');
    }
    selectedMaterialEl.classList.add('selected');
  }

  updateSelectableColorsUIState(selectedMaterialEl) {
    for(let el of this.selectableColorsEls) {
      el.classList.remove('active');
    }
    const selectedColorsEl = document.getElementsByClassName(selectedMaterialEl.id)[0];
    selectedColorsEl.classList.add('active');

    const firstColorEl = selectedColorsEl.getElementsByClassName('color')[0];
    this.onSelectColor(firstColorEl);
  }
 
  onSelectColor(selectedColorEl) {
    this.updateColorUIState(selectedColorEl);
  }

  updateColorUIState(selectedColorEl) {
    for(let el of this.colorEls) {
      el.classList.remove('selected');
    }
    selectedColorEl.classList.add('selected');

    this.updateConfigurator();
  }

  // this will be changed with the actual logic, right now it's just random
  updateConfigurator() {
    const textureIds = Object.entries(this.configurator.textures)
      .reduce((acc, [id, _]) => {
        acc.push(id); 
        return acc;
      }, 
      []
    );

    const materialIds = Object.entries(this.configurator.materials)
      .reduce((acc, [id, _]) => {
        acc.push(id);
        return acc;
      },
      []
    );

    // changes the back of the chair with a random texture
    this.configurator.setMaterialTexture(materialIds[2], textureIds[Math.floor(Math.random() * textureIds.length)]);
  }
}


/** INITIALIZING THE CONFIGURATOR */

const urlId = 'a24448725afb49159cb1bc7afea816ac';
const configurator = new Configurator(urlId);

configurator.init();