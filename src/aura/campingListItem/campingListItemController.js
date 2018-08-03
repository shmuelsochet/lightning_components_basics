({
    packItem : function(component, event, helper) {
       
        //event.getSource().set("v.disabled", true);
        
        if (component.get("v.item.Packed__c")) {
            component.set("v.item.Packed__c", true);
        }
        
    }
})