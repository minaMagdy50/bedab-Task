
# React Image Gallery

A simple and responsive image gallery built with React. The gallery displays images in a grid layout with three columns, and it includes a lightbox feature for viewing larger versions of the images. Users can navigate between images using next and previous buttons or keyboard arrows.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Responsive layout**: The gallery adjusts automatically to different screen sizes.
- **Lightbox**: Users can click an image to open a larger version in a lightbox.
- **Navigation**: Users can navigate through the images using next/prev buttons or the keyboard (left/right arrow keys).
- **Lazy loading**: Images are lazily loaded for better performance.
- **CSS animations**: Subtle image hover effects and lightbox animations for a smooth user experience.

## Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/react-image-gallery.git](https://github.com/minaMagdy50/bedab-Task.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd react-image-gallery
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

## Usage

To add or modify the gallery images:

1. Place your image files in the `src/assets/gallery` directory.
2. Import the images at the top of the `ImageGallery.js` file:
   ```javascript
   import image1 from "../assets/gallery/your-image-1.jpg";
   import image2 from "../assets/gallery/your-image-2.jpg";
   // Add or remove images as needed
   ```

3. Update the `images` array in the `ImageGallery` component:
   ```javascript
   const images = [
     image1,
     image2,
     // Add or rearrange your images
   ];
   ```

## Customization

### Change Number of Columns
You can easily change the number of columns in the gallery by modifying the `getColumns` function:
```javascript
const columns = getColumns(images, 3);  // Change 3 to the desired number of columns
```

### Modify Lightbox Styles
You can customize the lightbox and gallery appearance by editing the provided CSS styles in the `ImageGallery.css` file. For example, to change the lightbox background color, update the `.lightbox` class:
```css
.lightbox {
  background-color: rgba(0, 0, 0, 0.9);  // Adjust the opacity or color
}
```

### Keyboard Navigation
The lightbox supports keyboard navigation (arrow keys for next/prev and escape key to close). To disable or modify this behavior, update the `handleKeyDown` function:
```javascript
const handleKeyDown = (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  } else if (e.key === "ArrowRight") {
    handleNext(e);
  } else if (e.key === "ArrowLeft") {
    handlePrev(e);
  }
};
```

## Contributing

Contributions are welcome! Feel free to open a pull request or submit issues on GitHub if you find bugs or have suggestions for new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
