const h1 = document.createElement("h1");

async function changeH1() {
  const response = await fetch(
    "https://vite-test-pushing-from-local.onrender.com/"
  );
  const text = await response.json;
  h1.textContent = text;
  document.body.appendChild(h1);
}
