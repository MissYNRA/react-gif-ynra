import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//Para exponer los componentes del indice

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    // const newCategories = [...categories, "Naruto"];
    // setCategories(newCategories);

    // setCategories((categories) => [...categories, "Naruto"]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
