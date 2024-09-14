const image_div = document.getElementById('images_contaner');
const input = document.getElementById('user');
const btn = document.getElementById('btn')

const searchPhoto = async () => {
    let key = "qt3MXGrERCg9MaKX3c1xKVXHWAqbqf2FjKvc8T522Os";

    
        let apiUrl = await fetch(`https://api.unsplash.com/search/photos?page=2,2&query=${input.value}&client_id=${key}`);
        
        const data = await apiUrl.json();

        image_div.innerHTML = data.results.map((item) => {
            return `
            <div class="image">
                <img src="${item.urls.regular}">
            </div>
            `
       })
       
       .join('');
};

btn.addEventListener('click', searchPhoto);
