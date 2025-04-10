import UserFindStrategy from "./UserFindStrategy.js";
import User from "../../../../models/User.js";

export default class DefaultUserFindStrategy extends UserFindStrategy{
    async executar(email){
        return await User.findOne({
            where:{
                email: email
            }
        })
    }
}