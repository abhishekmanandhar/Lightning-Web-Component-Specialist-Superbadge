import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import { LightningElement, api, track, wire } from 'lwc';

export default class BoatSearchResults extends LightningElement {
    boatTypeId = '';

    @api 
    searchBoats(boatTypeId){
        this.boatTypeId = boatTypeId;
    }

    @wire(getBoats, {boatTypeId: '$boatTypeId'})
    wiredBoats({data, error}){
        if(data){
            this.notifyLoading(false);
            this.boats = data;
        } else if(error){
            this.notifyLoading(false);
            this.error = error;
            this.boats = undefined;
        }
    }

    
}