document.getElementById('bookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let tableBody = document.getElementById('bookTableBody');

    let name = document.getElementById('name').value;
    let branch = document.getElementById('branch').value;
    let year = document.getElementById('year').value;
    let regNo = document.getElementById('regNo').value;
    let bookName = document.getElementById('bookName').value;
    let bookNo = document.getElementById('bookNo').value;
    let dueDate = document.getElementById('dueDate').value;
    let returned = document.getElementById('returned').value;

    let newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${branch}</td>
        <td>${year}</td>
        <td>${regNo}</td>
        <td>${bookName}</td>
        <td>${bookNo}</td>
        <td>${dueDate}</td>
        <td>${returned}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    tableBody.appendChild(newRow);

    newRow.querySelector('.edit').addEventListener('click', function() {
        document.getElementById('name').value = name;
        document.getElementById('branch').value = branch;
        document.getElementById('year').value = year;
        document.getElementById('regNo').value = regNo;
        document.getElementById('bookName').value = bookName;
        document.getElementById('bookNo').value = bookNo;
        document.getElementById('dueDate').value = dueDate;
        document.getElementById('returned').value = returned;

        tableBody.removeChild(newRow);
    });

    newRow.querySelector('.delete').addEventListener('click', function() {
        tableBody.removeChild(newRow);
    });

    document.getElementById('bookForm').reset();
});
