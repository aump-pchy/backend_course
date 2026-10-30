import express from "express";

const app = express();
const PORT = 3000;
const equipment = [
  { id: 1, name: "Arduino Uno", quantity: 10, category: "ไมโครคอนโทรลเลอร์" },
  { id: 2, name: "Raspberry Pi", quantity: 5, category: "Single-Board Computer" },
  { id: 3, name: "ESP32", quantity: 15, category: "ไมโครคอนโทรลเลอร์" }
];

app.get("/api/equipment", (req, res) => {
    const cat =  req.query.category;
    const n = req.query.name;

    const result = cat?equipment.filter(item=>item.category === cat)
    :equipment;

    res.status(200).json(result);
});

app.get('/api/health',(req,res)=>{
    res.status(200).json(
        {
            status:'OK'
        }
    );
})

app.listen(PORT, () => {
    console.log(`Server is running on 
        http://localhost:${PORT}`);
});