import { useEffect, useState } from "react";
import styles from "./ImageAnimation.module.scss";
import { motion } from "framer-motion";

interface ImageAnimation {
  imgArray: string[];
  animationInterval: number;
}

const ImageAnimation = ({ imgArray, animationInterval }: ImageAnimation) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imgArray.length - 1 ? 0 : prevIndex + 1
      );
    }, animationInterval);

    return () => clearInterval(interval);
  }, [imgArray.length]);

  return (
    <div className={styles.imageContainer}>
      {imgArray.map((src, index) => (
        <motion.img
          key={`image-${index}`}
          style={{
            opacity: currentImageIndex === index ? 1 : 0,
            position: "absolute",
            transition: "opacity 1s ease-in-out",
          }}
          src={src}
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
};

export default ImageAnimation;
