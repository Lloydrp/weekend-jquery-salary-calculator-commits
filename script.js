$(onReady)

let employeeList = [];

function appendDom() {

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

function processEmployeeInfo() {
    employeeList.push(collectEmployeeInfo());
    clearInputs();
}

function eventHandlers() {
    $("#addEmployeeBtn").on("click", processEmployeeInfo)
}

function onReady() {
    eventHandlers()
}  // end onReady