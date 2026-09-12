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
const container = document.getElementById("grid-container");



function LoadList(value) {
    container.innerHTML="";
    if(!value){list.map( (item) => {
                let html = `<div class='poz'>
                <img src='img/${item.foto}.jpg'/>
                <div>
                    <p>${item.nazwa}</p>
                    <p>${item.cena}</p>
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
                                        <p>${item.cena}</p>
                                    </div>
                                </div>`;
                container.insertAdjacentHTML("beforeend", html);};
                    })
                }
}




document.addEventListener("DOMContentLoaded", () => {
    LoadList();
    input.addEventListener("input", () => {
    if(input.value)LoadList(input.value);
        else LoadList();
})
});
