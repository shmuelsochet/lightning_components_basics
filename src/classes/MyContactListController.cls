public class MyContactListController {
	@AuraEnabled
    public static List<Contact> getContacts(Id RecordId) {
        return [SELECT Id, FirstName, LastName, Phone, Email from Contact WHERE AccountId = :recordId];
    }
}