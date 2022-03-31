import express from 'express'
import router from './Routes/routes'
import path from 'path';
const app = express();

const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*'])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')
  next()
});

app.use(express.json());

app.use('/feedback', router);

app.use(express.static(path.join(__dirname, "..", "public ")));

app.get("/*", (req , res) => {
  res.sendFile(path.join(__dirname, "..", "public ", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}...`)
});
