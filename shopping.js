const shoppingList = [
    {
       id: 1,
       item: "almond milk",
       price: 2.69,
       quantity: 1
    },
    {
        id: 2,
        item: "cheese",
        price: 3.29,
        quantity: 1
     },
     {
        id: 3,
        item: "lemons",
        price: .69,
        quantity: 3
     },
     {
        id: 4,
        item: "steak",
        price: 10.29,
        quantity: 2
     }
]
//console.log(shoppingList)

// this for... of loop filters through the shopping list to find 
// any item over $8
// I don't know what the "list" is called. shoppingList is a variable. list is ??
for (list of shoppingList) {
    if (list.price > 8){
        console.log(`${list.item}`)
    }
}