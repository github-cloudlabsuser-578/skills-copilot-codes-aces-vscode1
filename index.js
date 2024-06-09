const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];

const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);