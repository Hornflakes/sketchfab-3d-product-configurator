# sketchfab-3d-product-configurator

This repo contains code for a 3D product configurator using the [Sketchfab Viewer API](https://sketchfab.com/developers/viewer) and a [demo of it](https://hornflakes.github.io/sketchfab-3d-product-configurator/src/app/index.html).

## What does it do?

This configurator enables fully dynamic configuration for any 3D model you can imagine:

- you can change the texture of any part of the model
- you can show/hide any part
- it fetches textures at runtime

Fetching the textures at runtime was chosen because this configurator was built for a model with an extensive collection of high resolution textures. Runtime fetching reduces model load time and GPU load since you don't need to include all the textures inside the model (this can be a problem especially for mobile devices). [Read more about this here](https://help.sketchfab.com/hc/en-us/articles/14493050096913-Workflows-for-configuring-materials-and-textures-in-the-Viewer-API).

## How does it do this?

The configurator itself can be found here:

```
└── src
	└── app
		└── model-viewer
			├── component.js
			└── configurator.js
```

`component.js` contains a Web Component that:

- embeds the 3D model viewer
- is the interface for the configurator

&nbsp;

`configurator.js` contains the `Configurator` class that:

- makes the magic happen ✨
- sets up the data structures needed for manipulating the model
- is the interface for the Viewer API, [you can find its functions here](https://sketchfab.com/developers/viewer/functions)

## What do I need to do to make it work?

\*<sub>due to Sketchfab naming, material means a part of the model</sub>

&nbsp;

All you have to do is provide the component with the following data attributes:

- `data-url-id` - Sketchfab model URL id

- `data-base-textures-url` - base URL from where you fetch the textures

- `data-material-texture-urls`

  - an object that maps material names (can also be subfolders when having the same textures for multiple materials) to an array of URL slugs for the texture images

  Example of the directory structure where you host the textures:

  ```
  ├── upholstery
  │	├── soft-sheep-wool.png
  │	└── cowhide.png
  └── wood
  	├── oak.png
  	└── pine.png
  ```

  Example of the object:

  ```javascript
  {
    upholstery: ['soft-sheep-wool.png', 'cowhide.png'],
    wood: ['oak.png', 'pine.png']
  }
  ```

- `data-selected-material-texture-url`

  - an object that maps the **model** material name to the texture url
  - whenever this attribute changes, the model updates with the new texture

  Example of the object:

  ```javascript
  {
    seat: 'soft-sheep-wool.png',
  }
  ```

- `data-toggled-material`

  - an object that maps the **model** material name to its visibility status
  - whenever this attribute changes, the model updates, showing or hiding the respective material

  Example of the object:

  ```javascript
  {
    seat: false,
  }
  ```

&nbsp;

You can find the code that makes the demo work in the rest of the project (a good starting point is `src/app/index.js`).
