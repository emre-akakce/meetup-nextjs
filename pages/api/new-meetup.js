
function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const {title, image, address, description} = data;
        console.log(data)
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler