const animals = [
    // Pond ecosystem
    { name: "Fish", spring: 80, summer: 100, fall: 60, winter: 50, color: "#00a9e0", habitat: "Pond/lake", food: "Algae, larvae, insects", interact: "Ducks, turtles, swans", cluster: "water" },
    { name: "Duck", spring: 20, summer: 35, fall: 25, winter: 12, color: "#87d5ff", habitat: "Pond edges", food: "Aquatic plants, insects", interact: "Fish, turtles, swans", cluster: "water" },
    { name: "Swan", spring: 8, summer: 12, fall: 10, winter: 6, color: "#ffffff", habitat: "Lake center", food: "Aquatic plants", interact: "Territorial w/ ducks/turtles", cluster: "water" },
    { name: "Turtle", spring: 20, summer: 30, fall: 25, winter: 3, color: "#3ec775", habitat: "Ponds, logs, rocks", food: "Plants, algae, insects", interact: "Competes w/ ducks/swans", cluster: "water" },
  
    // Forest + predator-prey
    { name: "Fox", spring: 2, summer: 2, fall: 2, winter: 2, color: "#ff9250", habitat: "Hidden brush", food: "Rabbits, rodents", interact: "Hunts rats/rabbits; avoids humans", cluster: "forest" },
    { name: "Rabbit", spring: 15, summer: 25, fall: 20, winter: 8, color: "#e8b8a4", habitat: "Grassy fields", food: "Grass, clover, leaves", interact: "Hunted by foxes/eagles", cluster: "forest" },
    { name: "Owl", spring: 3, summer: 3, fall: 3, winter: 3, color: "#cfcfcf", habitat: "Tree hollows", food: "Rodents, small birds", interact: "Competes w/ eagles for prey", cluster: "forest" },
    { name: "Eagle", spring: 2, summer: 3, fall: 3, winter: 2, color: "#ffef85", habitat: "Tall trees", food: "Fish, small birds", interact: "Predates ducks/rats; competes w/ owls", cluster: "forest" },
  
    // Tree/ground dwellers
    { name: "Blackbird", spring: 25, summer: 35, fall: 30, winter: 12, color: "#ff9e9e", habitat: "Trees, shrubs", food: "Insects, berries, seeds", interact: "Other songbirds; raptors", cluster: "trees" },
    { name: "Squirrel", spring: 35, summer: 50, fall: 40, winter: 25, color: "#d4a373", habitat: "Tree canopy", food: "Nuts, seeds", interact: "Competes w/ birds; chased by foxes", cluster: "trees" },
  
    // Urban-edge scavengers
    { name: "Raccoon", spring: 10, summer: 15, fall: 12, winter: 8, color: "#c4c4c4", habitat: "Near water/trash", food: "Fruit, eggs, leftovers", interact: "Steals eggs from ducks", cluster: "urban" },
    { name: "Rat", spring: 25, summer: 40, fall: 30, winter: 20, color: "#888888", habitat: "Shrubs, trash areas", food: "Seeds, scraps, insects", interact: "Prey for owls/foxes", cluster: "urban" },
    { name: "Chicken", spring: 8, summer: 8, fall: 8, winter: 1, color: "#ffdf7f", habitat: "Garden edges", food: "Seeds, insects", interact: "Humans, raccoons, squirrels", cluster: "urban" },
  ];
  