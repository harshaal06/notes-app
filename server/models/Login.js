import { model, Schema } from "mongoose";

const loginSchema = new Schema({
    password: String
})
const Login = model("Login", loginSchema);

export default Login;