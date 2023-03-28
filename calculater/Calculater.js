const displays = document.getElementById("display");

function btn(num) {
  displays.value += num;
}
function calculate() {
  try {
    displays.value = eval(displays.value);
  } catch (err) {
    alert("invalid");
  }
}

function Clear() {
  displays.value = "";
}
function del() {
  displays.value = displays.value.slice(0, -1);
}
