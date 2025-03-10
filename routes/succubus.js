const akaneko = require('akaneko');
const keysList = require('../assets/keys.js').keys
const db = require("quick.db")
module.exports = {
  name: "nsfw/succubus",
  run: async(req, res) => {
    let { key } = req.query;
    if (!key || !keysList.includes(key)) {
      return res.json({ error: require("./assets/utils.json").KeyError})
    };
    var image = await akaneko.nsfw.succubus()
    res.json({ 
      url: image,  
    })
    db.add("reqs_nsfw",1)
    db.add("reqs_succubus",1)
  }
}