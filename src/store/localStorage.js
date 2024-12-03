function getUser() {
  const user = localStorage.getItem("userdata");
  if (user) {
    return JSON.parse(user);
  } else {
    return null;
  }
}

function setUser(data) {
  const userdata = JSON.stringify(data);
  localStorage.setItem("userdata", userdata);
}

function getTransactions() {
  const transactions = localStorage.getItem("transactions");
  if (transactions) {
    return JSON.parse(transactions);
  } else {
    return null;
  }
}

function setTransactions(data) {
  const transactions = JSON.stringify(data);
  localStorage.setItem("transactions", transactions);
}

function clearStorage() {
  localStorage.clear();
}

export { getUser, setUser, getTransactions, setTransactions, clearStorage };
