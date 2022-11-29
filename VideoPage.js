function addDetails(v, t, ct, d) {
  this.videoId = v;
  this.title = t;
  this.channelTitle = ct;
  this.description = d;
}
//Search fetch

const searchVideos = async () => {
  try {
    const query = document.getElementById("query").value;

    const API_KEY = `AIzaSyCxCGRmZ8v1-Bw8CPmJmDq2wXjI8nxl79c`;

    const Fetch = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
    );

    const First = await Fetch.json();

    const Main = First.items;

    appendVideos(Main);
  } catch (error) {
    console.log("error:", error);
  }
};

let container_div = document.getElementById("container");

// SerchVideo Append Karna Ka function

const grid = document.getElementById("Grid");

const iNFo = document.getElementById("Information");

const appendVideos = (data) => {
  grid.innerHTML = null;

  const iframe = document.createElement("iframe");

  iframe.src = `https://www.youtube.com/embed/Xw0pwI-2BjQ`;
  iframe.width = "100%";
  iframe.height = "500px";
  iframe.setAttribute("allowfullscreen", true);
  iframe.setAttribute("autoplay",true);
  iframe.setAttribute("mute",true)
  iframe.setAttribute("frameboarder", "0");
  iframe.setAttribute("allow", "accelerometer");
  iframe.setAttribute("encrypted-media", true);
  iframe.setAttribute("gyroscope", true);
  iframe.setAttribute("picture-in-picture", true);

  const div = document.createElement("div");

  div.append(iframe);

  grid.append(div);

  iNFo.innerHTML = null;
  container_div.innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;

    const videoId = id.videoId;

    const thumbnail = snippet.thumbnails.high.url;

    const channel_name = snippet.channelTitle;
    const Description = snippet.description;

    const div = document.createElement("div");
    div.style.cursor = "pointer";

    const img = document.createElement("img");

    img.src = thumbnail;
    img.style.width = "95%";

    const title_html = document.createElement("p");
    title_html.setAttribute("id", "title");

    title_html.innerText = title;

    const channel_html = document.createElement("p");
    channel_html.setAttribute("id", "channel_name");
    channel_html.innerText = channel_name;

    div.append(img, title_html, channel_html);

    container_div.append(div);

    div.onclick = () => {
      let gift = new addDetails(videoId, title, channel_name, Description);

      localStorage.setItem("Details", JSON.stringify(gift));

      window.location.href = "videoDetails.html";
    };
  });
};
