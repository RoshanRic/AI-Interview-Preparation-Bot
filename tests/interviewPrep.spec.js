const { test } = require('@playwright/test');
const fs = require('fs');

const ResumeParser = require('../services/resumeParser');
const ProfileExtractor = require('../services/profileExtractor');
const QuestionGenerator = require('../services/questionGenerator');
const GeminiService = require('../services/geminiService');
const { writeQuestions } = require('../utils/excelHelper');

test.setTimeout(120000); // this is not recommended for production code, but is useful for testing purposes

// End-to-end test for generating interview questions from a resume and saving them to Excel
test('Generate Interview Questions', async () => {

    let resumePath = '';

    // Check if resume exists
    if (fs.existsSync('./uploads/resume.pdf')) {
        resumePath = './uploads/resume.pdf';
    }
    else if (fs.existsSync('./uploads/resume.docx')) {
        resumePath = './uploads/resume.docx';
    }

    if (!resumePath) {
        throw new Error('Resume not found in uploads folder');
    }

    // Read resume
    const resume = await ResumeParser.read(resumePath);

    if (!resume || !resume.trim()) {
        throw new Error('Unable to read resume.');
    }

    console.log('\nResume Loaded Successfully\n');

    // Extract profile
    const profile = await ProfileExtractor.extract(resume);

    if (!profile) {
        throw new Error('Unable to extract profile.');
    }

    console.log('\nProfile Extracted');
    console.log(profile);

    // Extract profile details
    const skills = profile.skills || [];

    const experience = parseInt(profile.experience) || 0;

    const tools = profile.tools || [];

    const domains = profile.domains || [];

    const frameworks = profile.frameworks || [];

    console.log(`\nExperience : ${experience} Years`);

    console.log('\nSkills :');
    console.log(skills);

    console.log('\nTools :');
    console.log(tools);

    console.log('\nDomains :');
    console.log(domains);

    console.log('\nFrameworks :');
    console.log(frameworks);

    // Generate AI questions
    let questions =
        await GeminiService.generateQuestions(skills,experience);

    // Fallback if Gemini fails
    if (!questions ||questions.length === 0) {
        console.log('\nGemini failed. Using local question generator...\n');

        questions =QuestionGenerator.generate(skills);
    }

    console.log(`\nQuestions Generated : ${questions.length}\n`);

    // Save to Excel
    writeQuestions(questions, './reports/InterviewQuestions.xlsx');

    console.log('Excel Generated Successfully\n');

    // Print all questions
    questions.forEach((question, index) => {
            console.log(`${index + 1}. ${question}`);
        }
    );

});