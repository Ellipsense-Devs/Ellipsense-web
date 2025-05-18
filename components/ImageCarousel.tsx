"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  tiltAngle?: number; // Angle in degrees for the tilt (e.g., 5 for slight right tilt)
  slideDuration?: number; // Duration for one full slide cycle in seconds
  imageHeight?: number; // Height of each image in the carousel in pixels
  imageWidth?: number; // Width of each image in the carousel
  gap?: number; // Gap between images in pixels
  visibleHeight?: string; // The visible height of the carousel container (e.g., "500px", "80vh")
  containerWidth?: string; // The width of the carousel container
}

const ImageCarousel = ({
  images,
  tiltAngle = 7, // Default tilt to 7 degrees to the right
  slideDuration = 30, // Default duration 30 seconds for a full loop
  imageHeight = 180, // Default height for carousel images
  imageWidth = 280, // Default width for carousel images
  gap = 16, // Default gap 16px (4 units in Tailwind)
  visibleHeight = "600px",
  containerWidth = "320px",
}: ImageCarouselProps) => {
  if (!images || images.length === 0) {
    return null;
  }

  const totalImageHeightWithGap = imageHeight + gap;
  const totalContentHeight = images.length * totalImageHeightWithGap;

  // We need at least enough images to fill the visible height plus one more set for seamless looping
  const repeatedImages = [];
  const currentHeight = 0;
  const visibleHeightPx = parseInt(visibleHeight); // Assuming visibleHeight is in px for calculation

  // Create a long enough list of images for seamless looping
  // Ensure at least two full sets of images if the total content is less than visible height
  const numSetsToRepeat = Math.max(
    2,
    Math.ceil((visibleHeightPx * 2) / totalContentHeight) + 1
  );
  for (let i = 0; i < numSetsToRepeat; i++) {
    repeatedImages.push(...images);
  }
  const animationContentHeight =
    repeatedImages.length * totalImageHeightWithGap;

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-0" // z-0 to be behind main image
      style={{ perspective: "1000px" }} // Needed for 3D transforms like rotate
    >
      <motion.div
        className="relative origin-center" // Ensure rotation happens around the center
        style={{
          transform: `rotate(${tiltAngle}deg)`,
          width: containerWidth,
          height: visibleHeight,
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden" // Mask for the sliding images
        >
          <motion.div
            className="absolute top-0 left-0 flex flex-col"
            style={{ gap: `${gap}px` }}
            animate={{
              y: [0, -animationContentHeight / 2], // Animate to half the duplicated content height
            }}
            transition={{
              duration:
                slideDuration *
                (animationContentHeight / (2 * totalContentHeight)), // Adjust duration based on repeated content
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {repeatedImages.map((src, index) => (
              <div
                key={`carousel-${index}-${src}`} // More unique key
                className="bg-white/30 backdrop-blur-md p-2 rounded-lg shadow-xl"
                style={{
                  width: `${imageWidth}px`,
                  height: `${imageHeight}px`,
                }}
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  width={imageWidth - 16} // Account for padding
                  height={imageHeight - 16} // Account for padding
                  className="object-cover rounded-md w-full h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
