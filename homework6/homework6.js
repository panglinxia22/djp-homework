// Get form element
const citipixForm = document.getElementById('citipix-form');

//  Listen for the form submit event
citipixForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the value of the input field
  let inputValue = document.getElementById('city-type').value;
  let cityName = inputValue.trim().toLowerCase();
  document.body.classList = "";
  switch (cityName) {
    // empty value
    case '':
      alert(' enter the city name please!');
      break;

    // NEW york conditional
    case 'new york':
    case 'new york city':
    case 'ny':
    case 'nyc':
      document.body.classList.add('nyc');
      break;

    // SF conditional
    case 'san francisco':
    case 'bay area':
    case 'sf':
      document.body.classList.add('nyc');
      break;

    // LA conditional
    case 'los angeles':
    case 'la':
    case 'lax':
      document.body.classList.add('la');
      break;

    // Austin conditional
    case 'austin':
    case 'atx':
      document.body.classList.add('austin');
      break;

    // Sydney conditional
    case 'sydney':
    case 'syd':
      document.body.classList.add('sydney');
      break;

    default:
      alert("I can't find the city name you typed");
  }
  citipixForm.reset();  // reset form
});