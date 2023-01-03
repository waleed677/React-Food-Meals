
import React from 'react'
import Card from '../UI/Card';
import MealsItem from './MealsItem';

const dummyDate = [
    { "id":"m1" ,"name": "Chicken Burrito", "description": "Lorum ispum lorum ispum",  "price": 5 },
    { "id":"m2" ,"name": "Steak Burrito", "description": "Lorum ispum lorum ispum",  "price": 45 },
    { "id":"m3" ,"name": "Carnitas Burrito", "description": "Lorum ispum lorum ispum",  "price": 50 },
    { "id":"m4" ,"name": "Barbacoa Burrito", "description": "Lorum ispum lorum ispum",  "price": 65 },
    { "id":"m5" ,"name": "Barbacoa Burrito", "description": "Lorum ispum lorum ispum",  "price": 96 },
];


function AvailableMeals() {

  return (
    <>
    <Card>
        <ul>
        {dummyDate.map((meal) => (
            <MealsItem key = {meal.id} burger = {meal}/>
        ))}
        </ul>
    </Card>
    </>
  )
}

export default AvailableMeals