
fetch('profit_prediction_dataset.csv')
    .then(response => response.text())
    .then(data => {
        const rows = data.split('\n');
        const table = document.getElementById('csvTable');

        // Extract table headers from the first row
        const headers = rows[0].split(',');
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        table.querySelector('thead').appendChild(headerRow);

        // Process the remaining rows as table data
        rows.slice(1).forEach(row => {
            const cells = row.split(',');
            const rowElement = document.createElement('tr');
            cells.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                rowElement.appendChild(td);
            });
            table.querySelector('tbody').appendChild(rowElement);
        });
    })
    .catch(error => console.error('Error fetching CSV file:', error));
