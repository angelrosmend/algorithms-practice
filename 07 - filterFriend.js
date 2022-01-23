/*

Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

*/
let peopleList = ["Ryan", "Kieran", "Mark"]

function filterFriends(people){
    let friends = []
    for(let i = 0; i < people.length; i++){
        if(people[i].length === 4 && /^[a-zA-Z]+$/.test(people[i])){
            friends.push(people[i])
        }
    }
    return friends
}
const filterFriends2 = (people) => people.filter(friend => friend.length < 5)


console.log(filterFriends(peopleList));