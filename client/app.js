const h1 = document.querySelector("h1");
console.log("fresh");
async function changeH1() {
  const response = await fetch(
    "https://vite-test-pushing-from-local.onrender.com/"
  );
  const text = await response.json;
  h1.textContent = await text["message"];
}

changeH1();
