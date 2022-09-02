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
    $("#costMonthly").text(`${calculateTotalMonthly(employeeList)}`);
}

function calculateTotalMonthly(array) {
    let sum = 0;
    for (const employee of array) {
        sum += Number(employee.annualSalary / 12);
    }
    return sum;
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
    let eeChildID = $(event.target).closest("tr").children()[2];
    let arrayLocation = employeeList.findIndex((employee) => Number(employee.employeeID) === Number($(eeChildID).text()));
    employeeList.splice(arrayLocation, 1);
    appendDom();
}

function processEmployeeInfo() {
    let foundID = false;
    let newEmployee = collectEmployeeInfo();
    for (const employee of employeeList) {
        if (employee.employeeID === newEmployee.employeeID) {
            foundID = true;
        }
    }
    if (foundID === false) {
        employeeList.push(collectEmployeeInfo());
        clearInputs();
        appendDom();
    } else {
        clearInputs();
        console.log("EmployeeID already in use!");
    }
}

function eventHandlers() {
    $("#addEmployeeBtn").on("click", processEmployeeInfo)
    $("#tableBody").on("click", ".deleteBtn", deleteEmployee)
}

function onReady() {
    eventHandlers()
}  // end onReady