// Parses resume text for years of experience using common patterns.
class ExperienceExtractor {
  static getExperience(text) {
    const patterns = [
      /(\d+)\+?\s*years?\s*of\s*experience/i,
      /experience\s*:\s*(\d+)\+?\s*years?/i,
      /(\d+)\+?\s*years?/i
    ];

    for (const pattern of patterns) {
      const match = text.match(pattern);

      if (match) {
        return Number(match[1]);
      }
    }

    return 0;
  }

  // Backwards-compatible method name expected by tests
  static extract(text) {
    return this.getExperience(text);
  }
}

module.exports = ExperienceExtractor;