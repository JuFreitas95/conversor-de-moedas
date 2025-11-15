

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select-convertion")



function convertvalue() {

        const inputvalue = document.querySelector(".input-money").value
        const valorreal = document.querySelector(".valor-para-converter")
        const valorconvertido = document.querySelector(".valor")


        const dolartoday = 5.3
        const eurotoday = 6.16
        const biticointoday = 509.995
        const libratoday = 6.7





        if (currencySelect.value == "dolar") {

                valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                }).format(inputvalue / dolartoday)


        }

        if (currencySelect.value == "euro") {
                valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR"

                }).format(inputvalue / eurotoday)

        }

        if (currencySelect.value == "biticoin") {
                valorconvertido.innerHTML = new Intl.NumberFormat("bitcoin", {
                        style: "currency",
                        currency: "BTC"
                }).format(inputvalue / biticointoday)
        }

        if (currencySelect.value == "libra") {
                valorconvertido.innerHTML = new Intl.NumberFormat("libra", {
                        style: "currency",
                        currency: "LBR"
                }).format(inputvalue / libratoday)
        }






        valorreal.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
        }).format(inputvalue)



}



function changecurrency() {



        const currencyName = document.getElementById("name")
        const currencyImg = document.querySelector(".img-dolar")







        if (currencySelect.value == "dolar") {

                currencyName.innerHTML = "Dólar Americano"
                currencyImg.src = "./img/dolar.png"
                  
        }


        if (currencySelect.value == "euro") {

                currencyName.innerHTML = "Euro"
                currencyImg.src = "./img/euro.png"
                currencyImg.classList.add("euro-image");
        }

        if (currencySelect.value == "biticoin") {
                currencyName.innerHTML = "Biticoin"
                currencyImg.src = "./img/biticoin.png"
                    currencyImg.classList.add("bitcoin-image");


        }
        
        if (currencySelect.value == "libra") {
                currencyName.innerHTML = "Libra"
                currencyImg.src = "./img/libra.png"
                 currencyImg.classList.add("libra-image");

        }








        convertvalue()



}




currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertvalue)











