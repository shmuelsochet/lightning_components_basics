({
    doInit: function (component, event, helper) {
        let action = component.get("c.getItems");
        
        action.setCallback(this, function (response) {
            let state = response.getState();
            
            if (state === 'SUCCESS') {
                component.set("v.items", response.getReturnValue());
            } else {
                alert("getItems() failed with state: " + state);
            }
            
        });
        
        $A.enqueueAction(action);
    },
    handleAddItem : function(component, event, helper) {
        let newItem = event.getParam("item");
        
        let action = component.get("c.saveItem");
            
        action.setParams({"item": item});
            
        action.setCallback(this, function(response) {
            let state = response.getState();
            
            if(state === 'SUCCESS') {
                let items = component.get("v.items");
                items.push(response.getReturnValue());
                component.set("v.items", items);
                
            } else {
                alert("saveItem() failed with state: " + state);
            }
            
        });
        
        $A.enqueueAction(action);
        
        //helper.addItem(component, newItem)
    }
})