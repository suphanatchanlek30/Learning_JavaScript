// Boolean: ประเภทข้อมูลค่าเท็จจริง (true, false)  เปรียบเทียบข้อมูล
const isPaid1 = true // ค่าจริง หรือ 1
const isPaid2 = false // ค่าเท็จ หรือ 0

const a = 2
const b = 5

console.log('a > b', a > b) // มากกว่า
console.log('a < b', a < b) // น้อยกว่า
console.log('a >= b', a >= b) // มากกว่าหรือเท่ากับ
console.log('a <= b', a <= b) // น้อยกว่าหรือเท่ากับ
console.log('a == b', a == b) // เท่ากับ
console.log('a != b', a != b) // ไม่เท่ากับ



// Boolean: ประเภทข้อมูลค่าเท็จจริง (true, false)  ตรรกศาสตร์
const c = true
const d = false

console.log('c && d', c && d) // และ
console.log('c || d', c || d) // หรือ
console.log('c || d && c ',c || d && c) // = true
console.log('!c', !c) // ไม่

// หาค่าระหว่าง 20-25 หรือ 30-35 เท่านั้น
const age = 21
console.log('age resuslt', (20 <= age && age <= 25 || 30 <= age && age <= 35))