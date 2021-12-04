class UberBlack extends Car {

    Map<String, ArrayList<String, Integer>> typeCarAccepted;
    ArrayList<String> seatsMaterial;

    public UberBlack(
        String Licence, 
        Account driver,
        Map<String, ArrayList<String, Integer>> typeCarAccepted,
        ArrayList<String> seatsMaterial){
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatsMaterial = seatsMaterial;
    }
}