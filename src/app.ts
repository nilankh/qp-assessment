import express from 'express';
import routes from './routes/routes'
const app = express()

const port = 3000
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes)

// app.get('/',(req, res) => {
//     res.send("hello woirld")
// })
app.listen(port, () => {
    console.log(`Hello NILANK NIKHIL app is listening at http://localhost:${port}`)
});