fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    const title = json[0].title; 
    console.log(title);
    const description = json[0].description; 
    const img = json[0].image;

    const textWrapperElement = document.querySelector('.text-wrapper-27'); 
    textWrapperElement.textContent = title; 

    const weReContributing = document.querySelector('.we-re-contributing')
    weReContributing.textContent = description;

    const image = document.querySelector('.IMAGE-8')
    image.src = img;

  })
  .catch((err) => console.error('Error fetching data:', err));