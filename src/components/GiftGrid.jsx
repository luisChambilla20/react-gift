import { useFetchGifts } from "../hooks/useFetchGifts";
import GiftItem from "./GiftItem";

export const GiftGrid = ({ category }) => {
  // SE IMPORTA EL HOOK useFetchGifts
  const { images, isLoading } = useFetchGifts(category);

  return (
    <div>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {images.map((image) => (
          // SE ENVIAN LAS PROPIEDADES DE LA IMAGEN
          <GiftItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
