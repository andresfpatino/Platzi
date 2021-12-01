from car import Car

if __name__ == '__main__':

    car = Car()
    car.license = "MWW055"
    car.driver = "Felipe"
    print(vars(car))

    car2 = Car()
    car2.license = "SGE37E"
    car2.driver = "Juan"
    print(vars(car2))