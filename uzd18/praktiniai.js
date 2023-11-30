// const arr1 = [
//     [1, 7, 3],
//     [4, 22, 6],
//     [0, 8]
// ];


// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j <arr1[i].length; j++) {
//         sum += arr1[i][j];
//     }
// }

// console.log(sum)
// let sum1 = 0;

// arr1.forEach(item => {
//     item.forEach(item1 => {
//     sum1 += item1
//     })
// });

// console.log(sum1)

// const arr2 = [
//     [
//         0, [4, 22, 6]], 
//         2, 
//         3, [4, [4, 22, [0, 8]], 6], 
//         5, 
//         6, 
//         [0, 8], 
//         8, 
//         9
//     ];

// const arr4 = [
//         [
//             0, [4, 22, 6]],    
//         2,    
//         3,    
//         [4, [4, 22, [0, 8]],
//         6],
//         5,    
//         6,
//         [0, 8],
//         8,
//         9
//     ];

// const arr3 = [

//     [

//         0, [4, 22, 6]

//     ],

//     2,

//     3,

//     [

//         4,

//         [

//             4,

//             22,

//             [0, [0, [0, [[[[0, 8], 8], 8], 8]]]]

//         ],

//         6

//     ],

//     5,

//     6,

//     [0, 8],

//     8,

//     9

// ];
// let sum3 = 0;

// function sumArr(arr) {
//     arr.forEach(item => {
//         if (Array.isArray(item)) {
//             sumArr(item);
//         } else {
//             sum3 += item;
//         }
//     })
// }

// sumArr(arr3);

// // console.log(arr3.flat(Infinity).reduce((a, b) => a + b, 0));

// console.log(arr3);
// console.log(sum3);

// const arr4 = [-5, 8, -3, 0, 4, 2, -1, 0, 1, -9, 6];

// const arr41 = [...arr4];

// for (i = 0; i < arr41.length; i++) {
//     if (arr41[i] < 0) {
//         arr41[i] = 0
//     } else (arr41[i])
//     }

// console.log(arr41);

// const arr42 = [...arr4];

// for (i = 0; i < arr42.length; i++) {
//     if (arr42[i] < 0) {
//         arr42[i] = 1
//     } else (arr42[i])
//     }

// console.log(arr42);

// const arr43 = [...arr4];

// arr4.forEach((item, index) => {
//     if (item < 0) {
//         arr43[index] = 1;
//     }
// });
// console.log(arr43)

// // const arr44 = [...arr4];

// const arr44 = arr4.map(item => {
//     if (item < 0) {
//         return 1;
//     }
//     return item;
// })
// console.log(arr44)


const colors = ['pink', 'green', 'blue', 'yellow', 'pink', 'black', 'pink'];

const pinkai = colors.map(item => {
    if (item === 'pink') {
        return 'black';
    }
    return item;
})
console.log(pinkai, colors);

const noPinkIsBlack = colors.map(item => item === 'pink' ? 'black' : item);

console.log(noPinkIsBlack);