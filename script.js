document.getElementById('reservationform').addEventListener('submit', function(e) {
  e.preventDefault();
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var time = document.getElementById('time').value;
  var members = document.getElementById('members').value;

  var table = document.querySelector('#reservationtable table');
  var row = table.insertRow(-1);

  var nameCell = row.insertCell(0);
  nameCell.innerHTML = name;

  var dateCell = row.insertCell(1);
  dateCell.innerHTML = date;

  var timeCell = row.insertCell(2);
  timeCell.innerHTML = time;

  var membersCell = row.insertCell(3);
  membersCell.innerHTML = members;

  document.getElementById('name').value = '';
  document.getElementById('date').value = '';
  document.getElementById('time').value = '';
  document.getElementById('members').value = '';

});


