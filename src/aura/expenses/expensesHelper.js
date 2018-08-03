({
	createExpense : function(component, expense) {
            
        this.saveExpense(component, expense, function (response) {
            
            let state = response.getState();
            
            if (state === 'SUCCESS') {

        		var expenses = component.get("v.expenses");
                expenses.push(response.getReturnValue());
                component.set("v.expenses", expenses);
                
            } else {
                alert("Save failed with state: " + state)
            }
            
            
        });
 
	},
    updateExpense: function(component, updatedExpense) {
        this.saveExpense(component, updatedExpense)
    },
    saveExpense: function(component, expense, callback) {
        
        let action = component.get("c.saveExpense");
        action.setParams({"expense": expense});
       
        if (callback) {
            action.setCallback(this, callback)
        }
        
        $A.enqueueAction(action);
    }
})