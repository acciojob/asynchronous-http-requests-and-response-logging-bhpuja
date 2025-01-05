//your JS code here. If required.
// List of URLs to fetch data from
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

// Selecting the button and output div from the DOM
const fetchDataButton = document.getElementById('fetchDataButton');
const outputDiv = document.getElementById('output');

// Function to fetch data from each URL asynchronously
async function fetchData() {
  // Clear the previous output
  outputDiv.innerHTML = "";

  // Loop through each URL in the list and fetch data
  for (let url of urls) {
    try {
      const response = await fetch(url);

      // Check if the response is OK (status code 200)
      if (response.ok) {
        const data = await response.json();

        // Log the response to the output div
        const responseDiv = document.createElement('div');
        responseDiv.classList.add('response');
        responseDiv.innerHTML = `
          <strong>Response from ${url}:</strong>
          <pre>${JSON.stringify(data, null, 2)}</pre>
        `;
        outputDiv.appendChild(responseDiv);
      } else {
        // Handle non-200 responses
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerHTML = `Failed to fetch from ${url}. Status: ${response.status}`;
        outputDiv.appendChild(errorDiv);
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      const errorDiv = document.createElement('div');
      errorDiv.classList.add('error');
      errorDiv.innerHTML = `Error fetching from ${url}: ${error.message}`;
      outputDiv.appendChild(errorDiv);
    }
  }
}

// Event listener for the button click
fetchDataButton.addEventListener('click', fetchData);
