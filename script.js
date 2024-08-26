// Create a button to get the total price and add it to the document
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all elements with class 'price'
  const allPrices = document.querySelectorAll(".price");
  
  // Initialize sum variable
  let sum = 0;
  
  // Loop through all prices and accumulate the sum
  for (let price of allPrices) {
    sum += Number(price.textContent); // Convert text content to number and add to sum
  }
  
  // Create a new row to display the total price
  const row = document.createElement("tr");
  
  // Create a cell for the total price and set its content
  const cell = document.createElement("td");
  cell.colSpan = 2; // Make this cell span across two columns
  cell.textContent = `Total Price: Rs ${sum}`;
  
  // Append the cell to the row
  row.appendChild(cell);
  
  // Append the row to the table
  const table = document.getElementById("tab");
  table.appendChild(row);
};

// Add event listener to the button to call getSum function on click
getSumBtn.addEventListener("click", getSum);
