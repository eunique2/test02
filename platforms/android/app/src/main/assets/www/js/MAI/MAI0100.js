
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
    signaturePad = new SignaturePad(document.getElementById("signature"), {dotSize: 1});
    switch (id) {
      case "deviceready":
        //테스트 버튼 클릭
        $("#testReq1").unbind("click").click(function() {
          app.postComm_test();
        });
        //뒤로 가기 버튼
        $("#hisBack").unbind("click").click(function() {
          history.back();
        });
        //출력
        $("#export").unbind("click").click(function() {
          var imageURI = signaturePad.toDataURL();
          $("#preview").attr("src", imageURI);
        });
        //초기화
        $("#reset").unbind("click").click(function() {
          signaturePad.clear();
        });
        break;
      default:

    }
  },

  postComm_test: function() {
    cordovaHTTP.get("https://appstore.dongwha.com/DMM/DMM1101.json?message=", {}, {}, function(res) {
      console.log(res.status);
      try {
        console.log(res.data);
        $("textarea[name=resData]").text($("textarea[name=resData]").text() + res.data);
      } catch (e) {
        console.error("JSON Parse Error");
      }
    });
  }
};
var signaturePad = undefined;
app.initialize();
