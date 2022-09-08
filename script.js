window.onload = function () {
  var list = document.querySelectorAll(`[type*="checkbox"]`);
  list.forEach((el) => {
    var checked = JSON.parse(localStorage.getItem(el.id));
    document.getElementById(el.id).checked = checked;
  });
};
save = function () {
  var list = document.querySelectorAll(`[type*="checkbox"]`);
  list.forEach((el) => {
    localStorage.setItem(el.id, el.checked);
    console.log(el.id, el.checked);
  });
};
