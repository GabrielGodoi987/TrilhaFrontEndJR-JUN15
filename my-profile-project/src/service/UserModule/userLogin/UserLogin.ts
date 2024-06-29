import {auth, db} from '../../Firebase.Config'
import {createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from 'firebase/auth'
import type {UserModel} from "@/models/UserModel/user.model";
import {doc, setDoc} from 'firebase/firestore';

export class AuthUserService {
    async createUser(user: UserModel): Promise<any> {
        return createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
            const usersCredential = userCredential.user;
            setDoc(doc(db, 'Users',), {
                uid: usersCredential.uid,
                name: user.name,
                email: user.name,
                role: user.role
            });
            const verification = sendEmailVerification(usersCredential)
            return userCredential.user;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }

    async loginUser(user: UserModel): Promise<any> {
        return signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
            console.log(userCredential.user);
            return userCredential.user;
        }).catch(e => {
            console.log(e);
            return false;
        })
    }
}