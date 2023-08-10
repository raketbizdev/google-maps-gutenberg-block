// Importing the block's attributes, edit and save components.
import attributes from "./attributes";
import edit from "./edit";
import save from "./save";

// Configuration object for the custom Gutenberg block.
const blockConfig = {
  // The display name of the block in the Gutenberg editor.
  title: "Google Map",

  // The icon to be used for this block in the editor's block inserter.
  // "location" is one of the default WordPress dashicons.
  icon: "location",

  // Category in which the block will appear in the editor's block inserter.
  // "common" is one of the default categories.
  category: "common",

  // Attributes schema which dictates the shape and type of data this block can store.
  attributes,

  // The edit function is for the block's editor UI in the Gutenberg editor.
  edit,

  // The save function dictates how the block's content will be saved to the post_content.
  save,
};

// Export the block configuration so it can be registered with Gutenberg.
export default blockConfig;
