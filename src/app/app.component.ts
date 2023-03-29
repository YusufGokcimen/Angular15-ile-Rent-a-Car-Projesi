import { Component } from '@angular/core';
import { Model, User, Car, RentACar } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model=new Model();//class nesnesi
  userId = 0;
  carId = 0;
  rentACarId = 0;
  car:any;
  addUser(name:any, surname:any,gander:any,age:any,licance:any){
    this.userId++;
    let user = new User(this.userId,name,surname,gander,age,licance);
    this.model.addUser(user);
  }

  addCar(brand:any,model:any,color:any,price:any){
    this.carId++;
    let car=new Car(this.carId,brand,model,color,price);
    this.model.addCar(car)
  }

  addRentACar(userid:any,carid:any,day:any){
    this.rentACarId++;
    this.car=this.model.Cars.find((item: { Id: any; })=>item.Id=carid);
    let total=day* this.car.Price;
    let rent=new RentACar(this.rentACarId,userid,carid,day,total);
    this.model.addRentACar(rent);
  }

  getUserList(){
    return this.model.Users;
  }
  getCarList(){
    return this.model.Cars;
  }
  getRentACarList(){
    return this.model.RentACars;
  }
}
