# ZeroBit Browser Example

### Upload File Directly from Browser

![zerobit](https://user-images.githubusercontent.com/3782456/50046026-989e7180-00d7-11e9-8511-7732ccbe56dc.png)

Simply upload a file through a form input. Wait, then the URL and hash will be displayed in a blue box. To see it in action, simply open the `index.html` file in your browser. 

#### Code

Full Code in [folder](./uploadFileBrowser)

```js
$(".upload-btn").on("click", function (e) {
    // Get form data
    var data = new FormData($(".upload")[0]);

    // Create URL
    var url = BASE_PATH + ACCESS_TOKEN_PARAM

    // Request Body
    var uploadSettings = { 
      "url": url, 
      "data": data, 
      "cache": false, 
      "async": true, 
      "processData": false, 
      "contentType": false, 
      "crossDomain": true, 
      "method": 
      "POST", 
      "mimeType": "multipart/form-data"
    }

    // Upload file
    $.ajax(uploadSettings).done(function (response) {
      // Get Response
      resJson = JSON.parse(response)
      // Jquery styling
      console.log(resJson)
    });
```