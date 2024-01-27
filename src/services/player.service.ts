import { Athletic } from '../base/athletic';
import { getRandomCountry } from '../base/country'
import { generateRandomBio } from '../base/bio';
import { RoleAttributes } from '../base/attributes';
import { calculateOverall } from '../base/overall';

export function createRandomPlayer() {
  const country = getRandomCountry();
  const player = generateRandomBio(country);
  const athletics = new Athletic();
  const position = athletics.determinePosition();
  const roleAttributes = new RoleAttributes(position);
  player.position = position;
  player.overall = calculateOverall(athletics.attributes, roleAttributes); 
  player.athletics = athletics;
  player.roleAttributes = new RoleAttributes(player.position);

  return player;
}

export function createRandomPlayersList(amount: number) {
  const players = [];

  for (let index = 0; index < amount; index++) {
    const country = getRandomCountry();
    const player = generateRandomBio(country);
    const athletics = new Athletic();
    const position = athletics.determinePosition();
    const roleAttributes = new RoleAttributes(player.position);
    player.position = position;
    player.overall = calculateOverall(athletics.attributes, roleAttributes);
    player.athletics = athletics;
    player.roleAttributes = roleAttributes;
    
    players.push(player);
  }

  return players;
}
