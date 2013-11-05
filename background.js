chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request.method == 'getOptions') {
      var options = {};
      if (localStorage['options']) {
        try {
          options = JSON.parse(localStorage['options']);
        } catch (e) {
        }
      }
      sendResponse({options: options});
    }
  }
);