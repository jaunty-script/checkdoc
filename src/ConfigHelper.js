module.exports = class ConfigHelper {
  static coerceDocuments(documents) {
    const coerced = [];
    documents.forEach((document) => {
      if (document == null) {
        return;
      }
      if (Array.isArray(document)) {
        return;
      }
      if (typeof document === 'object') {
        coerced.push(document);
        return;
      }
      if (typeof document === 'string') {
        const [file, dependency] = document.split(':');
        coerced.push({
          file,
          dependencies: [dependency],
        });
      }
    });
    return coerced;
  }
};
