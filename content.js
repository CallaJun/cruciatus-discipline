// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var currentURL = $("a[href^='http']").eq(0).attr("href");

      alert(currentURL);
    }
  }
);