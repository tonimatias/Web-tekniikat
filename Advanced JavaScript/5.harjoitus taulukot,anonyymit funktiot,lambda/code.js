// 1.
let numbers = ["one", "two", "three", "four", "five"];
numbers.forEach(numbers => console.log(numbers));
//numbers.forEach( function(numbers) { console.log(numbers)})

// 2.
let prices = [24, 50, 100, 68];

let discount = prices.map( price => 0.2*price);

//3.
let names = ["John", "Jack", "Karen", "John"]
names = names.map(name => {
    if(name === "John"){
        return "Matt";
    }
    return name;
});
// Vaihtoehto 2
names = names.map(name => name==="John" ? "Matt" : name);

//4
let number = [1,4,-3,-5,4,23];
let postitives = number.filter(num => num>=0);


//5
let names2 = ["Taistotapuli", "Timppa", "Tiiiiiinaaaaa", "Hyyppä"];

let tees = names2.filter(item => item.length > 8 && item[0] == "T")

//6

let name3 = ["Timppa", "Tomppa", "Marjatta", "1", "2"];

if(name3.every( sana => sana.length > 0)){
    let namelenght = name3.map(sana => sana.length);

    let sun = namelenght.reduce ( (previous, current) => previous + current);
}