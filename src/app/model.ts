export class Model {
    Users:any;
    Cars:any;
    RentACars:any;
    constructor() {
        this.Users=[];
        this.Cars=[];
        this.RentACars=[];
    }

    addUser(user:User){
        this.Users.push(user);
    }
    addCar(car:Car){
        this.Cars.push(car);
    }
    addRentACar(rent:RentACar){
        this.RentACars.push(rent);
    }
}

export class User {
    Id;
    Name;
    Surname;
    Age;
    Gander;
    Licance;
    constructor(id:any,name:any,surname:any,age:any,gander:any,licance:any) {
        this.Id=id;
        this.Name=name;
        this.Surname=surname;
        this.Age=age;
        this.Gander=gander;
        this.Licance=licance;
    }
}
export class Car {
    Id;
    Brand;
    Model;
    Color;
    Price;
    constructor(id:any,brand:any,model:any,color:any,price:any) {
        this.Id=id;
        this.Brand=brand;
        this.Model=model;
        this.Color=color;
        this.Price=price;
    }
}
export class RentACar {
    Id;
    UserId;
    CarId;
    Day;
    TotalPrice;
    constructor(id:any,userid:any,carid:any,day:any,totalprice:any) {
        this.Id=id;
        this.UserId=userid;
        this.CarId=carid;
        this.Day=day;
        this.TotalPrice=totalprice;
    }
}