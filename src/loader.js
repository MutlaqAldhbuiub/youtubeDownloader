s = document.createElement("script");
s.src = chrome.extension.getURL("src/youtubedl.js");


s.setAttribute("data-ext",chrome.runtime.id);
s.id = "vdyt";



/*
s.onload = function(){
    this.remove();
};
*/

(document.head || document.documentElement).appendChild(s);


window.addEventListener("message",function(e){
    console.log("Download : "+e);
    var ext = e.data.type.split("/")[1].split(";")[0];
    var fn = e.data.name +"."+ext;

    chrome.runtime.sendMessage({name: fn, url: e.data.url},function(res){
        console.log(res);
    });

    chrome.downloads.download({url:e.data.url,filename: fn});
})