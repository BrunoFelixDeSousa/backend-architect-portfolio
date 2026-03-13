/**
 * "The best code is no code at all." — Jeff Atwood
 * "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
 */

export const printConsoleSignature = () => {
  const styles = {
    header: 'color: #00d4ff; font-size: 16px; font-weight: bold; font-family: monospace;',
    quote: 'color: #8b5cf6; font-size: 12px; font-style: italic; font-family: monospace;',
    text: 'color: #94a3b8; font-size: 11px; font-family: monospace;',
    link: 'color: #00d4ff; font-size: 11px; font-family: monospace; text-decoration: underline;',
    hidden: 'color: #334155; font-size: 10px; font-family: monospace;',
  };

  console.log('%c╔══════════════════════════════════════════════╗', styles.header);
  console.log('%c║          Hello, fellow developer.            ║', styles.header);
  console.log('%c╚══════════════════════════════════════════════╝', styles.header);
  console.log('');
  console.log('%c"If you\'re reading this, curiosity probably drives your work too."', styles.quote);
  console.log('');
  console.log('%c→ Backend Engineer | Java · Quarkus · Spring Boot · NestJS', styles.text);
  console.log('%c→ Clean Architecture · Domain-Driven Design · CQRS', styles.text);
  console.log('%c→ Building systems that are testable, maintainable, and elegant.', styles.text);
  console.log('');
  console.log('%c→ GitHub: https://github.com/BrunoFelixDeSousa', styles.link);
  console.log('');
  console.log('%c"Make it work, make it right, make it fast." — Kent Beck', styles.quote);
  console.log('');
  console.log('%c// Hint: Try pressing ↑ ↑ ↓ ↓ ← → ← → on the keyboard...', styles.hidden);
  console.log('%c// Hint: There\'s a place at /lab that few have found.', styles.hidden);
  console.log('');
  // Base64 encoded message
  console.log(
    '%c// ' + btoa('Software is not just code. It is the crystallization of human thought into executable logic. Build systems that outlive you.'),
    styles.hidden
  );
};
