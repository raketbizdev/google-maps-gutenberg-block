import {
  TextControl,
  PanelBody,
  Notice,
  RangeControl,
  SelectControl,
} from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

const EditComponent = (props) => {
  // Destructure the required attributes and setAttributes function from the received props.
  const {
    attributes: { address, width, height, zoom, widthUnit, heightUnit },
    setAttributes,
  } = props;

  // Check if the global variable for the Google Maps API key exists and is set.
  const apiKeyExists = gmgGlobal && gmgGlobal.apiKey && gmgGlobal.apiKey !== "";

  return (
    <div>
      {/* The controls available in the Gutenberg side panel when the block is selected */}
      <InspectorControls>
        <PanelBody title="Google Maps Settings">
          {/* Text control to input the address */}
          <TextControl
            label="Address"
            value={address}
            onChange={(value) => setAttributes({ address: value })}
          />

          {/* Range control to adjust the width based on the selected unit (px or %) */}
          <RangeControl
            label={`Width (${widthUnit})`}
            value={width}
            onChange={(value) => setAttributes({ width: value })}
            min={10}
            max={widthUnit === "%" ? 100 : 1000}
          />

          {/* Dropdown select control to pick the width's unit (either pixels or percent) */}
          <SelectControl
            label="Width Unit"
            value={widthUnit}
            options={[
              { label: "Pixels", value: "px" },
              { label: "Percent", value: "%" },
            ]}
            onChange={(value) => setAttributes({ widthUnit: value })}
          />

          {/* Range control to adjust the height */}
          <RangeControl
            label={`Height (${heightUnit})`}
            value={height}
            onChange={(value) => setAttributes({ height: value })}
            min={100}
            max={1000}
          />

          {/* Dropdown select control to pick the height's unit (either pixels or percent) */}
          <SelectControl
            label="Height Unit"
            value={heightUnit}
            options={[
              { label: "Pixels", value: "px" },
              { label: "Percent", value: "%" },
            ]}
            onChange={(value) => setAttributes({ heightUnit: value })}
          />

          {/* Range control to adjust the zoom level of the map */}
          <RangeControl
            label="Zoom Level"
            value={zoom}
            onChange={(value) => setAttributes({ zoom: value })}
            min={1}
            max={21}
            help="Zoom level of the map. Ranges from 1 (world view) to 21 (building view)."
          />
        </PanelBody>
      </InspectorControls>

      {/* Conditionally render the map or a notice based on the presence of the address and API key */}
      {address && apiKeyExists ? (
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=${
            gmgGlobal.apiKey
          }&q=${encodeURI(address)}&zoom=${zoom}`}
          width={`${width}${widthUnit}`}
          height={`${height}${heightUnit}`}
          style={{ maxWidth: "100%", border: "none" }}
        ></iframe>
      ) : (
        <Notice status="warning" isDismissible={false}>
          {apiKeyExists
            ? "Please enter an address to display the map."
            : "API key for Google Maps is missing. Please set it in the plugin settings."}
        </Notice>
      )}
    </div>
  );
};

export default EditComponent;
