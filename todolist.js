console.log("script loaded")


document.addEventListener("DOMContentLoaded", function () {

    event.preventDefault(); 

    const addButton = document.getElementById("my-button");
    const dataTable = document.getElementById("data-table").getElementsByTagName("tbody")[0];
    const nameField = document.getElementById("name-field");
 

  


    addButton.addEventListener("click", function () {
        const nameValue = nameField.value;
    

        if (nameValue) {
            const newRow = dataTable.insertRow();

            const nameCell = newRow.insertCell(0);
            const actionCell = newRow.insertCell(1);

            nameCell.textContent = nameValue;

            actionCell.innerHTML = '<button class="delete-button">Delete</button>';

            nameField.value = ""; // Clear 


            attachDeleteHandler(newRow);
        }
    });

    function attachDeleteHandler(row) {
        const deleteButton = row.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            dataTable.deleteRow(row.rowIndex -1);
        });
    }
});