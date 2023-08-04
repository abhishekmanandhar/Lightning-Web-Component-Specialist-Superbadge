import { LightningElement, api, track, wire } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';

export default class BoatSearchResults extends LightningElement {
    boatTypeId = '';

    @track
    boats

    @api 
    searchBoats(boatTypeId){
        this.boatTypeId = boatTypeId;
    }

    @wire(getBoats, {boatTypeId: '$boatTypeId'})
    wiredBoats({data, error}){
        if(data){
            console.log(data);
            this.boats = data;
        } else if(error){
            console.log(error);
            this.error = error;
            this.boats = undefined;
        }
    }
}