$(document).ready(function(){ // waits for DOM to completly load
  $('#submitNewEmployee').on('click', function(){ //event listener on submitNewEmployee button
    // Declaring variables and retreiving values from input boxes
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    // add new employee row to DOM
    $('#employeeTableBody').append(
   '<tr>' +
      '<td>' + firstName +'</td>' +
      '<td>' + lastName +'</td>' +
      '<td>' + idNumber +'</td>' +
      '<td>' + jobTitle +'</td>' +
      '<td>' + annualSalary +'</td>' +
    '</tr>'
  );

    // Add monthly salary expenses to the DOM
    var newEmployeeMonthlyExpenses = annualSalary/ 12;
    var previousMonthlyExpenses = $('monthlyExpenses').text(); //.val is for inputs
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(totalMonthlyExpenses);
  });
});

// .text is to

// .val is for input
