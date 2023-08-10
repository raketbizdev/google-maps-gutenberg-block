<?php
/**
 * GMG_Settings Class
 *
 * This class handles the creation and management of plugin settings within the WordPress admin.
 */
class GMG_Settings {
    
  /**
   * Constructor
   *
   * Sets up the necessary action hooks to register the settings and add an options page in the WordPress admin.
   */
  public function __construct() {
      // Add an action to register the plugin's settings.
      add_action('admin_init', array($this, 'register_settings'));
      
      // Add an action to create an options page in the WordPress admin menu.
      add_action('admin_menu', array($this, 'add_options_page'));
  }

  /**
   * Register the settings that the plugin uses.
   */
  public function register_settings() {
      // Register a single setting for the plugin: the Google Maps API key.
      register_setting('gmg_options_group', 'gmg_api_key', 'sanitize_text_field');
  }

  /**
   * Add the options page for the plugin to the WordPress admin menu.
   */
  public function add_options_page() {
      // Add a new options page under the "Settings" menu.
      add_options_page(
          'Google Maps Gutenberg Block Settings', // Page title.
          'Google Maps Gutenberg',                // Menu title.
          'manage_options',                       // Capability required to see the page.
          'gmg-plugin-settings',                  // Unique menu slug.
          array($this, 'settings_page')           // Callback function to render the page.
      );
  }

  /**
   * Render the settings page in the WordPress admin.
   */
  public function settings_page() {
      // Ensure the current user has the required capabilities.
      if (!current_user_can('manage_options')) {
          wp_die(__('You do not have sufficient permissions to access this page.'));
      }
      
      // HTML for the settings page.
      ?>
      <div class="wrap">
          <h2>Google Maps API Settings</h2>
          <form method="post" action="options.php">
              <?php settings_fields('gmg_options_group'); ?>
              <table class="form-table">
                  <tr valign="top">
                      <th scope="row">Google Maps API Key</th>
                      <td><input type="text" name="gmg_api_key" value="<?php echo esc_attr(get_option('gmg_api_key')); ?>" style="width: 50%;" /></td>
                  </tr>
              </table>
              <?php submit_button(); ?>
          </form>
      </div>
      <?php
  }
}
