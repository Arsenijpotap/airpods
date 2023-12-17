document.getElementById("black").style = "display:none;";
document.getElementById("header-pink").style = "display:none;";
document.getElementById("header-green").style = "display:none;";
document.getElementById("header-blue").style = "display:none;";
document.getElementById("header-white").style = "display:none;";
document.getElementById("img-pink").style = "display:none;";
document.getElementById("img-green").style = "display:none;";
document.getElementById("img-blue").style = "display:none;";
document.getElementById("img-white").style = "display:none;";
document.getElementById("airpods-second-white").style = "display:none;";
document.getElementById("airpods-second-blue").style = "display:none;";
document.getElementById("airpods-second-green").style = "display:none;";
document.getElementById("airpods-second-pink").style = "display:none;";

function resert() {
  [...document.getElementsByClassName("select-button")].forEach((element) => {
    element.style = "display:flex;";
  });
  [...document.getElementsByClassName("header-content-image")].forEach(
    (element) => {
      element.style = "display:none;";
    }
  );
  [...document.getElementsByClassName("image-info")].forEach((element) => {
    element.style = "display:none;";
  });
  [...document.getElementsByClassName("second-info-image")].forEach(
    (element) => {
      element.style = "display:none;";
    }
  );
}

function setcolor(color) {
  resert();
  document.getElementById(color).style = "display:none;";
  document.getElementById("header-" + color).style = "display:flex;";
  switch (color) {
    case "white":
      document.getElementsByClassName("header")[0].style =
        "background: linear-gradient(180deg, #FAFAFA 0%, rgba(235, 235, 235, 0.00) 100%);";
      break;
    case "pink":
      document.getElementsByClassName("header")[0].style =
        "background: linear-gradient(180deg, #F3D6D1 0%, rgba(235, 235, 235, 0.00) 100%);";
      break;

    case "blue":
      document.getElementsByClassName("header")[0].style =
        "background: linear-gradient(180deg, #CADBEB 0%, rgba(235, 235, 235, 0.00) 100%);";

      break;
    case "green":
      document.getElementsByClassName("header")[0].style =
        "background: linear-gradient(180deg, #DDEAD9 0%, rgba(235, 235, 235, 0.00) 100%);";
      break;
    case "black":
      document.getElementsByClassName("header")[0].style =
        "background: linear-gradient(180deg, #B6B6B6 0%, rgba(235, 235, 235, 0.00) 100%);";
      break;
  }
  document.getElementById("img-" + color).style = "display:flex;";
  document.getElementById("airpods-second-" + color).style = "display:flex;";
}
