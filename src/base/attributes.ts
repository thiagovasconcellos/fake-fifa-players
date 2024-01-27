export class RoleAttributes {
  aggression: number;
  ballControl: number;
  composure: number;
  crossing: number;
  curve: number;
  defending: number;
  dribbling: number;
  finishing: number;
  freeKick: number;
  heading: number;
  interceptions: number;
  longPassing: number;
  longShot: number;
  marking: number;
  pace: number;
  passing: number;
  penalties: number;
  physical: number;
  attackingPosition: number;
  shooting: number;
  shortPassing: number;
  shotPower: number;
  slidingTackle: number;
  standingTackle: number;
  vision: number;
  volleys: number;

  constructor(position: string) {
    this.aggression = this.generateBaseAttribute();
    this.ballControl = this.generateBaseAttribute();
    this.composure = this.generateBaseAttribute();
    this.crossing = this.generateBaseAttribute();
    this.curve = this.generateBaseAttribute();
    this.defending = this.generateBaseAttribute();
    this.dribbling = this.generateBaseAttribute();
    this.finishing = this.generateBaseAttribute();
    this.freeKick = this.generateBaseAttribute();
    this.heading = this.generateBaseAttribute();
    this.interceptions = this.generateBaseAttribute();
    this.longPassing = this.generateBaseAttribute();
    this.longShot = this.generateBaseAttribute();
    this.marking = this.generateBaseAttribute();
    this.pace = this.generateBaseAttribute();
    this.passing = this.generateBaseAttribute();
    this.penalties = this.generateBaseAttribute();
    this.physical = this.generateBaseAttribute();
    this.attackingPosition = this.generateBaseAttribute();
    this.shooting = this.generateBaseAttribute();
    this.shortPassing = this.generateBaseAttribute();
    this.shotPower = this.generateBaseAttribute();
    this.slidingTackle = this.generateBaseAttribute();
    this.standingTackle = this.generateBaseAttribute();
    this.vision = this.generateBaseAttribute();
    this.volleys = this.generateBaseAttribute();

    this.adjustAttributesForPosition(position);
  }

  private generateBaseAttribute(): number {
    return Math.round(55 + Math.random() * 20);
  }

  private adjustAttributesForPosition(position: string): void {
    const randomAdjustment = () => Math.floor(Math.random() * 7) + 6;

    const forwardPositions = ["ST", "LW", "RW", "CF"];
    const midfieldPositions = ["CM", "CAM", "CDM", "LM", "RM"];
    const defendingPositions = ["CB", "LB", "LWB", "RB", "RWB"];
    const goalkeeperPosition = ["GK"];

    if (forwardPositions.includes(position)) {
      this.aggression -= randomAdjustment();
      this.ballControl += randomAdjustment();
      this.composure -= randomAdjustment();
      this.crossing -= randomAdjustment();
      this.curve += randomAdjustment();
      this.defending -= randomAdjustment();
      this.dribbling += randomAdjustment();
      this.finishing += randomAdjustment();
      this.freeKick += randomAdjustment();
      this.heading -= randomAdjustment();
      this.interceptions -= randomAdjustment();
      this.longPassing -= randomAdjustment();
      this.longShot += randomAdjustment();
      this.marking -= randomAdjustment();
      this.pace -= randomAdjustment();
      this.passing -= randomAdjustment();
      this.penalties += randomAdjustment();
      this.physical -= randomAdjustment();
      this.attackingPosition += randomAdjustment();
      this.shooting += randomAdjustment();
      this.shortPassing -= randomAdjustment();
      this.shotPower += randomAdjustment();
      this.slidingTackle -= randomAdjustment();
      this.standingTackle -= randomAdjustment();
      this.vision -= randomAdjustment();
      this.volleys += randomAdjustment();
    } else if (midfieldPositions.includes(position)) {
      this.heading -= randomAdjustment();
      this.shotPower -= randomAdjustment();
      this.marking -= randomAdjustment();
      this.slidingTackle -= randomAdjustment();
      this.standingTackle -= randomAdjustment();
      this.vision += randomAdjustment();
      this.passing += randomAdjustment();
      this.shortPassing += randomAdjustment();
      this.ballControl += randomAdjustment();
      this.composure += randomAdjustment();
      this.crossing += randomAdjustment();
    } else if (defendingPositions.includes(position)) {
      this.curve -= randomAdjustment();
      this.dribbling -= randomAdjustment();
      this.finishing -= randomAdjustment();
      this.longShot -= randomAdjustment();
      this.shotPower -= randomAdjustment();
      this.volleys -= randomAdjustment();
      this.aggression += randomAdjustment();
      this.defending += randomAdjustment();
      this.heading += randomAdjustment();
      this.interceptions += randomAdjustment();
      this.marking += randomAdjustment();
      this.physical += randomAdjustment();
    } else if (goalkeeperPosition.includes(position)) {
      this.curve -= randomAdjustment();
      this.dribbling -= randomAdjustment();
      this.finishing -= randomAdjustment();
      this.longShot -= randomAdjustment();
      this.shotPower -= randomAdjustment();
      this.volleys -= randomAdjustment();
      this.aggression += randomAdjustment();
      this.defending += randomAdjustment();
      this.heading += randomAdjustment();
      this.interceptions += randomAdjustment();
      this.physical += randomAdjustment();
    }
  }
}

