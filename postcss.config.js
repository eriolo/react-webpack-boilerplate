/**
 * PostCSS Load Config
 * https://github.com/michael-ciniawsky/postcss-load-config
 * @return {object}     PostCSS load config
 */
module.exports = () => ({
  /**
   * The list of plugins for PostCSS
   * https://github.com/postcss/postcss
   */
  plugins: {
    /**
     * Adds vendor prefixes
     * https://github.com/postcss/autoprefixer
     */
    'autoprefixer': {},
    /**
     * Postcss flexbox bug fixer
     * https://github.com/luisrudge/postcss-flexbugs-fixes
     */
    'postcss-flexbugs-fixes': {},
    /**
     * PostCSS plugin that adds 'fix' and 'fix-legacy' arguments to the 'clear' property
     * https://github.com/seaneking/postcss-clearfix
     */
    'postcss-clearfix': {}
  }
});
