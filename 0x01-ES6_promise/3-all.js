import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([res, names]) => {
      // console.log(res)
      console.log(res.body, names.firstName, names.lastName);
    });
}
