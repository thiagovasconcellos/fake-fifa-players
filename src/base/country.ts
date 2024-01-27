import { 
  LocaleDefinition, 
  pt_BR, 
  de, 
  it, 
  es, 
  fr, 
  fr_BE, 
  nl_BE,
  nl,
  pt_PT,
  hr,
  en_US,
  es_MX,
  af_ZA,
  en,

  } from "@faker-js/faker";

export class Country {
  protected cities: string[];
  protected countryName: string;
  protected locale: LocaleDefinition | LocaleDefinition[];

  constructor(
    cities: string[], 
    countryName: string, 
    locale: LocaleDefinition | LocaleDefinition []
    ) {
    this.cities = cities;
    this.countryName = countryName;
    this.locale = locale;
  }

  getCity(): string {
    const randomIndex = Math.floor(Math.random() * this.cities.length);
    return this.cities[randomIndex];
  }

  getCountryName(): string {
    return this.countryName;
  }

  getLocale(): LocaleDefinition | LocaleDefinition[] {
    return this.locale;
  }
}

class Brazil extends Country {
  constructor() {
    super(
      [
        "São Paulo",
        "Rio de Janeiro",
        "Belo Horizonte",
        "Porto Alegre",
        "Florianópolis",
        "Curitiba",
        "Salvador",
        "Fortaleza",
        "Brasília",
        "Manaus",
      ],
      "Brazil",
      pt_BR
    );
  }
}

class Germany extends Country {
  constructor() {
    super(
      [
        "Berlin",
        "Munich",
        "Frankfurt",
        "Hamburg",
        "Cologne",
        "Stuttgart",
        "Düsseldorf",
        "Dortmund",
        "Essen",
        "Leipzig",
      ],
      "Germany",
      de
    );
  }
}

class Italy extends Country {
  constructor() {
    super(
      [
        "Rome",
        "Milan",
        "Naples",
        "Turin",
        "Palermo",
        "Genoa",
        "Bologna",
        "Florence",
        "Bari",
        "Catania",
      ],
      "Italy",
      it
    );
  }
}

class Argentina extends Country {
  constructor() {
    super(
      [
        "Buenos Aires",
        "Córdoba",
        "Rosario",
        "Mendoza",
        "La Plata",
        "Tucumán",
        "Mar del Plata",
        "Salta",
        "Santa Fe",
        "San Juan",
      ],
      "Argentina",
      es
    );
  }
}

class France extends Country {
  constructor() {
    super(
      [
        "Paris",
        "Marseille",
        "Lyon",
        "Toulouse",
        "Nice",
        "Nantes",
        "Strasbourg",
        "Montpellier",
        "Bordeaux",
        "Lille",
      ],
      "France",
      fr
    );
  }
}

class Belgium extends Country {
  constructor() {
    super(
      [
        "Brussels",
        "Antwerp",
        "Ghent",
        "Charleroi",
        "Liège",
        "Bruges",
        "Namur",
        "Leuven",
        "Mons",
        "Aalst",
      ],
      "Belgium",
      [fr_BE, nl_BE]
    );
  }
}

class Netherlands extends Country {
  constructor() {
    super(
      [
        "Amsterdam",
        "Rotterdam",
        "The Hague",
        "Utrecht",
        "Eindhoven",
        "Tilburg",
        "Groningen",
        "Almere",
        "Breda",
        "Nijmegen",
      ],
      "Netherlands",
      nl
    );
  }
}

class Portugal extends Country {
  constructor() {
    super(
      [
        "Lisbon",
        "Porto",
        "Vila Nova de Gaia",
        "Amadora",
        "Braga",
        "Funchal",
        "Coimbra",
        "Setúbal",
        "Almada",
        "Agualva-Cacém",
      ],
      "Portugal",
      pt_PT
    );
  }
}

class Spain extends Country {
  constructor() {
    super(
      [
        "Madrid",
        "Barcelona",
        "Valencia",
        "Seville",
        "Zaragoza",
        "Málaga",
        "Murcia",
        "Palma",
        "Las Palmas",
        "Bilbao",
      ],
      "Spain",
      es
    );
  }
}

class Croatia extends Country {
  constructor() {
    super(
      [
        "Zagreb",
        "Split",
        "Rijeka",
        "Osijek",
        "Zadar",
        "Pula",
        "Slavonski Brod",
        "Karlovac",
        "Varaždin",
        "Šibenik",
      ],
      "Croatia",
      hr
    );
  }
}

class Uruguay extends Country {
  constructor() {
    super(
      [
        "Montevideo",
        "Salto",
        "Ciudad de la Costa",
        "Paysandú",
        "Las Piedras",
        "Rivera",
        "Maldonado",
        "Tacuarembó",
        "Melo",
        "Mercedes",
      ],
      "Uruguay",
      es
    );
  }
}

class UnitedStates extends Country {
  constructor() {
    super(
      [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
        "San Antonio",
        "San Diego",
        "Dallas",
        "San Jose",
      ],
      "United States",
      en
    );
  }
}

class Colombia extends Country {
  constructor() {
    super(
      [
        "Bogotá",
        "Medellín",
        "Cali",
        "Barranquilla",
        "Cartagena",
        "Cúcuta",
        "Bucaramanga",
        "Pereira",
        "Santa Marta",
        "Ibagué",
      ],
      "Colombia",
      es
    );
  }
}

class Mexico extends Country {
  constructor() {
    super(
      [
        "Mexico City",
        "Guadalajara",
        "Monterrey",
        "Puebla",
        "Toluca",
        "Tijuana",
        "León",
        "Juárez",
        "Torreón",
        "Querétaro",
      ],
      "Mexico",
      es_MX
    );
  }
}

class Senegal extends Country {
  constructor() {
    super(
      [
        "Dakar",
        "Touba",
        "Thiès",
        "Rufisque",
        "Kaolack",
        "Mbour",
        "Saint-Louis",
        "Ziguinchor",
        "Diourbel",
        "Louga",
      ],
      "Senegal",
      af_ZA
    );
  }
}

class England extends Country {
  constructor() {
    super(
      [
        "London",
        "Manchester",
        "Birmingham",
        "Leeds",
        "Liverpool",
        "Newcastle",
        "Bristol",
        "Sheffield",
        "Leicester",
        "Southampton",
      ],
      "England",
      en
    );
  }
}

const countryClasses = [
  Brazil,
  Germany,
  Italy,
  Argentina,
  France,
  Belgium,
  Netherlands,
  Portugal,
  Spain,
  Croatia,
  Uruguay,
  UnitedStates,
  Colombia,
  Mexico,
  Senegal,
  England
];

export function getRandomCountry(): Country {
  const randomIndex = Math.floor(Math.random() * countryClasses.length);
  return new countryClasses[randomIndex]();
}
