module.exports = {
    method: 'GET',
    url: '/api/example/',
    async execute(req,res) {
        res.json({ monkey: "monkey", ni: "monkey"})
    }
}