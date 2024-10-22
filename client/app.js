const h1 = document.createElement("h1");
console.log("fresh");
async function changeH1() {
  const response = await fetch(
    "https://vite-test-pushing-from-local.onrender.com/"
  );
  const text = await response.json;
  h1.textContent = await text["message"];
  console.log(test);
  document.body.appendChild(h1);
}
changeH1();
