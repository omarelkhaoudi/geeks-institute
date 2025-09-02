// Red table
// Instructions

function colorDiagonal (tableId) {
    const table = document.getElementById(tableId);
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[i]) {
            rows[i].cells[i].style.backgroundColor = 'red';
        }
    }
}