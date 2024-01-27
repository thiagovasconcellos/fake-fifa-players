export function calculateOverall(
	athleticsAttributes: any, roleAttributes: any): number {
	const attributesWeight: Record<string, number> = {
		acceleration: 5,
		agility: 5,
		balance: 5,
		jumping: 5,
		reactions: 10,
		sprintSpeed: 5,
		stamina: 5,
		strength: 10,
		aggression: 5,
		ballControl: 10,
		composure: 5,
		crossing: 5,
		curve: 10,
		defending: 10,
		dribbling: 10,
		finishing: 10,
		freeKick: 10,
		heading: 10,
		interceptions: 10,
		longPassing: 5,
		longShot: 10,
		marking: 10,
		pace: 5,
		passing: 10,
		penalties: 10,
		physical: 10,
		attackingPosition: 10,
		shooting: 10,
		shortPassing: 10,
		shotPower: 10,
		slidingTackle: 10,
		standingTackle: 10,
		vision: 5,
		volleys: 10,
	};
	
	let overall = 0;
	let totalWeight = 0;
	
	for (const attribute in attributesWeight) {
    if (attributesWeight.hasOwnProperty(attribute)) {
      const weight = attributesWeight[attribute];
      const athleticsValue = athleticsAttributes[attribute];
      const roleValue = roleAttributes[attribute];

      if (athleticsValue !== undefined) {
        overall += athleticsValue * weight;
        totalWeight += weight;
      } else if (roleValue !== undefined) {
        overall += roleValue * weight;
        totalWeight += weight;
      }
    }
  }

  if (totalWeight === 0) {
    return 0; // Evitar divisão por zero
  }

  overall /= totalWeight;
	
	return Math.round(overall);
}
