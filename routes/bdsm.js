const db = require("quick.db")
const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
module.exports = {
  name: "nsfw/bdsm",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: require("./assets/utils.json").KeyError})
    };
    var image = await akaneko.nsfw.bdsm()
    res.json({ 
      url: image,  
    })
    db.add("reqs_nsfw",1)
    db.add("reqs_bdsm",1)
  }
}