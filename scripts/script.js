class Configurator {
	api;
	nodes = {};
	materials = {};
	textures = {};

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
				this.consoleLog();
				this.setMaterialTexture('68a46163-dfa6-4e90-bafe-6205327de648', 'c8fcc68855ed4823827f5722c8f5000a')
      }
		});
  }

	groupNodesByMaterial = (nodes) => {
		for (const [,node] of Object.entries(nodes)) {
			if(node.materialID) {
				this.nodes[node.materialID].push(node);
			}
		}
	}

  consoleLog = () => {
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


/** INITIALIZING THE CONFIGURATOR */

const urlId = 'a24448725afb49159cb1bc7afea816ac';
const configurator = new Configurator(urlId);

configurator.init();