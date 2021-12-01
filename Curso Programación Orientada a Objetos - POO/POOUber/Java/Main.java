class Main {
    public static void main(String[] args) {  

        Car car = new Car();
        car.license = "MWW055";
        car.drive = "Andrés Patiño";
        car.passenger = 4;

        car.printDataCar();

        Car car2 = new Car();
        car2.license = "SGE37E";
        car2.drive = "Fulanito";

        car2.printDataCar();
    }
}