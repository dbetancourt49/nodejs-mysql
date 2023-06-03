import {pool} from '../db.js';

export const ping = async (req,res) =>{
    try{
        const [result] = await pool.query('SELECT \'Pong\' AS RESULT');
        res.json(result[0]);
    }
    catch(err){
        return res.status(500).json({
            message: 'Something goes wrong'
        });
    }
}