
# GoExam *(Working alias)* - Practice exams Generator for Better Score, Better Future.
```
เวลาเรียนในคาบเรียนยังเรียนเป็นเรื่อง ๆ แต่ทำไมตอนไปหาข้อสอบเก่ามาฝึก ถึงมีแค่แบบที่รวมทุกเรื่องมาแล้วล่ะ?
```

เว็บนี้ตั้งใจสร้างมาด้วย Background คือในช่วงที่เรากำลังเรียนมัธยม ครูก็มักจะสอนเนื้อหาให้เราทีละเรื่องเพื่อให้เข้าใจได้ง่ายและเป็นระบบ และเพื่อที่จะเสริมสร้างความเข้าใจมากขึ้น ครูก็จะให้ Quiz ในเรื่องเดียวกันนั้นมาให้ทำเพิ่มเติม แต่สิ่งนี้มักจะไม่เกิดขึ้นกับการเรียนในระดับที่สูงขึ้น เช่น ระดับอุดมศึกษา จึงได้เกิดไอเดียขึ้นมาว่า ถ้าอย่างนั้น ทำไมเราไม่มีแหล่งรวมข้อสอบที่แยกเนื้อหาออกเป็นเรื่อง ๆ ให้หยิบข้อสอบในหมวดหมู่เดียวกันออกไปทำได้บ้าง

## Product Description
- สร้างคลังข้อสอบของตัวเอง หรือจะใช้คลังข้อสอบกลางที่มีให้
- สร้างไฟล์ข้อสอบ (และเฉลย) เพื่อนำไปฝึกทำ แยกตามหัวข้อของแต่ละรายวิชา
- หรือจะเลือกสร้างข้อสอบจากคลังข้อสอบในช่วงปีต่าง ๆ จากบางสนามสอบ หรือจะรวมทุกปีทุกสนามสอบไปเลยก็มีให้
- เก็บข้อสอบที่สร้างแล้วเอาไว้ให้ จะกลับมาทำเมื่อไหร่ก็ไม่มีปัญหา
- แชร์ไฟล์ข้อสอบเป็นลิ้งก์ให้คนอื่น ๆ ไปลองทำ หรือจะเก็บเป็นส่วนตัวไว้ทำเองคนเดียวก็ได้
- ทำข้อสอบจริงในระบบ และตรวจคะแนนว่าทำได้ดีแค่ไหน *(จะมาในอนาคต - ถ้ามีเวลามาทำให้นะ)*

## What's the difference?
คลังข้อสอบหลาย ๆ ชุดในท้องตลาดมักจะแบ่งข้อสอบออกเป็นชุดๆ แยกตามวิชา / ชุดข้อสอบ / ปีที่สอบ แต่ยังไม่มี Solution ที่แยกข้อสอบอย่างละเอียดมากขึ้นเป็นหัวข้อของแต่ละวิชา เหมือนเวลาที่อาจารย์มหาวิทยาลัยสร้างข้อสอบเก็บไว้ในคลัง (Question Bank) ของแต่ละหัวข้อและเอารวมให้นักศึกษาได้สอบกัน

## Plan

 - [ ] ระบบสร้าง-เก็บคำถาม
 - [ ] ระบบสร้าง-แสดงข้อสอบ
 - [ ] ระบบล็อกอิน-ยืนยันตัวตน
 - [ ] ระบบแชร์ข้อสอบ
 - [ ] ระบบทำข้อสอบ (ถ้ามีเวลา)

## Tech Stack
เพื่อให้ระบบสามารถอยู่ได้ (ในช่วงแรก) โดยประหยัดที่สุด ในช่วงแรกคาดว่าจะใช้ Solution ของ Cloudflare ทั้งหมด

- **Hosting**: Cloudflare Pages
- **Cloud Function**: Cloudflare Workers
- **Database**: Cloudflare Workers KV
- **Object Storage**: Cloudflare R2

## For more information

Contact us at 'goexam.inquiry (at) naphats (dot) me'


---


## Nextjs Boilerplate
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
