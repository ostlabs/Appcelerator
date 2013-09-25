// Credits:

// http://developer.appcelerator.com/question/137662/android-toast-notification-in-iphone
// http://blog.christian-baer.com/index.php/titanium-android-toast-like-notifications-in-iphone/

/**
 * wrapper for Notification/Tooltip/MessageLayer on Android & iPhone
 * - shows a message (customMessage) for n (interval) miliseconds and then self closes
 * - iPhone: alternative to Android toast notification
 * 
 * @param string customMessage
 * @param int interval
 */
showMessageTimeout = function(customMessage,interval){

	if(isIphone){
	    // window container
		indWin = Titanium.UI.createWindow();

	    //  view
	    var indView = Titanium.UI.createView({height:150,width:250,borderRadius:10,backgroundColor:'#bbb',opacity:.8});

	    indWin.add(indView);

	        // message
	    var message = Titanium.UI.createLabel({
	        text: customMessage && typeof(customMessage!=='undefined') ? customMessage : L('please_wait'),
	        color:'#fff',width:'auto',height:'auto',textAlign:'center',
	        font:{fontSize:14,fontWeight:'bold'}});

	        indView.add(message);
	        indWin.open();

	        interval = interval ? interval : 2500;
	        setTimeout(function(){
	            indWin.close({opacity:0,duration:1000});
	        },interval
	    );
	}

	if(isAndroid){
		var n = Ti.UI.createNotification({
			message: customMessage && typeof(customMessage!=='undefined') ? customMessage : L('please_wait'),
		});
		n.duration = Ti.UI.NOTIFICATION_DURATION_SHORT;
		n.show();
	}

};
