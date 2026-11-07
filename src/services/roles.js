import pool from "../config/db.js"

class roleService{
    async createrole(req){
        const {name}= req.body

        const existRole = pool.query("select * from roles where name=$1",[name])
        if ((await (existRole)).rows.length){
            return {
                status:401,
                message:"Role already exist"
            }
        }

        await pool.query(`insert into roles(name) valuses($1)`,[name])

        return {
            status:201,
            message:"Role created"
        }
    }
}