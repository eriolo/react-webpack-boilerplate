/**
 * Helper for injecting css in the DOM
 * @returns {bool} true
 */
export const onInsertCss = (...styles) => {
  styles.forEach(style => style._insertCss()); // eslint-disable-line no-underscore-dangle
};

export default onInsertCss;
