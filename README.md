# Carbon Emissions Calculator

This is a full-stack carbon emissions tracking system using:

- 🖥️ **Frontend**: React (Vite or Create React App)
- 🔧 **Backend**: Spring Boot (Java)
- 💾 **Database**: MySQL (or any JDBC-compatible DB)

---

## 📁 Project Structure


---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16+)
- Java (JDK 17+)
- Maven
- MySQL (or another JDBC-compatible database)

---

## 🧩 Frontend Setup

```bash
cd frontend

# 1. Modify .env file
# Create or update the .env file in frontend/:
VITE_API_URL=http://localhost:5000

# 2. Install dependencies
npm install

# 3. Run the development server
# If you're using Vite:
npm run dev

# If you're using Create React App:
npm start

🖥 Backend Setup
cd backend/CFCBackend

# 1. Modify application.properties
# Edit src/main/resources/application.properties:
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password

# 2. Run the backend server
./mvnw spring-boot:run

🚀 Frontend Deployment
Deployment
frontend
cd frontend

# 1. Install dependencies
npm install

# 2. Build the project
npm run build

🚀 Backend Deployment (Elastic Beanstalk)
cd backend/CFCBackend

# 1. Package the Spring Boot project into a JAR file
./mvnw clean package

# 2. Zip the required files for Elastic Beanstalk deployment
zip -r CFCBackend-lb.zip .platform/ target/CFCBackend-0.0.1-SNAPSHOT.jar Procfile


 
