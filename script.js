/// <reference path="jquery.js" />
$(onReady)

let employeeList = [];

function appendDom() {
    $("#tableBody").empty();
    for (const employee of employeeList) {
        $("#tableBody").append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.employeeID}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `);
    }
}

function collectEmployeeInfo() {
    let newEmployee = {
        firstName: $("#inputFirstName").val(),
        lastName: $("#inputLastName").val(),
        employeeID: $("#inputEmployeeID").val(),
        title: $("#inputTitle").val(),
        annualSalary: $("#inputAnnualSalary").val()
    };
    return newEmployee;
}

function clearInputs() {
    $("#inputFirstName").val("");
    $("#inputLastName").val("");
    $("#inputEmployeeID").val("");
    $("#inputTitle").val("");
    $("#inputAnnualSalary").val("");
}

function deleteEmployee(event) {
    $(event.target).closest("tr").remove();
}

function processEmployeeInfo() {
    employeeList.push(collectEmployeeInfo());
    clearInputs();
    appendDom();
}

function eventHandlers() {
    $("#addEmployeeBtn").on("click", processEmployeeInfo)
    $("#tableBody").on("click", ".deleteBtn", deleteEmployee)
}

function onReady() {
    eventHandlers()
}  // end onReady