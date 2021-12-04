function Car(license, driver){
    this.id;
    this.license = license;
    this.driver = driver;
    this.passenger;
}

Car.prototype.printDataCar = function(){
    console.log("License: " + this.license + " - Driver: " + this.driver.name);
}