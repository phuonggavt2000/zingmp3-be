import db from "../models";
import bcrypt from "bcryptjs";
import { v4 as generateId } from "uuid";

const hashPass = (pass) => bcrypt.hashSync(pass, bcrypt.genSaltSync(8));

export const register = ({ email, password, name }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { email },
                defaults: {
                    email,
                    password: hashPass(password),
                    name,
                    id: generateId(),
                },
            });
            resolve({
                err: response[1] ? 0 : 1,
                mes: response[1]
                    ? "Register is successfully"
                    : "This email has existed",
            });
        } catch (error) {
            reject(error);
        }
    });

export const login = ({ email, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { email },
            });
            if (response) {
                const user = bcrypt.compareSync(password, response.password);
                resolve({
                    err: user ? 0 : 1,
                    mes: user ? "Valid Email and Password" : "Wrong Password",
                });
            } else {
                resolve({
                    mess: "User not found!",
                });
            }
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
