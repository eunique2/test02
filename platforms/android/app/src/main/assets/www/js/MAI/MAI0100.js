var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    this.receivedEvent('deviceready');

  },

  // Update DOM on a Received Event
  receivedEvent: function(id) {
    console.log('Received Event: ' + id);
    switch (id) {
      case "deviceready":
        //테스트 버튼 클릭
        $("#testReq1").unbind("click").click(function() {
          app.postComm_test();
        });
        break;
      default:

    }
  },

  postComm_test: function() {
    cordovaHTTP.get("https://appstore.dongwha.com/DMM/DMM1101.json?message=", {}, {}, function(res) {
      console.log(res.status);
      try{
        console.log(res.data);
        $("textarea[name=resData]").text(res.data);
      } catch(e){
        console.error("JSON Parse Error");
      }
    });
  }
};

app.initialize();
