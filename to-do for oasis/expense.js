var expenseData = [];
function validation(event) {
    event.preventDefault(); 
    var names = document.getElementById("name").value;
    var amount = document.getElementById("amount").value;
    if (names === ""||amount === "") {
        alert("Invalid");
        return false;
    }
    if(expenseData){
        expenseData.push({ name: names, amount: amount});
    }
 localStorage.setItem("expenseData", JSON.stringify(expenseData));
    document.querySelector(".register").reset(); 
     dataLocal(); 
    return true;
}
  if (localStorage.getItem("expenseData") !== null) {
    expenseData = JSON.parse(localStorage.getItem("expenseData"));
    }
    dataLocal();
function dataLocal() {
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    expenseData.forEach((data, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>${data.name}</td>
                <td>${data.amount}</td>
                <td>
                       <button onclick="deletee(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}
function deletee(index) {
    if (confirm("Are you sure you want to delete this expenseData?")) {
        expenseData.splice(index, 1);
        localStorage.setItem("expenseData", JSON.stringify(expenseData));
        dataLocal();
    }
}

