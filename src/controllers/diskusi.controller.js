const diskusi = require('../models/')

const getAll = async (req, res) => {
  try {
    const data = await diskusi.findAll();
    return res.status(200).json({
      message: 'succes get all data',
      results: data
    })
  } catch (error) {
    return res.status(500).json({message: 'internal server error'})
  }
}

const addDiskusi = async (req, res) => {
  try {
   // const {userId} = req.userId;
    const { isi } = req.body;

    if(isi) {
      return res.status(400).json({
        message: "is hasn't to be null"
      })
    }

    const data = await diskusi.create({
      isi: isi,
   //   user_id: userId,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return res.status(200).json({
      message: 'success add diskusi',
      result: data
    })
    
  } catch (error) {
    return res.status(500).json({message: 'internal server error'})
  }
}

module.exports = {
  getAll,
  addDiskusi
}
