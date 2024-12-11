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
function getNotifications() {
  const notifications = localStorage.getItem("notifications");
  if (notifications) {
    return JSON.parse(notifications);
  } else {
    return null;
  }
}

function setNotifications(data) {
  const notifications = JSON.stringify(data);
  localStorage.setItem("notifications", notifications);
}

function clearStorage() {
  localStorage.clear();
}

function getTheme() {
  return localStorage.getItem("theme");
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

export { getUser, setUser, getTransactions, setTransactions, getNotifications, setNotifications, clearStorage, getTheme, setTheme };
