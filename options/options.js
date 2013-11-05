var fields = ['name', 'email', 'phone', 'message'];

function saveOptions() {
  var options = {};
  fields.forEach(function(field) {
    options[field] = document.getElementById(field).value;
  });
  localStorage['options'] = JSON.stringify(options);

  var status = document.getElementById('status');
  status.innerHTML = 'Options Saved';
  setTimeout(function() {
    status.innerHTML = '';
  }, 750);
}

function restoreOptions() {
  var options = {};
  try {
    options = JSON.parse(localStorage['options']);
  } catch (e) {}

  fields.forEach(function(field) {
    if (options[field]) {
      document.getElementById(field).value = options[field];
    }
  });
}

document.body.addEventListener('change', saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);
