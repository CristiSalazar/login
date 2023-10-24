import { userModel } from "../models/users.model"

class UserManager extends userModel
{
    constructor(){
        super()
    }

        async addUser(userData)
        {
            try 
            {
                await userModel.create(userData)
                return "usuario agregado"
            } catch(error){
                console.error("Error al agregar usuario", error)
                return "Error al agregar el usuario"
            }
        }

        async updateUser(id, userData)
        {
            try{
                const user= await UserManager.findById(id)
                if(!user){
                    return("Usuario no encontrado")
                }
                user.set(userData)
                await user.save()
                return "Usuario actualizado"
            } catch(error){
                console.error("Error al actualizar er usuario", error)
                return "Error al actualizar el usuario"
            }
        }

        async getUsers() {
            try {
                const users = await UserManager.find({})
                return users
            }catch (error)
            {
                console.error("Error al obtener usuarios", error)
                return[]
            }
        }

        async getUserById(){
            try{
                const user = await UserManager.findById(id).lean()
                if(!user){
                    return "Usuario no encontrado"
                }
                return user
            } catch(error){
                console.error("Error al obtener el usuario", error)
                return "Error al obtener el usuario"
            }
        }

        async deletUserId(id){
            try{
                const user= await UserManager.findById(id)
                if(!user){
                    return "Usuario no encontrado"
                }
                await user.remove()
                return "Usuario elminado"
            } catch(error){
                console.error("Error al eliminar el usuario", error)
                return "Error al eliminar el usuario"
            }
        }

        async validateUser(param){
            try{
                const user= await UserManager.findOne({email:param})
                if(!user){
                    return "Usuario no encontrado"
                }
                return user
            }
            catch(error){
                console.error("Error al validar el usuario", error)
                return "Error al obtener el usuario"
            }
        }
}
export default UserManager