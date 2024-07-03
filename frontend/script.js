document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3000/api/cryptos', {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received data:', data); 

        const tbody = document.querySelector('#crypto-table tbody');

        data.forEach((crypto, index) => {
            const row = document.createElement('tr');

            const difference = ((crypto.last - crypto.buy) / crypto.last * 100).toFixed(2);
            const savings = (crypto.last - crypto.buy).toFixed(2);

            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${crypto.name}</td>
                <td>${crypto.last}</td>
                <td>${crypto.buy} / ${crypto.sell}</td>
                <td>${difference}%</td>
                <td>₹${savings}</td>
            `;

            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Fetching error:', error);
    }
});
