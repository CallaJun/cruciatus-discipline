// content.js
/*chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	IF THE ICON CLICKED
    }
  }
);*/
var currentURL = document.location.host;
console.log(currentURL);
if(currentURL.includes("facebook")){
    alert("Get off!");
}