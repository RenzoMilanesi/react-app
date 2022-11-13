/* -------------- BACK-END -------------- */
import productos from "../data/data.js";

function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
}

export function getSingleItem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos[1]);
    }, 2000);
  });
}

export default getItems;