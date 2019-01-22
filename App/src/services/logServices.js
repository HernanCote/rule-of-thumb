/* eslint no-undef: 0 */
/* eslint no-console: 0 */

function init() {
  //We could set up raven or other loggin framework. For now we'll use console.log
  console.log('Initialized logs');
}

function log(error) {
  console.info(error);
}

export default {
  init,
  log
};
