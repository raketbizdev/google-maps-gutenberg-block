const attributes = {
  // Address attribute: Represents the location to be shown on the map.
  // It's a string type and defaults to an empty string if not provided.
  address: {
    type: "string",
    default: "",
  },

  // Width attribute: Defines the width of the map embed.
  // It's a number type and defaults to 100 if not provided.
  width: {
    type: "number",
    default: 100,
  },

  // WidthUnit attribute: Defines the unit used for the width of the map embed (e.g., px, %, etc.).
  // It's a string type and defaults to "px" if not provided.
  widthUnit: {
    type: "string",
    default: "px",
  },

  // Height attribute: Defines the height of the map embed.
  // It's a number type and defaults to 300 if not provided.
  height: {
    type: "number",
    default: 300,
  },

  // HeightUnit attribute: Defines the unit used for the height of the map embed (e.g., px, %, etc.).
  // It's a string type and defaults to "px" if not provided.
  heightUnit: {
    type: "string",
    default: "px",
  },

  // Zoom attribute: Represents the zoom level for the map.
  // It's a number type. The value ranges typically from 1 (world view) to 21 (building view).
  // Defaults to 10 if not provided.
  zoom: {
    type: "number",
    default: 10,
  },
};

export default attributes;
