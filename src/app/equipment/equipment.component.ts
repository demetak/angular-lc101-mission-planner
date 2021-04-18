import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipments: string[] = ["Habitat dome", "Drones", "Food containers", "Oxygen tanks"];

  equipmentBeingEdited: string = "";

  constructor() { }

  ngOnInit() {
  }
  add(newEquipment: string) {
    if (!this.equipments.includes(newEquipment)) {
      this.equipments.push(newEquipment);
    }
  }
  remove(equipment: string) {
    let index = this.equipments.indexOf(equipment);
    this.equipments.splice(index, 1);
  }
  edit(equipment: string) {
    this.equipmentBeingEdited = equipment;
  }
  save(name: string, equipment: string) {
    this.equipments[this.equipments.indexOf(equipment)]=name;
    this.equipmentBeingEdited = null;
  }
}
