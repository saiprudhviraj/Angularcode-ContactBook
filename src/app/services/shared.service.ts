import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StatusChanged } from '../Dtos/Status_changed';



@Injectable()
export class SharedService {
    userLoggedStatus = new BehaviorSubject<StatusChanged>(new StatusChanged());
    userLoggedStatusChanged = this.userLoggedStatus.asObservable();
    setuserStatus(statusChanged: StatusChanged) {
        this.userLoggedStatus.next(statusChanged);
    }
    setActionStateFlagReceive = new BehaviorSubject<boolean>(false);
    setActionStateFlagReceived = this.setActionStateFlagReceive.asObservable();
    setActionStateBool(flag: boolean) {
        this.setActionStateFlagReceive.next(flag);
    }
    contactsRev = new BehaviorSubject<any>('');
    contactsObs = this.contactsRev.asObservable();
    shareData(data: any) {
        this.contactsRev.next(data);
    }
    contactsCreate = new BehaviorSubject<any>('');
    contactsCreated = this.contactsCreate.asObservable();
    newContact(data: any) {
        this.contactsCreate.next(data);
    }
    singleContactsRev = new BehaviorSubject<any>('');
    singleContactsObs = this.singleContactsRev.asObservable();
    shareSingleData(data: any) {
        this.contactsRev.next(data);
    }

    setSignInFlagReceive = new BehaviorSubject<boolean>(false);
    setSignInFlagReceived = this.setSignInFlagReceive.asObservable();
    setSignInStateBool(flag: boolean) {
        this.setSignInFlagReceive.next(flag);
    }
}

