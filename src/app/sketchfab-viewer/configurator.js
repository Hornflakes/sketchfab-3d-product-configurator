class Configurator {
  urlId;
  api;
  nodes = {};
  materials = {};
  textures = {};
  materialIds = {};

  constructor(urlId) {
    this.urlId = urlId;
  }

  init() {
    const iframe = document.querySelector('sketchfab-viewer').shadowRoot.querySelector('iframe');
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
        this.setMaterialIds();
      }
    });
  };

  setMaterialIds() {
    const materialIds = Object.entries(this.materials).reduce((acc, [id, _]) => {
      acc.push(id);
      return acc;
    }, []);
    this.materialIds.backMaterialId = materialIds[0];
    this.materialIds.legsMaterialId = materialIds[1];
    this.materialIds.seatMaterialId = materialIds[2];
  }

  getNodes = () => {
    this.api.getNodeMap((err, nodes) => {
      if (!err) {
        this.groupNodesByMaterial(nodes);
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
