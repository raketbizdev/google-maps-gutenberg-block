// Import the necessary module to register a new Gutenberg block.
import { registerBlockType } from "@wordpress/blocks";

// Import the block configuration from your block's index file.
// This configuration defines the block's behavior, attributes, and how it is edited and saved.
import blockConfig from "./block/index";

// Register the block in Gutenberg with a unique namespace and block name.
// The first parameter is the name of the block, prefixed by the namespace (in this case, 'gmg').
// The second parameter is the configuration for the block, which has been imported from blockConfig.
registerBlockType("gmg/google-map", blockConfig);
