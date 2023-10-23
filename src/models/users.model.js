import mongoose from "mongoose"

const userColecction = "users"

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
    rol: String
})

export const userModel = mongoose.model(userColecction, userSchema)