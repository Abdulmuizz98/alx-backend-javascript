import { createUser, uploadPhoto } from "./utils";

export default async function asyncUploadUser(){
    const res = await Promise.all([uploadPhoto(), createUser()])
    try{
        const photo = await uploadPhoto();
        const user = await createUser();
        return { photo, user }
        
    }catch(err){
        return {
            photo: null,
            user: null
        }
    }
}