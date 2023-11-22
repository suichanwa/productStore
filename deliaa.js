const fetchDataOne = () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      displayFourCategories(data);
      displayImagesForSpecialBoxes(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
};

const displayFourCategories = (data) => {
  const uniqueCategories = new Set();
  const imageClasses = ["IMAGE-15", "IMAGE-16", "IMAGE-17", "IMAGE-18"];

  for (let i = 0; i < imageClasses.length; i++) {
    let product;
    do {
      product = data[Math.floor(Math.random() * data.length)];
    } while (uniqueCategories.has(product.category));
    uniqueCategories.add(product.category);
    const imageClass = imageClasses[i];
    const imageSrc = product.image;
    const category = product.category;

    document.querySelector(`.${imageClass}`).src = imageSrc;
    document.querySelector(`.text-wrapper-${49 + i}`).innerText = category;
  }
};

// const displayImagesForSpecialBoxes = (data) => {
//   const specialBoxMappings = [
//     {
//       imageBox: "IMAGE-19",
//       categoryWrapper: 53,
//       titleWrapper: 54,
//       exploreWrapper: 56,
//     },
//     {
//       imageBox: "IMAGE-20",
//       categoryWrapper: 57,
//       titleWrapper: 58,
//       exploreWrapper: 60,
//     },
//   ];

//   specialBoxMappings.forEach((boxMapping) => {
//     const product = data.find(
//       (item) => item.id === Number(boxMapping.imageBox.split("-")[1])
//     );

//     if (product) {
//       const imageSrc = product.image;
//       const category = product.category;
//       const title = product.title;
//       document.querySelector(`.${boxMapping.imageBox}`).src = imageSrc;
//       document.querySelector(
//         `.text-wrapper-${boxMapping.categoryWrapper}`
//       ).innerText = category;
//       document.querySelector(
//         `.text-wrapper-${boxMapping.titleWrapper}`
//       ).innerText = title;
//       const exploreWrapper = document.querySelector(
//         `.text-wrapper-${boxMapping.exploreWrapper}`
//       );
//       exploreWrapper.innerText = `Explore ${category}`;
//     } else {
//       console.error(`No data for ${boxMapping.imageBox}`);
//     }
//   });
// };

const displayImagesForSpecialBoxes = (data) => {
  const specialBoxMappings = [
    {
      imageBox: "IMAGE-19",
      categoryWrapper: 53,
      titleWrapper: 54,
      exploreWrapper: 56,
    },
    {
      imageBox: "IMAGE-20",
      categoryWrapper: 57,
      titleWrapper: 58,
      exploreWrapper: 60,
    },
    { imageBox: "IMAGE-21", titleWrapper: 61, descriptionWrapper: 62 },
  ];

  console.log(
    "Data IDs:",
    data.map((item) => item.id)
  );

  specialBoxMappings.forEach((boxMapping) => {
    let product;

    if (boxMapping.imageBox === "IMAGE-21") {
      // For IMAGE-21, select the 8th product from the data
      product = data[9];
    } else {
      // For other images, find the product by ID
      product = data.find(
        (item) => item.id === Number(boxMapping.imageBox.split("-")[1])
      );
    }

    if (product) {
      const imageSrc = product.image;
      const category = product.category;
      const title = product.title;

      document.querySelector(`.${boxMapping.imageBox}`).src = imageSrc;

      if (boxMapping.categoryWrapper) {
        document.querySelector(
          `.text-wrapper-${boxMapping.categoryWrapper}`
        ).innerText = category;
      }

      if (boxMapping.titleWrapper) {
        document.querySelector(
          `.text-wrapper-${boxMapping.titleWrapper}`
        ).innerText = title;
      }
      if (boxMapping.exploreWrapper) {
        const exploreWrapper = document.querySelector(
          `.text-wrapper-${boxMapping.exploreWrapper}`
        );
        exploreWrapper.innerText = `Explore ${category}`;
      }

      if (boxMapping.descriptionWrapper) {
        const descriptionWrapper = document.querySelector(
          `.text-wrapper-${boxMapping.descriptionWrapper}`
        );
        descriptionWrapper.innerText =
          product.description || "No description available";
      }
    } else {
      console.error(`No data for ${boxMapping.imageBox}`);
    }
  });
};

fetchDataOne();
