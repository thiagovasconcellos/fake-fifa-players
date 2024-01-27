export class Athletic {
  heightInMeters: number;
  weightInKg: number;
  attributes: {
    acceleration: number;
    agility: number;
    balance: number;
    jumping: number;
    reactions: number;
    sprintSpeed: number;
    stamina: number;
    strength: number;
  };

  constructor() {
    this.heightInMeters = parseFloat((1.6 + Math.random() * 0.4).toFixed(2));
    this.weightInKg = parseFloat((45 + Math.random() * 35).toFixed(2));
    this.attributes = this.calculateAttributes();
  }
  calculateAttributes(): {
    acceleration: number;
    agility: number;
    balance: number;
    jumping: number;
    reactions: number;
    sprintSpeed: number;
    stamina: number;
    strength: number;
  } {
    let baseValue = () => Math.round(55 + Math.random() * 20);

    let attributes = {
      acceleration: baseValue(),
      agility: baseValue(),
      balance: baseValue(),
      jumping: baseValue(),
      reactions: baseValue(),
      sprintSpeed: baseValue(),
      stamina: baseValue(),
      strength: baseValue(),
    };

    if (this.heightInMeters < 1.75) {
      attributes.acceleration += 5;
      attributes.agility += 5;
    } else {
      attributes.jumping += 5;
      attributes.strength += 5;
    }

    return attributes;
  }

  public determinePosition(): string {
     let positions = [];

     if (this.heightInMeters <= 1.8) {
       positions = [
         "CDM",
         "CM",
         "CAM",
         "RM",
         "RW",
         "LM",
         "LW",
         "RF",
         "CF",
         "LF",
         "ST",
       ];
     } else if (this.heightInMeters <= 1.9) {
       positions = ["GK", "RB", "RWB", "CB", "LB", "LWB", "ST"];
     } else if (this.heightInMeters <= 1.95) {
       positions = ["GK", "RB", "RWB", "CB", "LB", "LWB"];
     } else {
       positions = ["GK"];
     }

     const randomIndex = Math.floor(Math.random() * positions.length);
     return positions[randomIndex];
  }
}
