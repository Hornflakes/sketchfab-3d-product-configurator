class Configurator {
  modelUrlId;
  baseTexturesUrl;
  api;
  textureUidMap = {};
  materials = {};
  nodes = {};
  materialIdMap;

  constructor(modelUrlId, baseTexturesUrl) {
    this.modelUrlId = modelUrlId;
    this.baseTexturesUrl = baseTexturesUrl;
  }

  init(materialTextureUrls) {
    const iframe = document.querySelector('model-viewer').shadowRoot.querySelector('iframe');
    const viewer = new Sketchfab(iframe);

    viewer.init(this.modelUrlId, {
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

          m.channels.AlbedoPBR.enable = true;
          m.channels.Opacity.enable = true;

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

  setMaterialTexture(materialName, textureUrl) {
    const materialId = this.materialIdMap[materialName];
    const material = this.materials[materialId];

    this.api.getTextureList((err, textures) => {
      if (!err) {
        const texture = textures.find((t) => t.uid === this.textureUidMap[textureUrl]);

        material.channels.AlbedoPBR.texture = texture;
        material.channels.AlbedoPBR.color = false;

        this.api.setMaterial(material);
      }
    });
  }

  showMaterial(materialName) {
    const materialId = this.materialIdMap[materialName];
    const material = this.materials[materialId];

    material.channels.Opacity.factor = 1;
    this.api.setMaterial(material);
  }

  hideMaterial(materialName) {
    const materialId = this.materialIdMap[materialName];
    const material = this.materials[materialId];

    material.channels.Opacity.factor = 0;
    this.api.setMaterial(material);
  }

  getNode(materialName) {
    const materialId = this.materialIdMap[materialName];
    return this.nodes[materialId];
  }
}
