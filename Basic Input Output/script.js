// Input 
const name = prompt('What id your name?') // ถามรับข้อมูลเป็น String
const acceptTerm = confirm('Do you accept the terms?') // ถามรับข้อมูลเป็น Boolean true, false

// Output
const result = `Hello ${name}, you accepted the terms ${acceptTerm}`
alert(result) // แสดงผลบน web browser (ใช้เป็นบางกรณี เช่น การแจ้งเตือน)
console.log(result) // แสดงผลบน console (ใช้ได้ดีกว่ามากสำหรับการตรวจสอบข้อมูล)
