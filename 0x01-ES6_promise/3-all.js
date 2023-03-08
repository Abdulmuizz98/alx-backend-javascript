// import uploadPhoto from './utils';
import * as utilsFunctions from "./utils";
// import createUser from './utils';


export default function handleProfileSignup() {
  Promise.all([utilsFunctions.uploadPhoto(), utilsFunctions.createUser()])
    .then(([res, names]) => {
      // console.log(res)
      console.log(`${res.body} ${names.firstName} ${names.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
