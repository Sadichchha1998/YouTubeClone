function addDetails(v, t, ct, d) {
  this.videoId = v;
  this.title = t;
  this.channelTitle = ct;
  this.description = d;
}
//Search fetch

let container_div = document.getElementById("container");

const searchVideos = async () => {

  container_div.innerHTML = null;
  let Img = document.createElement("img");

  Img.src = "https://i.stack.imgur.com/kOnzy.gif";
  Img.style.marginLeft="400px"

  container_div.append(Img);

  setTimeout(() => {
    Action();
  }, 3000);

  // try {
  //   const query = document.getElementById("query").value;

  //   const API_KEY = `AIzaSyCxCGRmZ8v1-Bw8CPmJmDq2wXjI8nxl79c`;

  //   const Fetch = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`
  //   );

  //   const First = await Fetch.json();

  //   const Main = First.items;

  //   appendVideos(Main);
  // } catch (error) {
  //   console.log("error:", error);
  // }
};

let Action = async () => {
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

// SerchVideo Append Karna Ka function

const appendVideos = (data) => {
  container_div.innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;

    const videoId = id.videoId;

    const thumbnail = snippet.thumbnails.high.url;

    const channel_name = snippet.channelTitle;
    const Description = snippet.description;

    const div = document.createElement("div");

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

//Most Popular Video Append  function

const AppendVideos = (data) => {
  container_div.innerHTML = null;

  data.forEach(({ snippet, id }) => {
    const title = snippet.title;

    const videoId = id;

    const thumbnail = snippet.thumbnails.high.url;

    const channel_name = snippet.channelTitle;
    const Description = snippet.description;

    const div = document.createElement("div");

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

//Most Popular fetch

const Videos = async () => {
  const apiKey = `AIzaSyD1FGuoWfmreWPY24edEaN8bJyOwKcNcNY`;

  const most_popular_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${apiKey}`;

  const Fetch = await fetch(most_popular_url);

  const main = await Fetch.json();

  const Actual = main.items;

  AppendVideos(Actual);
};
