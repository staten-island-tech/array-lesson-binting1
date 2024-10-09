const students = [
    { name: 'Alice', age: 20, grade: 85},
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name, student.grade));
// this line logs the students grade next to the students name 

 const topstudents =
    students.filter((student) => student.grade > 80)
    .forEach((student) => console.log(student.name));
/* this line logs the students who has a grade higher than 80*/

console.log("part 2");

const youngstudents = 
    students.filter((student) => student.age < 21)
    .forEach((student) => console.log(student.name));
/* this line logs the students whose younger than 21*/

const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics', rating: 4.5 },
    { name: 'Phone', price: 800, category: 'Electronics', rating: 4.7 },
    { name: 'Headphones', price: 150, category: 'Accessories', rating: 4.3 },
    { name: 'Monitor', price: 300, category: 'Electronics', rating: 4.6 },
    { name: 'Keyboard', price: 100, category: 'Accessories', rating: 4.1 },
    { name: 'Chair', price: 250, category: 'Furniture', rating: 4.0 },
    { name: 'Desk', price: 450, category: 'Furniture', rating: 4.8 }
  ];

products.forEach((product)=> console.log(product.name, product.price));

products.forEach((product) => console.log(product.name, product.price * 1.1));

const categories = [];
products.forEach(product => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log('Unique Categories:', categories);

const electronics = products.filter(product => product.category === 'Electronics');
console.log('Electronics:', electronics);

const expensiveproducts = products.filter(product => product.price > 300);
console.log('Expensive Products:', expensiveproducts);

// const highlyratedproducts =  products.filter(product => product.rating >= 4.5);
// products.forEach((highlyratedproducts) => console.log(highlyratedproducts));

const highlyratedproducts = 
    products.filter((product)=> product.rating >= 4.5)
    .forEach((product) => console.log(product.name));

// this is the combined version of forEach and filter (aka the simplified version of the grayed part above)