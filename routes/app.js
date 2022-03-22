const express = require("express");
const casual = require("casual")
const router = express.Router();

router.get("/", (req, res) => {
  try{
    let persons = []
    for(let i = 0; i < 100; i++){
      var name = casual.first_name
      var lastname = casual.last_name
      var address = casual.address1
      var country = casual.country
      persons.push({
        name,
        lastname,
        address,
        country
      })
    }

    res.json(persons)
  }catch(err){
    console.log(err)
  }
})

router.get("/:range", (req, res) => {
    const range = req.params.range;
    var persons = []
    try{
      if(/^[0-9]+\-[0-9]+$/.test(range)){
        var lower = range.split("-")[0]
        var higher = range.split("-")[1]
        for(let i = 0; i < 100; i++){
          var name = casual.first_name
          var last_name = casual.last_name
          var country = casual.country
          var address = casual.address
          if(name.length <= higher && name.length >= lower){
            persons.push({
              name,
              last_name,
              address,
              country
            })
          }else{
            continue
          }
        }
      }
      res.json(persons)
    }catch(err){
      console.log(err)
    }
})

module.exports = router