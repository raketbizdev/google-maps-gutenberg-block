<?php
/**
 * GMG_Block Class
 *
 * This class handles the registration and asset enqueuing for the Google Maps Gutenberg block.
 */
class GMG_Block {
    
  /**
   * Constructor
   *
   * Sets up the necessary action hooks to enqueue block assets in the Gutenberg editor.
   */
  public function __construct() {
      // Add an action to enqueue the block assets when the Gutenberg editor is loaded.
      add_action('enqueue_block_editor_assets', array($this, 'enqueue_editor_assets'));
  }

  /**
   * Enqueue the block's assets (JavaScript and CSS) for the editor.
   */
  public function enqueue_editor_assets() {
      // Enqueue the main block JS file.
      wp_enqueue_script(
          'gmg-block', // Unique handle for the script.
          GMG_URL . 'assets/build/block.build.js', // Path to the block's main JS file.
          array('wp-blocks', 'wp-element', 'wp-editor'), // Dependencies: WordPress blocks, React and the block editor.
          '1.0', // Version number.
          true  // Load in the footer.
      );

      // Retrieve the Google Maps API key from the WordPress options.
      $api_key = get_option('gmg_api_key');

      // Uncomment this section if you want to show an error if the API key is missing.
      // if (!$api_key) {
      //     wp_die(__('API key for Google Maps is missing. Please set it in the plugin settings.'));
      // }

      // Localize the script: This allows you to make server-side data available to your script on the client side.
      wp_localize_script(
          'gmg-block',      // The handle of the script we're attaching the data to.
          'gmgGlobal',      // The name of the global JavaScript variable that will hold this data.
          array('apiKey' => $api_key) // The data itself.
      );
  }
}

