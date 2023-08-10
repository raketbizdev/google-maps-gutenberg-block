# Google Maps Gutenberg Block

A WordPress Gutenberg block plugin to embed Google Maps into your posts and pages.

## Directory Structure

```
.
├── assets
│ ├── build
│ │ ├── block.build.asset.php
│ │ └── block.build.js
│ └── js
│ ├── block
│ │ ├── attributes.js
│ │ ├── edit.js
│ │ ├── index.js
│ │ └── save.js
│ └── block.js
├── google-maps-gutenberg-block.php
├── includes
│ ├── class-block.php
│ └── class-settings.php
├── package-lock.json
├── package.json
└── webpack.config.js
```

## How to Use the Plugin

1. **Installation**:

   - Download or clone this repository to your WordPress plugins directory.
   - Activate the plugin from the WordPress admin dashboard.

2. **Setting Up**:

   - After activation, go to `Settings` > `Google Maps Gutenberg` in your WordPress dashboard.
   - Enter your Google Maps API key and save.

3. **Using the Block**:

   - Create or edit a post or page.
   - Add a new block and search for "Google Map".
   - Configure the block by entering an address and adjusting the map's appearance.

4. **Development**:
   - If you wish to make changes to the plugin, make sure to rebuild assets using `webpack` after any change. The configuration is provided in `webpack.config.js`.
   - Run `npm install` to get the necessary node modules and `npm run build` to compile the assets.

## Notes

Ensure that the Google Maps API key you use has the correct permissions and billing information on the Google Cloud Platform. This block uses the Maps Embed API.

---

Developed by Ruel Nopal
