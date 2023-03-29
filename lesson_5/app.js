const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector("#euro")


// som.addEventListener('input', (e) => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'data.json')
//     request.setRequestHeader('Content-Type', 'application/json')
//     request.send()

//     request.addEventListener("load", () => {
//         const data = JSON.parse(request.response)
//         console.log(+data.usd);
//         usd.value = (e.target.value / +data.usd).toFixed(2)
//     })
// // })


const convert = (elem1, elem2, elem3) => {
    elem1.addEventListener("input", () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-Type', 'application/json')
        request.send()
        request.addEventListener("load", () => {
            const data = JSON.parse(request.response)
                // target.value = (elem.value / data.usd).toFixed(2) :
                // target.value = (elem.value * data.usd).toFixed(2)
            if (elem1 === som) {
                elem2.value = (+elem1.value / data.usd).toFixed(2)
                elem3.value = (+elem1.value / data.euro).toFixed(2)
            } else if (elem1 === usd) {
                elem2.value = (+elem1.value * data.usd).toFixed(2)
                elem3.value = (+elem1.value * data.usd / data.euro).toFixed(2)
            } else if (elem1 === euro) {
                elem3.value = (+elem1.value * data.euro).toFixed(2)
                elem2.value = (+elem1.value * data.euro / data.usd).toFixed(2)
            }
            elem1.value === "" ? elem2.value = "" : null
            elem1.value === "" ? elem3.value = "" : null
        })
    })
}

convert(som, usd, euro)
convert(usd, som, euro)
convert(euro, usd, som)