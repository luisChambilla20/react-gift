import { useState } from "react";
import { AddCategory, GiftGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  // RECIBE UNA NUEVA CATEGORIA Y LA AGREGA AL INICIO DEL ARREGLO
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Lista de busquedas */}
      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};
