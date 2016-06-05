var devcoach = devcoach || {};
devcoach.CallChain = function () {
    var cs = [];
    this.add = function (call) {
        cs.push(call);
    };
    this.execute = function () {
        var wrap = function (call, callback) {
            return function () {
                call(callback);
            };
        };
        for (var i = cs.length-1; i > -1; i--) {
            cs[i] = 
                wrap(
                    cs[i], 
                    i < cs.length - 1 
                        ? cs[i + 1] 
                        : null);
        }
        cs[0]();
    };
};


// Test working or calling code


  function testChainCall(){ 
	  var cc = new devcoach.CallChain(); 
	  cc.add(f1);
	  cc.add(f2); 
	  cc.add(f3); 
	  cc.execute(); 
}




////////////// Second way of callback ok tested Code

var MyRequestsCompleted = (function() {
    var numRequestToComplete, 
        requestsCompleted, 
        callBacks, 
        singleCallBack; 

    return function(options) {
        if (!options) options = {};

        numRequestToComplete = options.numRequest || 0;
        requestsCompleted = options.requestsCompleted || 0;
        callBacks = [];
        var fireCallbacks = function () {
            alert("we're all complete");
            for (var i = 0; i < callBacks.length; i++) callBacks[i]();
        };
        if (options.singleCallback) callBacks.push(options.singleCallback);

        

        this.addCallbackToQueue = function(isComplete, callback) {
            if (isComplete) requestsCompleted++;
            if (callback) callBacks.push(callback);
            if (requestsCompleted == numRequestToComplete) fireCallbacks();
        };
        this.requestComplete = function(isComplete) {
            if (isComplete) requestsCompleted++;
            if (requestsCompleted == numRequestToComplete) fireCallbacks();
        };
        this.setCallback = function(callback) {
            callBacks.push(callBack);
        };
    };
    })();

/////   End of code second way



////////// call way code  ///////
var requestCallback = new MyRequestsCompleted({
    numRequest: 3
});


$.ajax({
    url: '/echo/html/',
    success: function(data) {
        requestCallback.addCallbackToQueue(true, function() {
            alert('Im the first callback');
        });
    }
});
$.ajax({
    url: '/echo/html/',
    success: function(data) {
        requestCallback.addCallbackToQueue(true, function() {
            alert('Im the second callback');
        });
    }
});
$.ajax({
    url: '/echo/html/',
    success: function(data) {
        requestCallback.addCallbackToQueue(true, function() {
            alert('Im the third callback');
        });
    }
});



///////////////////// Thired way of doing

$('#button').click(function() {
    
    $.when(
    
        $.ajax({
            url: '/echo/html/',
            success: function(data) {
                alert('request 1 complete')
            }
        }),
        $.ajax({
            url: '/echo/html/',
            success: function(data) {
                alert('request 2 complete')
            }
        })
    
    ).then(function (resp1, resp2) {
        alert("all request completed");
        alert(resp1);
        alert(resp2);
    });
    
});
