// ข้อมูลจะเริ่มจากเลข 0 โดยเรียกตำแหน่ง Index จาก []
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
console.log(typeof colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);
console.log(colors[5]); // ตำแหน่งที่ 5 ไม่มีข้อมูล undefined


// เก็บข้อมูลได้ทุกประเภท
const data = [1, 'apple', true, {name: 'John'}, [1, 2, 3]];
console.log(data[0]);
console.log(data[1]);
console.log(data[2]);
console.log(data[3]);
console.log(data[4]);

// ส่วนมากการกำหนด Array หลายคนจะใชช้ชื่อตัวแปร เช่น colors เพื่อให้แยกประเภทของข้อมูลง่ายขึ้น
const colors2 = ['red', 'blue', 'green', 'yellow', 'purple'];
const index = 0

console.log(colors2, typeof colors2);
console.log(colors2[index]); // เลือกตาม index ที่กำหนด

// แม้ว่าเราจะใช้ const ประกาศ Array ก็สามารถแก้ไขข้อมูลใน Array ได้
colors2[0] = 'black';
console.log(colors2);


// การเก็บข้อมูลหลายมิติ 
// ตัวอย่างArray 3 x 3 มิติ
const xoBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X'],
]

console.log(xoBoard)
console.log(xoBoard[0][0])
console.log(xoBoard[1][2])