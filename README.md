Blocket reply autocomplete
==========================
A Google Chrome Extension that autocompletes the fields when replying to an ad on [Blocket.se](www.blocket.se). Blocket is a website of classified ads widely used in Sweden.

## Why
If you have used Blocket for doing an active search, like looking for an apartment, you know you need to reply to lots of ads. Yet you also want each message to be slightly customised.

## Setting up

On Google Chrome, open the _Extensions page_ (chrome://chrome/extensions/) and enable Developer Mode. Then, click on "Load unpacked extension..." and select the folder where you have deployed the source code.

Open the Options page for the extension and input the name, email, phone number and message text. You can use placeholders in your message that will be replaced with data from the ad. The available placeholders are:
* advertiser_short_name
* ad_id

You can add placeholders to your message text by wrapping the above identifiers between `{{` and `}}`. For instance, this could be your message:
  
  ```
  Hej {{advertiser_short_name}},
  
  Jag heter John, är 24 år gammal och kommer från Stockholm. Jag älskar din lägenhet!
  ```

## How it works
This is a content script extension, which means you don't need to click on any button to control it. Go to a page on Blocket and click on "Mejla annonsören". The reply form will be autocompleted. You can review and modify the text before submitting it.
