const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => processImages2(data))
        .catch(error => console.error('Error fetching data:', error));
}

const processImages2 = (data) => {

    const imageClasses = [
        'IMAGE-10', 'IMAGE-11', 'IMAGE-12', 'IMAGE-13', 'IMAGE-14'
    ];

    function truncateTitle(title) {
        const words = title.split(' ').slice(0, 3);
        return words.join(' ');
    }

    if (data.length >= imageClasses.length + 9) {
        for (let i = 0; i < imageClasses.length; i++) {
            const imageClass = imageClasses[i];
            const product = data[i + 9];
            const imageSrc = product.image;
            const title = truncateTitle(product.title); 
            const desc = truncateTitle(product.description)

            document.querySelector(`.${imageClass}`).src = imageSrc;

            switch (i + 10) {
                case 10:
                    document.querySelector('.text-wrapper-30').innerText = title;
                    document.querySelector(".text-wrapper-29").innerText = desc
                    break;
                case 11:
                    document.querySelector('.text-wrapper-34').innerText = title;
                    document.querySelector(".text-wrapper-33").innerText = desc
                    break;
                case 12:
                    document.querySelector('.text-wrapper-38').innerText = title;
                    document.querySelector(".text-wrapper-37").innerText = desc
                    break;
                case 13:
                    document.querySelector('.text-wrapper-42').innerText = title;
                    document.querySelector(".text-wrapper-41").innerText = desc
                    break;
                case 14:
                    document.querySelector('.text-wrapper-46').innerText = title;
                    document.querySelector(".text-wrapper-45").innerHTML = desc
                    break;
                default:
                    break;
            }

            console.log(`${imageClass} - ${imageSrc}`);
        }
    }
}

fetchData();
