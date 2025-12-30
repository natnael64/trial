function send() {
  const text = document.getElementById("msg").value;

  fetch("/.netlify/functions/insert-message", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  })
  .then(res => res.json())
  .then(data => console.log(data));
}
