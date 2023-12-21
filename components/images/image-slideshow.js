import { useEffect, useState } from "react";
import Image from "next/image";

import karinaImg from "@/assets/karina.jpg";
import WinterImg from "@/assets/winter.jpg";
import JijelImg from "@/assets/Jijel.jpg";
import NingNingImg from "@/assets/NingNing.jpg";
import classes from "./image-slideshow.module.css";

const images = [
  { image: karinaImg, alt: "Karina" },
  { image: WinterImg, alt: "Winter" },
  { image: JijelImg, alt: "Jijle" },
  { image: NingNingImg, alt: "NingNing" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
