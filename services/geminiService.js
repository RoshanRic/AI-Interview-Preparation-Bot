const { GoogleGenerativeAI } = require("@google/generative-ai");

// Uses Gemini AI to generate a tailored list of interview questions based on skills and experience.
class GeminiService {
    static async generateQuestions(skills, experience) {
        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

            const model =
                genAI.getGenerativeModel({
                    model: "gemini-2.5-flash"
                });

            const prompt = `
Generate exactly 50 interview questions.

Candidate Experience: ${experience} Years

Skills:${skills.join(", ")}

Rules:
1. Questions should be practical.
2. Include scenario-based questions.
3. Include framework design questions.
4. Include API questions if API skill exists.
5. Include Playwright questions if Playwright skill exists.
6. Number questions from 1 to 50 only.
`;

            const result = await model.generateContent(prompt);

            const response = await result.response;

            const text = response.text();

            const questions = text
                .split("\n")
                .filter(line =>
                    /^\d+\./.test(
                        line.trim()
                    )
                )
                .map(line =>
                    line
                        .replace(
                            /^\d+\.\s*/,
                            ""
                        )
                        .trim()
                );

            return questions;
        } catch (error) {
            console.log("[GeminiService] AI request failed:", error.message);

            return [];
        }
    }
}

module.exports = GeminiService;