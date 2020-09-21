import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   changeColor: boolean = false;



   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem(newEquipment:object):boolean {
    let result = false;

     this.cargoHold.push(newEquipment);
     this.cargoMass += newEquipment['mass'];

     if (this.cargoMass >= 1800) {
       result = true;
     }
     return result;
   }
   
   isCargoFull(equipment: object):boolean{
    let result = false;
    let newMass = equipment['mass'] + this.cargoMass;
    if( newMass > this.maximumAllowedMass || this.cargoHold.length === this.maxItems) {
      result =  true;
    }
    return result;
   }

}
