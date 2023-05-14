
// GET request to the CoinGecko API data
fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ctether%2Cethereum%2Clitecoin%2Ccardano%2Cdogecoin&vs_currencies=usd&include_24hr_change=true')

.then(res => res.json()) // converts the response to JSON
    .then(json => {
        // Get to DOM
        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json); // extracts the names from JSON 

        // iterates over the cryptocurrency names @link- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        for (let coin of coins) {
            const coinInfo = json[`${coin}`];
            const price = coinInfo.usd;
            const change = coinInfo.usd_24h_change.toFixed(5);

            // Show data
            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="images/${coin}.png">
                    </div>
                    <div class="coin-name">
                        <h3>${coin}</h3>
                        <span>USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">${price}</span>
                        <span class="change">${change}</span>
                    </div>
                </div>
            `;
        }
    }
);