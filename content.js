// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
    	//current domain
    	var currentURL = document.location.host;

    	alert(currentURL);
    }
  }
);