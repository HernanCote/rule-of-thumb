/* eslint no-console: 0 */
/* eslint no-undef: 0 */

import http from './httpServices';

const apiEndpoint = '/users';

export function signup(user) {
  console.log('Fuck it goes here');
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    age: user.age,
    marriageStatus: user.marriageStatus
  });
}

export default {
  signup
};
