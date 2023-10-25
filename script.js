const transactions = [
  {
    id: 1,
    name: 'salary',
    amount: 500,
    date: new Date(),
    type: 'income'
  },
  {
    id: 2,
    name: 'flowers',
    amount: 20,
    date: new Date(),
    type: 'expense'
  },
  {
    id: 3,
    name: 'water bottle',
    amount: 5,
    date: new Date(),
    type: 'expense'
  }
];

const list = document.getElementById("transactionList");

function renderList() {
  list.innerHTML = "<li>item</li>";

  transactions.forEach((transaction) => {
    const li = document.createElement("li");

    li.innerHTML = transaction.amount;

    list.appendChild(li);
  });
}

renderList();