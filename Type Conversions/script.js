const data = '123' // ทดลองเปลี่ยนจาก string เป็น number, boolean หรืออื่นๆ
console.log(data, typeof data)

// แปลงเป็น String
console.log(String(data), typeof String(data))

// แปลงเป็น Number
console.log(Number(data), typeof Number(data))
console.log(+data, typeof +data) // สามารถเติม + หรือ - หน้า data ได้
console.log(parseInt(data), typeof parseInt(data)) // แปลงเป็นจำนวนเต็ม
console.log(parseFloat(data), typeof parseFloat(data)) // แปลงเป็นจำนวนทศนิยม

// แปลงเป็น Boolean
console.log(Boolean(data), typeof Boolean(data))
console.log(!data, typeof !data)



// การเทียบค่า
const string1 = '1'
const string001 = '001'
const number1 = 1

console.log(string1 == number1) // true
console.log(string001 == number1) // true

// แปลงค่า
console.log(+string1) // 1 ปกติ
console.log(+string001) // 1 ไม่ปกติ เพราะมาจาก '001'

// === หรือ !== สำหรับเทียบค่าเท่ากันหรือไม่เท่ากัน รวมทั้งดูเรื่อง Data Type ของข้อมูลเดียวกัน
// เพื่อแก้ไขปัญหา แนะนำให้ใช้ === หรือ !== เสมอจะดีที่สุด
console.log(string1 === number1) // false
console.log(string001 === number1) // false
console.log(+string1 === number1) // true
console.log(+string001 === number1) // true
console.log(string1 !== number1) // true

