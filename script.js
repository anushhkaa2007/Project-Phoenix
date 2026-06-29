function handleBegin() {
  alert("🚀 Begin Day 1");
}

function showDate() {
  const dateElement = document.getElementById("today-date");
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  dateElement.textContent = today.toLocaleDateString("en-US", options);
}

showDate();