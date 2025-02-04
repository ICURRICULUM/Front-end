export const parseTranscript = (text: string) => {
  const regex = /([\w\s:ⅠⅡⅢ-]+)\s+([\d.]+)\s+([A-FP+-]+)\s+([\w]+)\s+([\w\d]+)/g;
  const courses = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    courses.push({
      name: match[1].trim(),
      credit: parseFloat(match[2]),
      grade: match[3],
      category: match[4],
      code: match[5],
    });
  }

  return courses;
};
