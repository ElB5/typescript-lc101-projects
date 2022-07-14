export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKg: number;
    massKg: number;
    cargoItems: []; 
    astronauts: [];

    constructor (name: string, totalCapacityKg: number) {
        this.name;
        this.totalCapacityKg;

    }

    sumMass( items: Payload[] ): number {
        let sum: number =0;
        for (let i=0; i < items.length; i++) {
            sum += items[i].massKg;
        } 
        return sum;
    };

    currentMassKg(): number {   
        return ;
    };

    canAdd(item: Payload): boolean {
        return ;
    };

    addCargo(cargo: Cargo): boolean {
        return ;
    };

    addAstronaut(astronaut: Astronaut): boolean {
        return ;
    };
 }