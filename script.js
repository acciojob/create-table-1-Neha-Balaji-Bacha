function insert_Row() {
    const table = document.getElementById("sampleTable");

    // Insert new row at top (index 0)
    const newRow = table.insertRow(0);

    // Create two cells
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set required text
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
