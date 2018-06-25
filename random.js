// Query and then display all food
$.ajax("http://localhost:8088/food").then(allFood => console.log(allFood))

const createNewFood = () => {
    // Create a food then display the new food
    $.ajax({
        url: "http://localhost:8088/food",
        method: "POST",
        data: {
            "name": "Red curry",
            "type": "curry",
            "ethnicity": "thai",
            "sideDishes": [
                "Chicken satee",
                "Samosa"
            ]
        }
    })
    .then(newFood => console.log(newFood))
}

createNewFood();