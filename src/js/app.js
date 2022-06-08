
const displayImage = (e) => {
  let imageId = e.id;
  console.log(imageId);

  let img = document.getElementById("img");

  let doorIlusion = document.getElementsByClassName("door_ilusion");

  img.setAttribute("src", `./build/img/${imageId}.jpg`);

  var tl = new TimelineLite();

  tl.fromTo(
    doorIlusion,
    1,
    { boxShadow: "inset 0em 0em 0em #000" },
    { boxShadow: "inset 0em 3em 2em #000", ease: Power4.easeOut }
  )
    .fromTo(img, 1, { top: "-240px" }, { top: "80px", ease: Power4.easeOut })
    .fromTo(
      doorIlusion,
      0.03,
      { boxShadow: "inset 0em 3em 2em #000" },
      { boxShadow: "inset 0em 0em 0em #000", ease: Power4.easeOut }
    )
    .fromTo(
      doorIlusion,
      0.01,
      { overflow: "hidden" },
      { overflow: "visible", ease: Power4.easeOut }
    )
    .fromTo(img, 1, { scale: 1 }, { scale: 1.4, ease: Back.easeOut.config(4) });

  tl.eventCallback("onStart", disableLinks);

  tl.eventCallback("onComplete", enableLinks);

  let links = document.getElementsByClassName("country");

  function disableLinks() {
    for (l = 0; l < links.length; l++) {
      if (links[l].getAttribute("id") === imageId) {
        links[l].style.pointerEvents = "none";
      }
    }
  }

  function enableLinks() {
    for (l = 0; l < links.length; l++) {
      links[l].style.pointerEvents = "auto";
    }
  }
};
