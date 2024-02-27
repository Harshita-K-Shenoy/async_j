//https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=955a91018eb24d6ab14dc0ba8c4716ea
const link = 'https://api.thecatapi.com/v1/images/search?limit=10';
const getTodos = async () => {
    const response = await fetch(link);
    if (response.status !== 200){
        throw new Error('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
};
const content = document.querySelectorAll('li');
getTodos()
    .then(data => {
        console.log('resolved:',data);
        for (let i = 0; i < 10; i++) {
            list=data[i];
            imgs=content[i];
            imgs.innerHTML =`<img src= ${list["url"]} class="image" alt = ${list["id"]}>`
        };

    })
    .catch(err => console.log('rejected:',err.message));



