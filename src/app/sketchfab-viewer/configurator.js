class Configurator {
  sketchfabUrlId;
  baseTexturesUrl;
  api;
  textureUidMap = {};
  materials = {};
  nodes = {};
  materialIdMap;

  constructor(sketchfabUrlId, baseTexturesUrl) {
    this.sketchfabUrlId = sketchfabUrlId;
    this.baseTexturesUrl = baseTexturesUrl;
  }

  init(materialTextureUrls) {
    const iframe = document.querySelector('sketchfab-viewer').shadowRoot.querySelector('iframe');
    const viewer = new Sketchfab(iframe);

    viewer.init(this.sketchfabUrlId, {
      ui_infos: 0,
      ui_controls: 0,
      graph_optimizer: 0,
      success: (api) => {
        this.api = api;
        this.api.start();
        this.api.addEventListener('viewerready', () => {
          this.setHDTextureQuality();
          this.setTextures(materialTextureUrls);
          this.getMaterials();
          this.getNodes();
        });
      },
    });
  }

  setHDTextureQuality = () => {
    this.api.setTextureQuality('hd');
  };

  setTextures(materialTextureUrls) {
    const requested = {};

    Object.entries(materialTextureUrls).forEach(([materialName, textureUrls]) => {
      textureUrls.forEach((textureUrl) => {
        if (requested[textureUrl]) return;

        requested[textureUrl] = true;
        this.api.addTexture(`${this.baseTexturesUrl}/${materialName}/${textureUrl}`, (err, uid) => {
          if (!err) {
            this.textureUidMap[textureUrl] = uid;
          }
        });
      });
    });
  }

  getMaterials = () => {
    this.api.getMaterialList((err, materials) => {
      if (!err) {
        materials.forEach((m) => {
          if (m.name.includes('Material')) return;
          this.materials[m.id] = m;
          this.nodes[m.id] = [];
        });
        this.setMaterialIdMap();
      }
    });
  };

  setMaterialIdMap() {
    this.materialIdMap = Object.entries(this.materials).reduce((acc, [id, material]) => {
      acc[material.name] = id;
      return acc;
    }, {});
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
    console.log('textureUidMap', this.textureUidMap);
    console.log('materialIdMap', this.materialIdMap);
  }

  setMaterialTexture(materialName, textureUrl) {
    const materialId = this.materialIdMap[materialName];
    const material = this.materials[materialId];

    this.api.getTextureList((err, textures) => {
      if (!err) {
        const texture = textures.find((t) => t.uid === this.textureUidMap[textureUrl]);

        material.channels.AlbedoPBR.enable = true;
        material.channels.AlbedoPBR.texture = texture;
        material.channels.AlbedoPBR.color = false;

        this.api.setMaterial(material);
      }
    });
  }

  showNode(materialName) {
    const node = this.getNode(materialName);
    node.forEach((n) => {
      this.api.show(n.instanceID);
    });
  }

  hideNode(materialName) {
    const node = this.getNode(materialName);
    node.forEach((n) => {
      this.api.hide(n.instanceID);
    });
  }

  getNode(materialName) {
    const materialId = this.materialIdMap[materialName];
    return this.nodes[materialId];
  }
}
