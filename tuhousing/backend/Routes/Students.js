import express from 'express';
import  createPool  from '../server.js';
const router = express.Router()

//get all students seeking roommates
router.get("/", async (req, res) => {
    try {
        const studentsr = await createPool.query("SELECT * FROM Students LEFT JOIN StudentImages ON Students.idStudents = StudentImages.StudentID WHERE roomateseeking=1");
        res.json(studentsr);
    } catch (err) {
        res.json({ message: 'Error fetching data' });
    }
});


export default router;
