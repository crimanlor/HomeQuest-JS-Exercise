const casas = [
    {
        precio: "250,000€",
        metrosCuadrados: 120,
        ubicacion: "Madrid, España",
        referencia: "CASA1234",
        imagen: "images/casa1234.jpg"
    },
    {
        precio: "350,000€",
        metrosCuadrados: 150,
        ubicacion: "Barcelona, España",
        referencia: "CASA5678",
        imagen: "images/casa5678.jpg"
    },
    {
        precio: "200,000€",
        metrosCuadrados: 100,
        ubicacion: "Valencia, España",
        referencia: "CASA9101",
        imagen: "images/casa9101.jpg"
    } 
]

const houseImgElement = document.querySelector("[data-house-img]")
const houseInfoElement = document.querySelector("[data-house-list]")
const beforeBtnElement = document.querySelector("[data-before-btn]")
const afterBtnElement = document.querySelector("[data-after-btn]")

var contador = 0;

function showHouse(){
    const casa = casas[contador]
    houseImgElement.src = casa.imagen
    houseInfoElement.innerHTML = `
    <li class="list-unstyled"><b>Precio:</b> ${casa.precio}</li>
    <li class="list-unstyled"><b>Metros:</b> ${casa.metrosCuadrados}m<sup>2</sup></li>
    <li class="list-unstyled"><b>Ubicación:</b> ${casa.ubicacion}</li>
    <li class="list-unstyled"><b>Referencia:</b> ${casa.referencia}</li>`

}

function updateHouse(){
    contador = (contador + 1) % casas.length;
    showHouse()
}

function previousHouse(){
    contador = (contador - 1 + casas.length ) % casas.length;
    showHouse()

}

window.addEventListener("DOMContentLoaded", showHouse)
afterBtnElement.addEventListener("click", updateHouse)
beforeBtnElement.addEventListener("click", previousHouse)

