
const startBtn = document.getElementById('start-btn');
const contatinBtn = document.getElementById('contatin-btn');
const arrangeBtn = document.getElementById('arrange-btn');



const buttons = [startBtn, contatinBtn, arrangeBtn];

const boxContainer = document.querySelector('.box-container')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

countries.forEach(item =>{
    console.log(item)
    const boxTitle = document.createElement('p')
    boxTitle.className = 'box-title'
    boxTitle.textContent = item

    const box = document.createElement('div')
    box.className = 'box'

    boxContainer.appendChild(box)
    box.appendChild(boxTitle)
})

let importantValue = ''

arrangeBtn.addEventListener('click', ()=> {
    importantValue = 'arrange'
    console.log(importantValue)
})

startBtn.addEventListener('click', ()=> {
    importantValue = 'start'
    console.log(importantValue)
})

contatinBtn.addEventListener('click', ()=> {
    importantValue = 'contain'
    console.log(importantValue)
})

const searchInput = document.getElementById('search-input');

function resultsToOutput (countries){
    countries.forEach(item =>{
        console.log(item)
        const boxTitle = document.createElement('p')
        boxTitle.className = 'box-title'
        boxTitle.textContent = item
    
        const box = document.createElement('div')
        box.className = 'box'
    
        boxContainer.appendChild(box)
        box.appendChild(boxTitle)
    })
}

searchInput.addEventListener('input', () =>{
    const query = searchInput.value.toLowerCase();

    if(importantValue === 'arrange'){
        boxContainer.innerHTML = ''
        resultsToOutput(countries)

    }else if(importantValue === 'start'){
         boxContainer.innerHTML = ''

        const filteredCountries = countries.filter(country =>
            country.toLowerCase().startsWith(query)
        );
        resultsToOutput(filteredCountries)
        // filteredCountries.forEach(item =>{
        //     console.log(item)
        //     const boxTitle = document.createElement('p')
        //     boxTitle.className = 'box-title'
        //     boxTitle.textContent = item
        
        //     const box = document.createElement('div')
        //     box.className = 'box'
        
        //     boxContainer.appendChild(box)
        //     box.appendChild(boxTitle)
        // })
    }else{
        boxContainer.innerHTML = ''

        const includedCountries = countries.filter(country =>
            country.toLowerCase().includes(query)
        );
        resultsToOutput(includedCountries)
        // includedCountries.forEach(item =>{
        //     console.log(item)
        //     const boxTitle = document.createElement('p')
        //     boxTitle.className = 'box-title'
        //     boxTitle.textContent = item
        
        //     const box = document.createElement('div')
        //     box.className = 'box'
        
        //     boxContainer.appendChild(box)
        //     box.appendChild(boxTitle)
        // })
    }

})