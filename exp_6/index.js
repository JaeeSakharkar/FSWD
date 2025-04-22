const express = require("express"); const app = express(); const PORT = 3000; 
 
app.use(express.json()); 
 
let pizzas = [ 
  { id: 1, name: "Margherita", size: "Small" }, 
  { id: 2, name: "Pepperoni", size: "Large" }, 
]; 
 
const validatePizza = (req, res, next) => {   const { name, size } = req.body; 
  if (!name || !size)     return res.status(400).json({ error: "Name and size are required" });   next(); 
}; 
 
app.get("/", (req, res) => {   res.send("Welcome to Pizza API"); 
}); 
 
app.get("/pizzas", (req, res) => {   res.json(pizzas); 
}); 
 
app.get("/pizzas/:id", (req, res) => {   const pizza = pizzas.find((p) => p.id === parseInt(req.params.id));   if (!pizza) return res.status(404).json({ error: "Pizza not found" });   res.json(pizza); 
}); 
 
app.post("/pizzas", validatePizza, (req, res) => {   const { name, size } = req.body;   const newPizza = { id: pizzas.length + 1, name, size };   pizzas.push(newPizza);   res.status(201).json(newPizza); 
}); 
 
app.put("/pizzas/:id", validatePizza, (req, res) => {   const pizza = pizzas.find((p) => p.id === parseInt(req.params.id));   if (!pizza) return res.status(404).json({ error: "Pizza not found" });   pizza.name = req.body.name;   pizza.size = req.body.size;   res.json(pizza); 
}); 
 
app.delete("/pizzas/:id", (req, res) => {   const index = pizzas.findIndex((p) => p.id === parseInt(req.params.id));   if (index === -1) return res.status(404).json({ error: "Pizza not found" });   const deleted = pizzas.splice(index, 1);   res.json({ message: "Pizza deleted", deleted }); 
}); 
 
app.use((err, req, res, next) => {   console.error(err.stack);   res.status(500).json({ error: "Something went wrong" }); 
}); 
 
app.listen(PORT, () => {   console.log(`Server running at http://localhost:${PORT}`); }); 
