let requestURL = 'https://api.exchangerate.host/latest?symbols=USD,EUR,GBP,CZK,UAH,RUB,BTC&base=UAH';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let response = request.response;
    function proceed() {
        let currency = document.querySelector("#currency_list_to").value;
        let amount = +document.querySelector("#UAH").value
        let output = document.querySelector("#output");
        let result;
        switch (currency) {

            case "BTC" :
                result = amount * response.rates.BTC;
                output.value = result.toFixed(5) + "BTC";
                break;

            case "CZK" :
                result = amount * response.rates.CZK;
                output.value = result.toFixed(2) + "Kč";
                break;

            case "EUR" :
                result = amount * response.rates.EUR;
                output.value = result.toFixed(2) + "€";
                break;

            case "GBP" :
                result = amount * response.rates.GBP;
                output.value = result.toFixed(2) + "£";
                break;

            case "RUB" :
                document.querySelector("main").innerHTML = "Простите, окупантов не обслуживаем."
                break;

            case "UAH" :
                output.value = amount.toFixed(2) + "₴";
                break;

            case "USD" :
                result = amount * response.rates.USD;
                output.value = result.toFixed(2) + "$";
                break;
        }
    }
        proceed();
}

document.querySelector("#UAH").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        request.onload();
    }
});
