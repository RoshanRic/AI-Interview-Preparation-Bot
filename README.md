# 🚀 AI Interview Preparation Bot

An AI-powered Resume-Based Interview Question Generator built using **Playwright + JavaScript + Gemini AI**.

Simply upload your resume (PDF/DOCX), run the project, and it automatically:

✅ Reads your resume

✅ Extracts your profile

✅ Identifies

- Years of Experience
- Skills
- Tools
- Domains
- Frameworks

✅ Uses AI (Google Gemini) to generate highly relevant interview questions.

✅ Generates a professional Excel report containing all interview questions.

---

# 📌 Why I Built This

Preparing for interviews usually means searching hundreds of questions manually.

I wanted to automate this entire process.

Instead of asking generic interview questions, this bot analyzes your actual resume and generates interview questions specifically based on your experience and skills.

Whether you're a:

- QA Engineer
- Automation Tester
- SDET
- Software Engineer

this project creates personalized interview preparation within seconds.

---

# 🎯 Features

### Resume Parsing

✔ PDF Support

✔ DOCX Support

---

### AI Profile Extraction

Automatically extracts:

- Years of Experience
- Technical Skills
- Tools
- Frameworks
- Project Domains

Example:

```
Experience : 6 Years

Skills:
Automation Testing
Playwright
Selenium
Java
SQL
API Testing
JavaScript

Tools:
Jira
BrowserStack
GitLab
JMeter

Domains:
Healthcare
Banking
Telecom
Automobile
```

---

### AI Interview Question Generation

Generates personalized interview questions based on

✔ Experience

✔ Skills

✔ Framework

✔ Tools

✔ Project Domain

Example:

A candidate with

```
6 Years Experience

Playwright
Selenium
Java
API
SQL
Framework Design
```

will receive questions completely different from a Fresher candidate.

---

### Smart Fallback

If AI API is unavailable or quota exceeds,

the project automatically switches to a Local Question Generator.

So the application never completely fails.

---

### Excel Report Generation

Automatically generates

```
InterviewQuestions.xlsx
```

with

- Question Number
- Interview Question

---

# ⚙ Tech Stack

- Playwright
- JavaScript
- Node.js
- Gemini AI
- XLSX
- Mammoth
- PDF-Parse
- Dotenv

---

# 🏗 Project Architecture

```
AI-Interview-Preparation-Bot
│
├── uploads/
│      resume.pdf
│
├── reports/
│      InterviewQuestions.xlsx
│
├── services/
│      resumeParser.js
│      profileExtractor.js
│      geminiService.js
│      questionGenerator.js
│
├── utils/
│      excelHelper.js
│
├── tests/
│      interviewPrep.spec.js
│
├── .env.example
├── package.json
├── playwright.config.js
└── README.md
```

---

# 🔥 Workflow

```
Resume

      ↓

Resume Parser

      ↓

Profile Extraction

      ↓

Gemini AI

      ↓

Generate Questions

      ↓

Excel Report
```

---

# 🛠 Installation

Clone repository

```bash
git clone https://github.com/yourusername/AI-Interview-Preparation-Bot.git
```

Go inside project

```bash
cd AI-Interview-Preparation-Bot
```

Install packages

```bash
npm install
```

Install Playwright

```bash
npx playwright install
```

---

# 🔑 Setup Gemini API

Create a **.env** file

```
GEMINI_API_KEY=YOUR_API_KEY
```

You can generate a FREE Gemini API key from:

https://aistudio.google.com/

---

# 📄 Upload Resume

Place your resume inside

```
uploads/
```

Supported formats

- PDF

or

- DOCX

Example

```
uploads/resume.pdf
```

---

# ▶ Run Project

```bash
npx playwright test tests/interviewPrep.spec.js --headed
```

---

# 📊 Output

Console Output

```
Resume Loaded Successfully

Profile Extracted

Experience : 6 Years

Skills :

Playwright
Java
SQL
Automation Testing
API Testing

Questions Generated : 50

Excel Generated Successfully
```

Generated Report

```
reports/

InterviewQuestions.xlsx
```

---

# 📌 Example Output

The generated questions include

✔ Java

✔ Selenium

✔ Playwright

✔ API Testing

✔ SQL

✔ Automation Framework Design

✔ Scenario Based Questions

✔ Real Time Interview Questions

✔ Project Based Questions

✔ Debugging Questions

✔ Coding Questions

All questions are personalized according to the uploaded resume.

---

# 🎥 Demo Video


https://www.linkedin.com/.....](https://www.linkedin.com/posts/roshan-ric_playwright-javascript-nodejs-ugcPost-7479223604409171969-tKHL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPB9M4BSeaemDlRsa1cJCAXNfG32JvFOWg)

---

# 🔮 Future Enhancements

- ATS Resume Score
- AI Resume Improvement Suggestions
- Mock Interview Mode
- Voice-based Interview
- AI Interview Evaluation
- Multiple Resume Comparison
- Export to PDF
- OpenAI Support
- Claude AI Support
- Ollama Local AI Support
- Docker Support
- GitHub Actions Integration

---

# ⚠ Disclaimer

This project is intended for educational purposes and interview preparation only.

Users are responsible for securing their own API keys and complying with the terms of service of any AI provider used.

Never commit your personal API keys to GitHub.

---

# 👨‍💻 Author

**Roshan Kumar**

Senior QA Automation Engineer

### Skills

Playwright • Selenium • JavaScript • Java • API Testing • SQL • Automation Framework Design

LinkedIn

https://linkedin.com/in/roshan-ric

GitHub

https://github.com/RoshanRic
