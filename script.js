// Add event listener to the form submit button
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent form submission
	alert('Thanks for subscribing!'); // Display alert message
});
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	// Store the input values in variables
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	
	alert('Thanks for subscribing, ' + name + '! We will send updates to ' + email + '.');
});
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	
	// Check if the name and email fields are not empty
	if (name.trim() === '' || email.trim() === '') {
		alert('Please enter a name and email address.');
		return;
	}
	
	alert('Thanks for subscribing, ' + name + '! We will send updates to ' + email + '.');
});
document.querySelector('form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	
	if (name.trim() === '' || email.trim() === '') {
		alert('Please enter a name and email address.');
		return;
	}
	
	alert('Thanks for subscribing, ' + name + '! We will send updates to ' + email + '.');
	
	// Clear the form inputs after submission
	document.getElementById('name').value = '';
	document.getElementById('email').value = '';
});
