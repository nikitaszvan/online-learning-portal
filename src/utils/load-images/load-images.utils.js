export const importAllImages = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  // Create the context
  const imagesContext = require.context('../../assets/lecturers', true);
  
  // Export the imported images
  export const images = importAllImages(imagesContext);