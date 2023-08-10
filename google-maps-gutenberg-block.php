<?php
/**
 * Plugin Name: Google Maps Gutenberg Block
 * Description: A custom Gutenberg block to embed Google Maps.
 * Version: 1.0.0
 * Author: Ruel Nopal
 * Author URI: https://rnopal.com
 * License: GPL v2 or later
 */

// Prevent direct access to the file, ensuring it is accessed only through WordPress.
if ( ! defined( 'ABSPATH' ) ) {
  exit; // Exit if accessed directly.
}

// Define constants for the plugin's directory path and URL for easier access throughout the plugin.
define('GMG_PATH', plugin_dir_path(__FILE__));  // Returns the server path to the directory of the current file.
define('GMG_URL', plugin_dir_url(__FILE__));    // Returns the full URL of the directory of the current file.

// Include the necessary class files.
require_once GMG_PATH . 'includes/class-settings.php';  // Include the settings class responsible for the plugin's settings in the WP admin.
require_once GMG_PATH . 'includes/class-block.php';     // Include the block class responsible for handling the Gutenberg block.

// Initialize the classes.
// This ensures that the settings and blocks are set up as soon as the plugin loads.
new GMG_Settings();  // Initialize the settings class to handle the plugin settings in WP admin.
new GMG_Block();     // Initialize the block class to register and handle the Gutenberg block.
