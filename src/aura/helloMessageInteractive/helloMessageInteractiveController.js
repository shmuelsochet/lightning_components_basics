({
	handleClick : function(component, event, helper) {
		var btnClicked = event.getSource();			// the button
        var btnMessage = btnClicked.get("v.label");	// the button's label
        component.set("v.message", btnMessage);		// update our message
        
        var a = component.get('c.cooller');
        $A.enqueueAction(a);
	},
    cooller: function() {
        console.log("You're cool!");
    },
    handleClick2: function (component, event, helper) {
    	var newMessage = event.getSource().get("v.label");
        console.log("handleClick2: Message " + newMessage);
        console.log(JSON.stringify("handleClick2: Message " + newMessage))
        component.set("v.message", newMessage)
	},
    handleClick3: function (component, event, helper) {
        component.set("v.message", event.getSource().get("v.label"));
    }
})