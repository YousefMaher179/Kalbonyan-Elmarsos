function first() {
  alert("hi, there!");
}
function second(name) {
  alert("hi " + name);
}
first();
second("Yousef");

function brandNew(one, two, three) {
  const fullName = `${one} ${two} ${three}`;
  return fullName;
}
const combineName = brandNew("Yousef ", "Maher ", "Elkhayat ");
alert("hi " + combineName);

const task3Element = document.getElementById("task-3");
task3Element.addEventListener("click", first);
