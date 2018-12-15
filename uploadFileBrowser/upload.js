  const BASE_PATH = "https://api.zero-bit.io/file?access_token="
  const ACCESS_TOKEN_PARAM = ""

  $("#upload-input").on("change", function (e) {
    $("#filename").val($("#upload-input")[0].files[0].name)
  })

  /* 
    Handle File upload
  */ 
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

    // show loader
    $(".wait").show();

    // Upload file
    $.ajax(uploadSettings).done(function (response) {
      // hide loader
      $(".wait").hide();
      
      // Jquery bullshit
      $("#results").fadeIn()

      // Get Response
      resJson = JSON.parse(response)

      // Jquery styling
      console.log(resJson)

      // Update interface
      $("#fileHash").text(resJson.hash)
      $("#fielURL").text(resJson.url)
      $("#fielURL").attr("href", resJson.url)
    });
  });
