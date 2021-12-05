class Main {
    public static void main(String[] args) {  

        UberX UberX = new UberX("MWW055", new Account("Andrés Patiño", "1144185142"), "Chevrolet", "Sonic");
        UberX.passenger = 4;
        UberX.printDataCar();

        Car car2 = new Car("SGE37E", new Account("Fulanito", "1144236898"));
        car2.printDataCar();
    }
}