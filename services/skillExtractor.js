// Extracts known skill keywords from resume text and returns them as a list.
class SkillExtractor {
    static extract(resumeText) {
        const skills = [];

        const keywords = [
            'Playwright',
            'JavaScript',
            'TypeScript',
            'Selenium',
            'Java',
            'SQL',
            'API',
            'Rest Assured',
            'SoapUI',
            'Postman',
            'TestNG',
            'BDD',
            'Cucumber',
            'Page Object Model',
            'POM',
            'Git',
            'GitLab',
            'GitHub',
            'Jenkins',
            'Azure DevOps',
            'BrowserStack',
            'Jira',
            'Agile',
            'Scrum',
            'Accessibility Testing',
            'Mobile Testing',
            'Regression Testing',
            'Smoke Testing',
            'Sanity Testing',
            'Integration Testing',
            'Telecom',
            'Banking',
            'Healthcare',
            'Postman',
            'Restassured',
            'SoapUI',
            'JMeter',
            'LoadRunner',
            'Performance Testing',
            'Security Testing',
            'Manual Testing',
            'Automation Testing',
            'Functional Testing',
            'Non-Functional Testing',
            'Cross-Browser Testing',
            'Responsive Testing',   
            'Continuous Integration',
            'Continuous Deployment',
            'DevOps',
            'Version Control',
            'Test Automation Frameworks',
            'Test Strategy',
            'CI/CD Pipelines',
            'Test Planning',
            'Test Execution',   
            'Test Reporting',
            'Test Documentation',
            'Test Metrics', 
            'Test Environment Setup',
            'Test Data Management',
            'Test Case Design', 
            
        ];
        for (const skill of keywords) {
            if (
                resumeText
                    .toLowerCase()
                    .includes(skill.toLowerCase())
            ) {
                skills.push(skill);
            }
        }

        return skills;
    }
}

module.exports = SkillExtractor;