   
    function fetchData() {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => processImages(data))
          .catch(error => console.error('Error fetching data:', error));
      }
  
      
      function processImages(data) {
       
        for (let i = 2; i <= 7; i++) {
          const imageClass = `IMAGE-${i}`;
  
          
          const product = data[i - 1]; 
  
         
          const imageSrc = product.image;
  
        
          document.querySelector(`.${imageClass}`).src = imageSrc;
  
          
          console.log(`${imageClass} - ${imageSrc}`);
        }
      }
  
      fetchData();

  
