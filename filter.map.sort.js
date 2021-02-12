let cities = [
    {name: 'Los Angeles',  population: 3},
    {name: 'New York',     population: 1},
    {name: 'Chicago',      population: 2},
    {name: 'Houston',      population: 5},
    {name: 'Philadelphia', population: 6}
];

cities
    .filter(city => city.population < 4)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => console.log(city.name + ':' + city.population));

let bigCities = [];
for (let i = 0; i < cities.length; i++) {
    if (cities[i].population > 3) {
        bigCities.push(cities[i]);
    }
}
console.log(bigCities);


let bigCitiess = cities.filter((e) => {
    return e.population > 3;
});
console.log(bigCitiess);

Output --------------

"Los Angeles:3"
"New York:1"
"Chicago:2"
[[object Object] {
  name: "Houston",
  population: 5
}, [object Object] {
  name: "Philadelphia",
  population: 6
}]
[[object Object] {
  name: "Houston",
  population: 5
}, [object Object] {
  name: "Philadelphia",
  population: 6
}]


-------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.reduce()</h2>

<p>This example finds the sum of all numbers in an array:</p>

<p id="demo"></p>

<script>
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce((total, value) => {
  return total + value;
},100);

document.getElementById("demo").innerHTML = "The sum is " + sum;

</script>

</body>
</html>

output ---------------------------------

The sum is 199
