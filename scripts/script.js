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
        this.initUserInterface();

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

  initUserInterface() {
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
  form;

	constructor(configurator) {
		this.configurator = configurator;
	}

  init() {
    this.form = document.querySelector("form");
    this.render();
    this.initSelects();
  }

  render() {
    let optionsHtml = '';
    for (const [id, texture] of Object.entries(this.configurator.textures)) {
      optionsHtml += `<option value="${id}">${texture.name}</option>`
    }

    let selectHtml = '';
    for (const [id, material] of Object.entries(this.configurator.materials)) {
      selectHtml += `<div class="select-card"> <label for="${material.name}">${material.name}</label> <div class="select-wrapper"> <select name="${material.name}" id=${id}>${optionsHtml}</select> </div> </div>`
    }
    
    this.form.innerHTML = selectHtml;
  }

  initSelects() {
    const selects = document.querySelectorAll("select");
    selects.forEach((s) => {
      this.selectDefaultValue(s);
      this.initEventListener(s);
    });
  }

  selectDefaultValue(htmlSelectEl) {
    htmlSelectEl.value = this.configurator.materials[htmlSelectEl.id].channels.AlbedoPBR.texture.uid;
  }

  initEventListener(htmlSelectEl) {
    htmlSelectEl.addEventListener("change", (e) => {
      e.preventDefault();
      this.onSelect(htmlSelectEl);
    });
  }

  onSelect(htmlSelectEl) {
    const options = htmlSelectEl.options;
    const materialId = htmlSelectEl.id;
    const textureId = options[options.selectedIndex].value;

    this.configurator.setMaterialTexture(materialId, textureId);
  }
}


/** INITIALIZING THE CONFIGURATOR */

const urlId = 'a24448725afb49159cb1bc7afea816ac';
const configurator = new Configurator(urlId);

configurator.init();