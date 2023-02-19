const BASE_URL = "http://localhost:8000/web_analysis";
const FOCUS_URL = "http://localhost:5001/focus";

console.log("injection.js loaded");
setInterval(() => {
  const headings = [
    ...new Set(
      [...document.querySelectorAll("h1")].map((el) => el?.innerText?.trim())
    ),
  ].join("");
  console.log("[aly] headings", headings);
  fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: document.querySelector("title")?.innerText,
      header: headings,
      url: window.location.href,
      content: document.querySelector("body")?.innerText,
    }),
  })
    .then((r) => r.json())
    .then((r) => {
      if (!r?.focused) {
        fetch(FOCUS_URL)
          .then((r) => r.json())
          .then((fr) => {
            console.log("[aly] focus", r);
            if (fr.focusMode.enabled) {
              alert("hi");
            }
          });
      }
    });
}, 10000);
