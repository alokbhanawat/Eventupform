// Get the fieldsets
const fieldsets = document.querySelectorAll('fieldset');

// Get the next buttons
const nextButtons = document.querySelectorAll('.next');

// Get the previous buttons
const prevButtons = document.querySelectorAll('.previous');

// Set the current fieldset index
let currentFieldsetIndex = 0;

// Add event listeners to the next buttons
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Check if gender field has a value
    var gender = document.getElementsByName("gender")[0].value;
    if (gender == "" && currentFieldsetIndex === 0) {
      alert("Please select your gender.");
      return;
    }

    // Hide the current fieldset
    fieldsets[currentFieldsetIndex].style.display = 'none';

    // Show the next fieldset
    currentFieldsetIndex++;
    fieldsets[currentFieldsetIndex].style.display = 'block';

    // Update the progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (index === 0) {
      progressBar.style.width = '40%';
    } else if (index === 1) {
      progressBar.style.width = '80%';
    }

    // Update the active progress bar item
    const progressItems = document.querySelectorAll('#progressbar li');
    progressItems.forEach((item, index) => {
      if (index === currentFieldsetIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

// Add event listeners to the previous buttons
prevButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Hide the current fieldset
    fieldsets[currentFieldsetIndex].style.display = 'none';

    // Show the previous fieldset
    currentFieldsetIndex--;
    fieldsets[currentFieldsetIndex].style.display = 'block';

    // Update the progress bar
    const progressBar = document.querySelector('.progress-bar');
    if (currentFieldsetIndex === 0) {
      progressBar.style.width = '0%';
    } else if (currentFieldsetIndex === 1) {
      progressBar.style.width = '40%';
    }

    // Update the active progress bar item
    const progressItems = document.querySelectorAll('#progressbar li');
    progressItems.forEach((item, index) => {
      if (index === currentFieldsetIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

document.getElementsByName('eventTimings').forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      document.querySelectorAll('input[name="eventTimings"]:checked').forEach((otherCheckbox) => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    }
  });
});

// Get the progress bar and the submit button
const progresssBar = document.querySelector('.progress');
const submitButton = document.querySelector('input[type="button"][value="Submit"]');

// Add an event listener to the submit button
submitButton.addEventListener('click', () => {
  // Update the progress bar width to 100%
  const progressBar = document.querySelector('.progress-bar');
  progressBar.style.width = '100%';

  // Remove the progress bar
  progressBar.style.display = 'none';
  progresssBar.style.display = 'none';
});




// no use 

// Get all form fields
const formFields = document.querySelectorAll('input, select, textarea');

// Get the submit button
const submittButton = document.getElementById('submit-btn');

// Create an object to store form data
const formData = {};

// Add event listener to submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Collect data from all form fields
    formFields.forEach((field) => {
        const fieldName = field.name;
        const fieldValue = field.value;

        // Store data in the formData object
        formData[fieldName] = fieldValue;
    });

    // Convert formData object to JSON
    const jsonData = JSON.stringify(formData);

    // Submit data using XMLHttpRequest or fetch API
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/submit-form', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(jsonData);

    // Alternatively, you can use the fetch API
    // fetch('/submit-form', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: jsonData
    // })
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((error) => console.error(error));
});