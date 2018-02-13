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
        alert("100");
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {

        console.log('Received Event: ' + id);
    }
};

app.initialize();