import React, { useState } from "react";

const skins = [
  { id: 1, name: "Классика", color: "bg-blue-600" },
  { id: 2, name: "Неон", color: "bg-purple-600" },
  { id: 3, name: "Лава", color: "bg-red-600" },
  { id: 4, name: "Тёмный рыцарь", color: "bg-gray-800" }
];

const Shop = ({ setSkin }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <h2 className="text-lg font-bold mb-2 text-center">🎨 Магазин</h2>
      <div className="grid grid-cols-2 gap-2">
        {skins.map((skin) => (
          <button
            key={skin.id}
            className={`p-2 rounded-lg text-white ${skin.color}`}
            onClick={() => setSkin(skin.color)}
          >
            {skin.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
