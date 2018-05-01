import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class DummyData {
  test: any[];
  @Output()
  public UsersInfo:EventEmitter<any[]> = new EventEmitter<any[]>();

  public GetUsersInfo() {
    this.test = [{ Key: "sai@gmail.com",ImagePath:"assets/image/sai.jpg", Value: "123" }, 
    { Key: "prudhvi@gmail.com",ImagePath:"assets/image/prudhvi.jpg", Value: "456" }, 
    { Key: "raj@gmail.com" ,ImagePath:"assets/image/raj.jpg", Value: "789" }];
    this.UsersInfo.emit(this.test);
  }
}
