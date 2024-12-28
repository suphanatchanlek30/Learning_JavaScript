//ความแตกต่างระหว่าง JavaScript และ TypeScript

// JavaScript (Dynamic Type)
let data = 'John Doe'
console.log(data, typeof data)

data = 19
console.log(data, typeof data) // ทำได้

// TypeScript (Static Type)
let data: string = 'John Doe'
console.log(data, typeof data)

data = 19 // แบบนี้ไม่ได้ เกิด Type Error แต่เป็นเรื่องที่ดีคือแก้ปัญหา data Type ที่คาดเดาไม่ได้