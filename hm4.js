bag = {
    book: true,
    pancil: true,
    water: true,
    apple: true,
};
function delProp() {
    for(elem in bag){
        console.log(elem)
    }
    var choose = prompt("What do you want to delete?");
    choose == "book" ? delete bag.book :
        choose == "pancil" ? delete bag.pancil :
            choose == "water" ? delete bag.water :
                choose == "apple" ? delete bag.apple :
                    console.error("This item is not in the bag!")
    return  bag
}
delProp()
console.log(bag)

function addProp() {
    var add = prompt("What do you want to add?")
    bag[add] = true;
    return bag
}
