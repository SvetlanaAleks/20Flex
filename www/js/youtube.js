"use strict";function youtubeShowVideo(){var t,e,i,s,o;for(s=document.getElementsByClassName("youtube"),o=0;o<s.length;o++)i=s[o],t=document.createElement("img"),t.setAttribute("src","http://i.ytimg.com/vi/"+i.id+"/hqdefault.jpg"),t.setAttribute("class","thumb"),e=document.createElement("div"),e.setAttribute("class","play"),i.appendChild(t),i.appendChild(e),i.onclick=function(){var t=document.createElement("iframe");t.setAttribute("src","https://www.youtube.com/embed/"+this.id+"?autoplay=1&disablekb=0&autohide=1&border=0&wmode=opaque&enablejsapi=1"),t.style.width=this.style.width,t.style.height=this.style.height,this.parentNode.replaceChild(t,this)}}youtubeShowVideo();