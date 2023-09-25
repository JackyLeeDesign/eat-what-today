import React, { useState } from "react";
import { Card, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Food = () => {
  const foods = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Salad",
    "Steak",
    "Ramen",
    "Dim Sum",
    "Tacos",
    "Burritos",
    "Smoothies",
    "BBQ Ribs",
    "Seafood Platter",
    "Chicken Curry",
    "Beef Stew",
    "Vegetable Stir-fry",
    "Pancakes",
    "Waffles",
    "Ice Cream Sundae",
    "Fried Rice",
    "Spaghetti Carbonara",
    "Tom Yum Soup",
    "Croissants",
    "Chocolate Cake",
    "Baked Salmon",
    "Miso Soup",
    "Chicken Wrap",
    "Vegan Bowl",
    "Lobster Roll",
    "Cheese Platter",
  ];
  const [currentFood, setCurrentFood] = useState("");

  const handleClick = () => {
    let newFood = currentFood;

    // Ensure the new food is different from the current one
    while (newFood === currentFood) {
      newFood = foods[Math.floor(Math.random() * foods.length)];
    }

    setCurrentFood(newFood);
  };

  return (
    <Card className="food-card text-center">
      <FontAwesomeIcon icon={faUtensils} className="food-icon" />
      <h4 className="mb-4">{currentFood || "What's for today?"}</h4>
      <Button className="food-button" onClick={handleClick}>
        Decide!
      </Button>
    </Card>
  );
};

export default Food;
