// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

const button = document.querySelector("button");
const textParagraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParagraph.textContent;
  const promise = Promise.resolve();
  console.log(promise);
  console.log("copied success");
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Feature not available, please copy manually!");
  }
});
