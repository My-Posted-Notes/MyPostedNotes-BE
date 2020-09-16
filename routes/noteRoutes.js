const express = require('express');

const router = express.Router();
const dbMethods = require('../db_methods/note_methods.js');

// router.get('/', (req, res) => {
//   const races = ['human', 'elf', 'hobbit', 'wizard', 'dwarf', 'orc'];

//   res.status(200).json(races);
// });

router.get('/', (req,res)=>{
  dbMethods.getNotes()
    .then(notes=>{
      res.status(200).json(notes);
    })
    .catch(err=>res.status(500).json(err));
});

router.get('/:id',(req,res)=>{
  const id = req.params.id;
  dbMethods.getNote(id)
      .then(note=>{
          // console.log(note);
          if (note && note != {}){
              res.status(200).json(note);
          } else {
              res.status(404).json({
              Error: "ID not found"
              })
          }
          })
      .catch(err=>res.status(500).json(err));
});

router.post('/', (req, res)=>{
  const note = req.body;
  dbMethods.addNote(note)
      .then(id=>{
          res.status(201).json(note);
      })
      .catch(err=>res.status(500).json(err));
});

router.delete('/:id', (req, res)=>{
  const id = req.params.id;
  dbMethods.deleteNote(id)
    .then(notes =>{
      if (notes && notes.length != 0){
        res.status(200).json({
          Success: "Note deleted."
        });
      } else {
          res.status(404).json({
            Error: "ID not found"
          })
      }
    })
    .catch(err=>res.status(500).json(err));
});

router.put('/:id', (req, res)=>{
  const id = req.params.id;
  const newNote = req.body;
  dbMethods.updateNote(id, newNote)
    .then(notes =>{
      if (notes && notes.length != 0){
        res.status(200).json({
          Success: "Note updated."
        });
      } else {
        res.status(404).json({
          Error: "ID not found"
        })
      }
    })
    .catch(err=>res.status(500).json(err)); 
  })


module.exports = router;