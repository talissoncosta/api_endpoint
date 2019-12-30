
const hello =  (req, res) => {
    try {
        var { name } = req.query; 
    
        if(!name || name.length < 1){
            return res.status(400).send({
                error: "Invalid parameters!"
            })
        }
    
        res.send({
            message: `Hello ${name}`
        });
    } catch (error) {
        res.status(500).json({
            error: error
        })
    }

}

module.exports = {
    hello
}