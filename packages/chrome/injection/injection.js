const BASE_URL = "http://localhost:5001/simil";

console.log("injection.js loaded");
(function () {
  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.querySelector("title")?.innerText,
      header: document.querySelector("h1")?.innerText,
      url: window.location.href,
    }),
  })
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
    });
})();
