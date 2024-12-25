// String: ข้อมูลประเภทข้อความ (การรวมคำ)
const firstName = 'John'
const lastName = 'Doe'
const age = 18

// การรวมข้อความ ที่ได้ผลลัพธ์เดียวกัน
console.log(firstName + ' ' + lastName) // การ + ข้อความ จะได้รวมข้อความเข้าด้วยกัน
console.log(`${firstName} ${lastName}`) // backtick สามารถทำ Template Literal ${} ได้

// ตัวอย่าง จะเห็นว่า Backtick จัดการข้อความง่ายกว่า
console.log(`Name: ${firstName} ${lastName}, age ${age} year`) 


// String: ข้อมูลประเภทข้อความ (รวมคำรูปแบบอื่น)
const first = 'a', second = 'b', third = 'c'

const result1 = `${first} ${second} ${third}` // รวมข้อความไว้ที่เดียว

// เติมข้อความเดิม
let result2 = '' // หากไม่มี String ว่างไว้ '' จะหมายความว่าเป็น undefined และจะเกิดการต่อคำนั้น
result2 = result2 + first
result2 = result2 + second
result2 = result2 + third

// += เติมข้อความแบบใช้สัญลักษณ์ทางลัด (Modify-in-place)
let result3 = ''
result3 += first
result3 += second
result3 += third

console.log(result1)
console.log(result2)
console.log(result3)


// String: ข้อมูลประเภทข้อความ (New-line)
const article1 = 'Hello World\n\nThis is next 2 lines'
const article2 = `Hello world!

This is next 2 lines` // ใช้ Backtick สามาารถแสดงเว้นบรรทัดได้เลบ

// alert(article1)
// alert(article2)


// String: ข้อมูลประเภทข้อความ (Escape Character)
console.log('Backslash: \\')
console.log('Single-quote: \' & Double-quote: \"')
console.log("Single-quote: ' & Double-quote: \"")
console.log(`Single-quote: \' & Double-quote: \"`) // นิยมใช้ Backtick

// This is "John's book"
console.log('This is "John\'s book"')
console.log("This is \"John's book\"")
console.log(`This is "John's book"`)
