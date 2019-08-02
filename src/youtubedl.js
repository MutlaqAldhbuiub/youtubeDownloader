window.onload = function(){

function downloadVideo(){
    var dl = document.getElementById("videoDownloadDropDown");
    if(dl.className.indexOf("shown") > -1){
        dl.className = dl.className.replace("shown",""); // just replace shown with nothing!
    }else{
    dl.className += " shown";
    }
}

var videoUrls = ytplayer.config.args.url_encoded_fmt_stream_map.split(",").map(function(item){
    return item.split("&").reduce(function(pre, cur){
        cur = cur.split("=");
        return Object.assign(pre, {[cur[0]] : decodeURIComponent(cur[1])});
    },{});
});


console.log("Just loded succffully ! ",videoUrls);

var shareIcon = "<yt-icon-button id='button' class='style-scope ytd-button-renderer style-default size-default'><button id='button' class='style-scope yt-icon-button' aria-label='Share'><yt-icon class='style-scope ytd-button-renderer'><svg viewBox='0 0 24 24' preserveAspectRatio='xMidYMid meet' focusable='false' class='style-scope yt-icon' style='pointer-events: none; display: block; width: 100%; height: 100%;'><g class='style-scope yt-icon'><path d='M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z' class='style-scope yt-icon'></path></g></svg></yt-icon></button></yt-icon-button>";

var container = document.getElementById("top-level-buttons");

var btn = document.createElement("button");
btn.className = "yt-simple-endpoint style-scope ytd-button-renderer";
btn.setAttribute("role","button");
btn.id = "downloadVideo";
btn.innerText = "Download";


var dropDown = document.createElement("div");
dropDown.id = "videoDownloadDropDown";
container.appendChild(dropDown);

container.appendChild(btn);

var dropList = document.createElement("ul");
dropDown.appendChild(dropList);

for(i in videoUrls){
    var item = document.createElement("a");
    item.innerText = videoUrls[i]["quality"];
    item.setAttribute("href",videoUrls[i]["url"]);
    dropList.appendChild(item);
}

btn.addEventListener("click",downloadVideo);





}