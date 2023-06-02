import {pool} from '../db.js';
export const getEmployees = async (req,res) => {
    try{
        //throw new Error('DB Error')
        const [rows] = await pool.query('SELECT * from employee');
        res.json(rows);
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}
export const getEmployee = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * from employee where id = ?', [req.params.id]);
        if (rows.length <= 0){
            return res.status(404).json({
                message: "Employee not found"
            });
        }
        res.json(rows[0]);
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }    
}
export const createEmployees = async (req,res) => {
    const {name,salary} = req.body;
    try{
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?,?)',[name,salary])
        res.send({
            id:rows.insertId,
            name,
            salary
        });
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}
export const updateEmployees = async (req,res) => {
    const {id} = req.params;
    const {name,salary} = req.body;
    try{
        const [result] = await pool.query(
            `UPDATE employee SET 
                name = IFNULL(?,name),
                salary = IFNULL(?,salary) 
             WHERE id = ?`,[name,salary,id]);
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message: "Employee not found"
            });
        }
        const [rows] = await pool.query('SELECT * from employee where id = ?', [req.params.id]);
        res.json(rows[0]);
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}
export const deleteEmployees = async (req,res) => {
    try{
        const [result] = await pool.query('DELETE from employee where id = ?', [req.params.id]);
        if (result.affectedRows <= 0){
            return res.status(404).json({
                message: "Employee not found"
            });
        }
        // res.status(204).json({
        //     message: "Employee deleted"
        // });
        res.sendStatus(204);
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}