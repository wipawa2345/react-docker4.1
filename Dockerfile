FROM node:18

WORKDIR /app

# คัดลอกเฉพาะไฟล์ที่ใช้ติดตั้ง dependencies ก่อน
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm ci

# คัดลอกโค้ดที่เหลือเข้าไป
COPY . .

# รันคำสั่ง build
RUN npm run build

# เปิดพอร์ต 3000
EXPOSE 3000

# ใช้ serve เพื่อรันโปรเจกต์ที่ build แล้ว
CMD ["npx", "serve", "-s", "dist"]
