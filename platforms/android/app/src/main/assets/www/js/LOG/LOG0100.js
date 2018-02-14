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
      case "deviceready": //화면 메모리 할당 후 이벤트 객체 정의
        //테스트 버튼 클릭
        $("#testReq1").unbind("click").click(function() {
          app.movePage("../MAI/MAI0100.html");
        });
        //앞으로 가기 버튼
        $("#hisFwd").unbind("click").click(function(){
          history.forward();
        });
        break;
      default:

    }
  },

  movePage: function(page) {
    location.href = page;
  }
};

app.initialize();
