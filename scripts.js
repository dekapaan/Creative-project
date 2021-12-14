let faces = document.querySelectorAll(".cube div");
let cube = document.querySelector(".cube");
let container = document.querySelector(".cube-container");

let positions = [
  "position1",
  "position2",
  "position3",
  "position4",
  "position5",
  "position6",
];

cube.addEventListener("click", () => {
  if (cube.classList.contains(positions[0])) {
    cube.classList.remove(positions[0]);
    cube.classList.add(positions[1]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[3].style.background = 'url("/images/travel.gif")';
    faces[3].style.backgroundSize = "cover";
    faces[3].style.backgroundPosition = "center";
    return;
  } else if (cube.classList.contains(positions[1])) {
    cube.classList.remove(positions[1]);
    cube.classList.add(positions[2]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[4].style.background = 'url("/images/soccer.gif")';
    faces[4].style.backgroundSize = "cover";
    faces[4].style.backgroundPosition = "center";
    return;
  } else if (cube.classList.contains(positions[2])) {
    cube.classList.remove(positions[2]);
    cube.classList.add(positions[3]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[1].style.background = 'url("/images/party.webp")';
    faces[1].style.backgroundSize = "cover";
    faces[1].style.backgroundPosition = "center";
    return;
  } else if (cube.classList.contains(positions[3])) {
    cube.classList.remove(positions[3]);
    cube.classList.add(positions[4]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[2].style.background = 'url("/images/weed.gif")';
    faces[2].style.backgroundSize = "cover";
    faces[2].style.backgroundPosition = "center";
    return;
  } else if (cube.classList.contains(positions[4])) {
    cube.classList.remove(positions[4]);
    cube.classList.add(positions[5]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[5].style.background = 'url("/images/office.gif")';
    faces[5].style.backgroundSize = "cover";
    faces[5].style.backgroundPosition = "center";
    return;
  } else if (cube.classList.contains(positions[5])) {
    cube.classList.remove(positions[5]);
    cube.classList.add(positions[0]);
    faces.forEach((face) => {
      face.style.background = "transparent";
    });
    faces[0].style.background = 'url("/images/money.gif")';
    faces[0].style.backgroundSize = "cover";
    faces[0].style.backgroundPosition = "center";
    return;
  }
});
