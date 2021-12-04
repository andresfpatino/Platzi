class Main {
    public static void main(String[] args) {  

        Car car = new Car("MWW055", new Account("Andrés Patiño", "1144185142"));

        car.passenger = 4;

        car.printDataCar();

        Car car2 = new Car("SGE37E", new Account("Fulanito", "1144236898"));

        car2.printDataCar();
    }
}