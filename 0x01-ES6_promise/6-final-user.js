import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(fileName, lastName, firstName){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => {
        return res.map(e => ({ status: e.status, value: e.value }))
    })
}