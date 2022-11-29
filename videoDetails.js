const getData = JSON.parse(localStorage.getItem("Details"));

const container = document.getElementById("Grid");

const Info = document.getElementById("Information");

const PlayVideo = () => {

  let iframe = document.createElement("iframe");

  iframe.src = `https://www.youtube.com/embed/${getData.videoId}?&mute=1&autoplay=1`;

  iframe.width = "100%";
  iframe.height = "100%";
  iframe.setAttribute("allowfullscreen", true);
  iframe.setAttribute("autoplay", true);
  iframe.setAttribute("frameboarder", "0");
  iframe.setAttribute("allow", "accelerometer");
  iframe.setAttribute("encrypted-media", true);
  iframe.setAttribute("gyroscope", true);
  iframe.setAttribute("picture-in-picture", true);

  container.append(iframe);

  const p = document.createElement("p");
  p.innerText = getData.title;
  p.id = "title";

  const p1 = document.createElement("p");
  p1.innerText = getData.channelTitle;
  p1.id = "channelTitle";

  const p2 = document.createElement("p");
  p2.innerText = `Description:-${getData.description}`;
  p2.id = "channelTitle";

  Info.append(p, p1, p2);
};
