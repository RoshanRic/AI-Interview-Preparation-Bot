const { GoogleGenerativeAI } = require('@google/generative-ai');

require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Uses Gemini AI to parse resume text and return structured profile details.
class ProfileExtractor {
    static async extract(
        resumeText
    ) {
        const model = genAI.getGenerativeModel({model: process.env.GEMINI_MODEL});

        const prompt = `
Analyze this resume and return ONLY JSON.

{
  "experience": number,
  "skills": [],
  "tools": [],
  "domains": [],
  "frameworks": []
}

Resume:

${resumeText}
`;

        try {
            const result = await model.generateContent(prompt);

            const response = await result.response;

            const text = response.text();

            const cleaned =
                text
                    .replace(
                        /```json/g,
                        ''
                    )
                    .replace(
                        /```/g,
                        ''
                    )
                    .trim();

            return JSON.parse(cleaned);
        } catch (error) {
            console.error('[ProfileExtractor] AI request failed:', error.message || error);
            return {
                experience: 0,
                skills: [],
                tools: [],
                domains: [],
                frameworks: []
            };
        }
    }
}


console.log(
    'API Key Prefix:',
    process.env.GEMINI_API_KEY?.substring(0, 15)
);
module.exports =
    ProfileExtractor;

