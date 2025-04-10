import UserFindStrategy from "./UserFindStrategy.js";
import User from "../../../../models/User.js";

export default class DefaultUserFindStrategy extends UserFindStrategy{
    async executar(){
        return await User.findAll()
    }
}