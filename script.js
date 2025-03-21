let totalIncome = 0;
let totalExpense = 0;

function addTransaction() {
  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value.trim();
  const type = document.querySelector('input[name="type"]:checked').value;
  const amountInput = document.getElementById('amount');
  const amount = parseFloat(amountInput.value);

  if (!name || !category || isNaN(amount) || amount <= 0) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const tableBody = document.getElementById('transactionTableBody');
  const newRow = tableBody.insertRow();

  const nameCell = newRow.insertCell(0);
  const categoryCell = newRow.insertCell(1);
  const typeCell = newRow.insertCell(2);
  const amountCell = newRow.insertCell(3);

  nameCell.textContent = name;
  categoryCell.textContent = category;
  typeCell.textContent = type;
  amountCell.textContent = amount.toLocaleString();

  if (type === "Income") {
    totalIncome += amount;
  } else {
    totalExpense += amount;
  }

  updateSummary();

  // Clear form inputs
  document.getElementById('name').value = '';
  document.getElementById('category').value = '';
  amountInput.value = '';
  document.getElementById('incomeType').checked = true;
}

function updateSummary() {
  const incomeDisplay = document.getElementById('income');
  const expenseDisplay = document.getElementById('expense');
  const balanceDisplay = document.getElementById('balance');

  incomeDisplay.textContent = totalIncome.toLocaleString(undefined, { minimumFractionDigits: 2 });
  expenseDisplay.textContent = totalExpense.toLocaleString(undefined, { minimumFractionDigits: 2 });
  balanceDisplay.textContent = (totalIncome - totalExpense).toLocaleString(undefined, { minimumFractionDigits: 2 });
}
