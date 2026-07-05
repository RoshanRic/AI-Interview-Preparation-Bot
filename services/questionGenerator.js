const playwright = require('../prompts/playwrightQuestions');

const javascript = require('../prompts/javascriptQuestions');

const selenium = require('../prompts/seleniumQuestions');

const java = require('../prompts/javaQuestions');

const api = require('../prompts/apiQuestion');

const testng = require('../prompts/testNGQuestion');

const bdd = require('../prompts/bddQuestion');

const pom = require('../prompts/pomQuestion');

const manual = require('../prompts/manualTestingQuestions');

const scenario = require('../prompts/scenarioQuestions');

// Generates an interview question set based on extracted skill keywords.
class QuestionGenerator {
    static generate(skills) {
        let questions = [];

        if (skills.includes('Playwright')) questions.push(...playwright);

        if (skills.includes('JavaScript'))
            questions.push(...javascript);

        if (skills.includes('Selenium'))
            questions.push(...selenium);

        if (skills.includes('Java'))
            questions.push(...java);

        if (skills.includes('API'))
            questions.push(...api);

        if (skills.includes('TestNG'))
            questions.push(...testng);

        if (skills.includes('BDD') || skills.includes('Cucumber')) {
            questions.push(...bdd);
        }

        if (skills.includes('Page Object Model') || skills.includes('POM')) {
            questions.push(...pom);
        }

        if (skills.includes('Manual Testing') || skills.includes('Manual')) {
            questions.push(...manual);
        }

        // Always include scenario questions
        questions.push(...scenario);

        // Remove duplicate questions
        questions = [...new Set(questions)];

        return questions;
    }
}

module.exports = QuestionGenerator;