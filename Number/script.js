// Number: ข้อมูลประเภทตัวเลข (การคำนวณ)
const a = 3
const b = 4

console.log('a + b', a + b) // บวก
console.log('a - b', a - b) // ลบ
console.log('a * b', a * b) // คูณ
console.log('a / b', a / b) // หาร
console.log('a % b', a % b) // หารเอาเศษ
console.log('a ** b', a ** b) // ยกกำลัง

console.log((2 + 3) * ((9 - 3) / 2)) // ดำเนินการในวงเล็บก่อน
console.log(2 + 3 * 9 - 3 / 2) // การตามลำดับความสำคัญของเครื่องหมาย
console.log(NaN, typeof NaN, Number('abc123')) // Not a Number ไม่ใช่จำนวน
console.log(Infinity, typeof Infinity, 3 / 0) // Infinity จำนวนไม่จำกัด


// Number: ข้อมูลประเภทตัวเลข (การคำนวณพร้อมเปลี่ยนแปลงค่า)
let c = 1
console.log(c + 1) // = 2
console.log(c) // = 1

// Re-assignment
c = c + 1 // = 2
c += 1 // = 3
c++ // = 4
console.log(c)
// สามารถกำหนดได้ a++, a--, --a, ++a
// หรือ a += 1, a -= 1, a *= 1, a /= 1, a %= 1, a **= 1