import { useEffect, useState } from "react";
import { getGifts } from "../helpers/Gifts";

export const useFetchGifts = (category) => {
  const [images, setimages] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getImages = async () => {
    const gifts = await getGifts(category);
    setimages(gifts);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
