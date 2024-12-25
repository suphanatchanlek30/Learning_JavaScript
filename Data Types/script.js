// Data Types: ประเภทและการจัดการข้อมูล

// String (ข้อความ)
const name1 = 'John' // Single-quote
const name2 = "John" // Double-quote
const name3 = `John` // Backtick (ใช้เมื่อต้องการ Template Literal)

// Number (ตัวเลข)
const income1 = 1000000 // Number
const income2 = 1_000_000 // ใข้ร่วมกับ Underscore
const income3 = 1e6 // Exponent notation

// Boolean (ค่าเท็จจริง)
const isPaid1 = true // ค่าจริง หรือ 1
const isPaid2 = false // ค่าเท็จ หรือ 0

// อื่นๆ
const empty1 = null // ค่าว่าง หรือ ไม่มีข้อมูล
const empty2 = undefined // Underfined ไม่ได้กำหนดค่า
const object = {key: 'value'} // object (ข้อมูลแบบจับคู่ Key-Value)
const array = [1, 2, 3] // array

console.log(name1, typeof name1) // typeof ตามด้วยข้อมูล เพื่อตรวจสอบประเภทของข้อมูล
console.log(name2, typeof name3)
console.log(name3, typeof name3)

console.log(income1, typeof income1)
console.log(income2, typeof income2)
console.log(income3, typeof income3)

console.log(isPaid1, typeof isPaid1)
console.log(isPaid2, typeof isPaid2)

console.log(empty1, typeof empty1)
console.log(empty2, typeof empty2)

console.log(object, typeof object)
console.log(array, typeof array)