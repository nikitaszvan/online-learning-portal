export const importAllImages = (requireContext) => {
    let images = {};
    requireContext.keys().forEach((item) => {
      images[item.replace('./', '')] = requireContext(item);
    });
    return images;
  };
  
  // Create the context
  const lecturerImagesContext = require.context('../../assets/lecturers', true);

  const imagesContext = require.context('../../assets', true);
  
  // Export the imported images
  export const lecturerImages = importAllImages(lecturerImagesContext);
  export const images = importAllImages(imagesContext);