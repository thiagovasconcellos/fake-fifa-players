# Fifa Fake Players

## Description
Fifa Fake Players is a simple yet effective tool designed to generate random football (soccer) players. The attributes of these players are inspired by the popular FIFA video game series, with overall ratings typically ranging between 60 and 70. This project serves as an excellent starting point for integrating fake player data into your own games or other creative projects. It's a straightforward implementation with a touch of sophistication.

## Technologies
This project is primarily powered by `faker-js`, which handles the bulk of data generation. The selection of countries is influenced by the FIFA rankings of top football nations, adding a layer of authenticity to the player data.

## Getting Started

### Prerequisites
Ensure you have Node.js installed on your system to run this project.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Fifa-Fake-Players.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Fifa-Fake-Players
   ```
3. Install the dependencies
   ```bash
   npm install
   ```
## Running the Application
1. Start the application:
   ```bash
   npm start
   ```
2. The server will start on port 3000. You can access the API at ``http://localhost:3000``.

## Usage
The project provides two main endpoints:

### Create a Random Player
``GET /create-player``
- Generates a single random player.

### Create a List of Random Players
``POST /create-player-list``
- Accepts a JSON body with the amount field (maximum value 500) to generate a list of random players.
- Example request body:
```json
{
  "amount": 10
}
```

## Contributing
Contributions to the project are welcome. Please feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Special thanks to the creators of `faker-js` for providing the tools to generate random data.
- Inspired by the FIFA video game series for player attribute ideas.
