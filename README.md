# flat-numbers

##[Q]--
const inputArray = [
{
a: [1, 2, 3, "text"],
},
[[1, 2, 3, { a: [1, 2, 3, "text"] }]],
[2, 4, 5],
]; ##[Ans]--
flat numbers: [
1, 2, 3, 1, 2,
3, 1, 2, 3, 2,
4, 5
]
