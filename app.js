const list = [
    {
        id: 0,
        nazwa: "Kwait doniczkowy",
        cena: 12,
        foto: "kwiat"
    },
    {
        id: 1,
        nazwa: "Bukiet mieszany",
        cena: 85,
        foto: "bukiet"
    },
    {
        id: 2,
        nazwa: "Ziemia uniwersalna 5L",
        cena: 15,
        foto: "ziemia"
    },
    {
        id: 3,
        nazwa: "Wstązka ozdobna",
        cena: 8,
        foto: "ozdobna"
    },
    {
        id: 4,
        nazwa: "Kartka okolicznościowa",
        cena: 10,
        foto: "kartka"
    },
    {
        id: 5,
        nazwa: "Doniczka",
        cena: 85,
        foto: "doniczka"
    }
];

const input = document.querySelector('#searchInput');
const container = document.querySelector("#grid-container");
const up_btn = document.querySelector('#up_btn');


/* Stara funckja
function LoadList(value) {
    container.innerHTML="";
    if(!value){list.map( (item) => {
                let html = `<div class='poz'>
                <img src='img/${item.foto}.jpg'/>
                <div>
                    <p>${item.nazwa}</p>
                    <p>${item.cena}zł</p>
                </div>
            </div>`;
                container.insertAdjacentHTML("beforeend", html);
                } )}else{
                    list.map( (item) => {
                        let czyJest = item.nazwa.includes(value);
                        if(czyJest)
                            {
                                let html = 
                                `<div class='poz'>
                                    <img src='img/${item.foto}.jpg'/>
                                    <div>
                                        <p>${item.nazwa}</p>
                                        <p>${item.cena}zł</p>
                                    </div>
                                </div>`;
                container.insertAdjacentHTML("beforeend", html);};
                    })
                }
}*/

function LoadList(list)
{
    if(list.length != 0)
    {
        container.innerHTML="";
        list.map( (item) => {
            let html = 
            `<div class="poz">
                <img src="img/${item.foto}.jpg" alt="${item.foto}">
                <div>
                    <p>${item.nazwa}</p>
                    <p>${item.cena}</p>
                </div>
            </div>`;
            container.insertAdjacentHTML("beforeend", html);
        })
    }else container.innerHTML = "<h1>Brak wyników!</h1>";
}



document.addEventListener("DOMContentLoaded", () => {
    LoadList(list);
    input.addEventListener("input", () => {
    if(input.value)
        {
            let wynik = list.filter( (item) => {
                if(item.nazwa.includes(input.value))return item;
            })
            LoadList(wynik);
        }
        else LoadList(list);
})
document.querySelector('#input_link').addEventListener("click", () => {
    document.querySelector('#searchInput').focus();//Chciałem dać fous po przeniesieniu ,lecz nie zadziałąl w tym przypadku
    //alert('Powinno być');

})
});
window.addEventListener('scroll', () => {
    if(window.scrollY > 250)
    {
        up_btn.style = "display:flex";    
    }else up_btn.style = "display:none";  
})

up_btn.addEventListener("click", () => {
    window.scrollTo(0,0);
})