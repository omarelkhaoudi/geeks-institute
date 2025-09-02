// Calendar
// Instructions

function createCalendar(year, month) {
    const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
    
    // Create table header
    const thead = table.createTHead();
    const headRow = thead.insertRow();
    daysOfWeek.forEach(day => {
        const th = document.createElement("th");
        th.textContent = day;
        th.style.border = "1px solid black";
        th.style.padding = "3px 5px";
        headRow.appendChild(th);
    });

    const tbody = table.createTBody();
    const firstDay = new Date(year, month - 1, 1).getDay(); // 0=Sunday
    const lastDay = new Date(year, month, 0).getDate(); // last day of month

    let date = 1;
    let weekDayIndex = (firstDay + 6) % 7; // adjust so Monday=0

    while (date <= lastDay) {
        const row = tbody.insertRow();
        for (let i = 0; i < 7; i++) {
            const cell = row.insertCell();
            cell.style.border = "1px solid black";
            cell.style.padding = "3px 5px";
            if ((date === 1 && i < weekDayIndex) || date > lastDay) {
                cell.textContent = "";
            } else {
                cell.textContent = date;
                date++;
            }
        }
    }

    document.body.appendChild(table);
}

// Example usage:
createCalendar(2024, 8); // August 2024