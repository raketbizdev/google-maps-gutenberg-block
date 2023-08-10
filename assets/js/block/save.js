// This component determines how the block will be saved in the post_content.

const SaveComponent = (props) => {
  // Destructure the required attributes from the block's properties.
  const {
    attributes: { address, width, height, zoom, widthUnit, heightUnit },
  } = props;

  // Check if the global configuration for Google Maps exists and has the API key set.
  const apiKeyExists = typeof gmgGlobal !== "undefined" && gmgGlobal.apiKey;

  // If there's no address provided or if the API key doesn't exist,
  // don't render anything for this block.
  if (!address || !apiKeyExists) {
    return null;
  }

  // Return the iframe rendering the Google Map for the given address and configurations.
  return (
    <iframe
      // Construct the URL for the Google Maps iframe based on the provided address and API key.
      src={`https://www.google.com/maps/embed/v1/place?key=${
        gmgGlobal.apiKey
      }&q=${encodeURI(address)}&zoom=${zoom}`}
      // Set the width and height using the respective attributes and their units.
      width={`${width}${widthUnit}`}
      height={`${height}${heightUnit}`}
      // Style properties for the iframe to ensure it fits well within the block constraints.
      style={{ maxWidth: "100%", border: "none" }}
    ></iframe>
  );
};

// Export the SaveComponent so it can be used in the block registration.
export default SaveComponent;
