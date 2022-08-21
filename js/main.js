let myBtn = document.querySelector('.btn');
let myRow = document.querySelector('.row')

console.log(myBtn);

myBtn.addEventListener('click',()=>{
    if (myBtn.innerHTML == 'Show Items') {

        myBtn.innerHTML = 'Hide Items';

        fetch(`../Data/data.json`)
        .then(res => res.json())
        .then(data => {
        // console.log(data);
         data.forEach(e => {
        // console.log(e.src);
        console.log(myRow);
        let myResult = `

            <div class="col-lg-4 col-sm-12 card flex-column d-flex align-items-center mt-5" style="width: 21rem; color: ${e.color};">
                <img src=${e.src} class="card-img-top">
                <h1 style="border-bottom: 3px dashed; width: 75px;">${e.name}</h1>
                <h1>Price : ${e.price}</h1>
                <h1>Color : ${e.color}</h1>
                <h1>Model : ${e.model}</h1>
            </div> 
                
        `
        myRow.innerHTML += myResult 
        // console.log(myResult);

    });
})
    } else if (myBtn.innerHTML == 'Hide Items') {
        myBtn.innerHTML = 'Show Items'
        myRow.innerHTML = '' 


    }
})



