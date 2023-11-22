   
    const fetchDataImages = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => processImages(data))
        .catch(error => console.error('Error fetching data:', error));
    }

    const processImages = (data) => {
    
      for (let i = 2; i <= 7; i++) {
        const imageClass = `IMAGE-${i}`;
        const product = data[i - 1]; 
        const imageSrc = product.image;
        document.querySelector(`.${imageClass}`).src = imageSrc;
        console.log(`${imageClass} - ${imageSrc}`);
      }
    }
    fetchDataImages();

    
     const fetchDataTitle = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => processTitles(data))
        .catch(error => console.error('Error fetching data:', error));
    }

 
    const processTitles = (data) => {
    
      const targetClasses = [
        'text-wrapper-17',
        'text-wrapper-19',
        'text-wrapper-21',
        'text-wrapper-22',
        'text-wrapper-24'
      ];

      for (const targetClass of targetClasses) {
  
        const product = data[targetClasses.indexOf(targetClass)]; 
        const title = product.title;

        document.querySelector(`.${targetClass}`).textContent = title;
        console.log(`${targetClass} - ${title}`);
      }
    }
    fetchDataTitle();