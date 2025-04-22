const express = require("express"); const app = express(); const PORT = 3000; 
 
app.use(express.json()); 
 
app.use((req, res, next) => {   console.log(`${req.method} ${req.url}`); 
  next(); 
}); 
 
let pizzas = [ 
  { id: 1, name: "Margherita", size: "Medium" }, 
  { id: 2, name: "Pepperoni", size: "Large" }, 
]; 
 
app.get("/", (req, res) => {   res.send("Welcome to the Pizza House!"); 
}); 
 
app.get("/pizzas", (req, res) => {   res.json(pizzas); 
}); 
 
 
app.post("/pizzas", (req, res) => {   const { name, size } = req.body; 
  if (!name || !size) 
    return res.status(400).json({ error: "Name and size are required" });   const newPizza = { 
    id: pizzas.length + 1,     name, 
    size, 
  }; 
  pizzas.push(newPizza);   res.status(201).json(newPizza); 
}); 
 
 
app.use((err, req, res, next) => {   console.error(err.stack);   res.status(500).send("Something went wrong!"); 
}); 
 
app.listen(PORT, () => { 
  console.log(`Pizza server is running on http://localhost:${PORT}`);}); 

