public with sharing class BoatDataService {
    @AuraEnabled(cacheable = true)
    public static List<BoatType__c> getBoatTypes(){
        return [SELECT Id, Name FROM BoatType__c WITH SECURITY_ENFORCED ORDER BY Name];
    }

    @AuraEnabled(cacheable = true)
    public static List<Boat__c> getBoats(String boatTypeId){
        String query = 'SELECT Id, Name, Description__c, Geolocation__Latitude__s, Geolocation__Longitude__s, Picture__c, Contact__r.Name, BoatType__c, BoatType__r.Name, Length__c, Price__c FROM Boat__c';
        
        if(String.isNotBlank(boatTypeId)){
            query += 'WHERE BoatType__c = :boatTypeId]';
        }

        Database.query(query);
    }
}