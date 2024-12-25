let name = 'John' // เปลี่ยนค่าได้
const birthDate = '1992-02-25' // constant ค่าคงที่
var age = 25 // ไม่แนะนำ

// console.log(name, birthDate, age)
console.log(name)
console.log(birthDate)
console.log(age)

// let สามารถการเปลี่ยนค่าได้
name = 'Alice'
console.log(name)


// Declare (กำหนดค่า) และ Assign (กำหนดค่า) ทันที โดยแบ่งตะวแปรผ่าน Comma (,)
let softwareName1 = 'Mysoft', softwareVersion1 = '1.0.0'

// Declare & Assign แต่ละบรรทัด
let softwareName2 = 'Mysoft'
let softwareVersion2 = '1.0.0'

// Declare แล้วค่อย Assign ภายหลัง
let softwareName3, softwareVersion3
softwareName3 = 'Mysoft'
softwareVersion3 = '1.0.0'

console.log(softwareName1, softwareVersion1)
console.log(softwareName2, softwareVersion2)
console.log(softwareName3, softwareVersion3)


// Variables: ตัวแปรการเก็บข้อมูล (ชื่อตัวแปร)
const calculateMonthlyRevenue = 19500 // camelCase แนะนำวิธีในการตั้งชื่อ
const calculate_monthly_revenue = 19500 // snake_case ไม่แนะนำแต่ใช้งานได้
const CALCULATE_MONTHLY_REVENUE = 19500 // UPPER_SNAKE_CASE แนะนำเฉพาะกลุ่ม const บางประเภท
const CalculateMonthlyRevenue = 19500 // PascalCase แนะนำเฉพาะชื่อ Class ที่จะเรียนบน OOP
// const calculate-monthly-revenue = 19500 // kebad-case ใช้งานไม่ได้เพราะมี - ที่หมายถึงการ "ลบ" จำนวน


// Variables: ตัวแปรการเก็บข้อมูล (ปัญหาของการใช้ var)

if(true){
    var a = 10
}
console.log(a) // ตัวแปร a ไม่ควรรู่จัก Scope นี้

console.log(b) // ควร ReferenceError เพราะประกาศตัวแปร b ด้านล่าง
var b = 20

var c = 10
var c = 10
console.log(c) // ควร SyntaxError เพราะประกาศตัวแปรชื่อซ้ำกัน



