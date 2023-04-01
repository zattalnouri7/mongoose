const mongoose= require('mongoose');
require('dotenv').config()
//const ConnectDB = () => {
    mongoose.connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,

      },
      (err) => {
        if (err) {
          console.log(err);
        } else console.log("database connected");
      }
    );

    /*   //create one doc
  / let p=new person( {name:"nermine",
   age:28,
   favoriteFoods:["crepe"]
 })
 p.save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    })  */
   //}; */

    //create many documents
 let person=require('./person')
//  person.create([{name:"wajih",age:25,favoriteFoods:["sandwich"]},{name:"nermine",age:28,favoriteFoods:["crepe"]},{name:"fatma",age:28,favoriteFoods:["pizza"]}]) 
//  person.create([{name:"marwa",age:25,favoriteFoods:["pizza"]},{name:"karama",age:28,favoriteFoods:["pizza"]},{name:"badia",age:28,favoriteFoods:["pizza"]}]) 
  
  //find people having given name
  //using callback function to show result
/*  
   person.find({ name: 'nermine' },function (err, docs) {
    if (err){console.log(err)}
    else console.log(docs)
  }).exec();  */
 
  //findone with favoriteFood 
/*   person.findOne({ favoriteFoods: 'pizza' }, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */
 
  //findone by id 
/*   person.findById({_id:"60d204b0966a6f2ee8b9103f"} ,function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  }); */
/*   person.findById({_id:"60d204b0966a6f2ee8b9103f"} ,function (err, doc) {
    if (err){
      console.log(err)
    } else { doc.favoriteFoods.push('hamburger');doc.save();
      console.log(doc)}
    
  }); */

/*   person.findOneAndUpdate({name:"fatma"}, { $set: { age: 20 }},{new:true}, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */

/*   person.findByIdAndRemove({_id:"60d2025670f1ef28b4da3973"}, function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  }); 
 */


/*   person.remove({name:"fatma"},function (err, doc) {
    if (err){
      console.log(err)
    } else console.log(doc)
  });  */

  person.find({favoriteFoods:'pizza'}).sort({name:1}).limit(2).select("-age").exec(done=(err, doc)=> {
    if (err){
      console.log(err)
    } else {console.log(doc)}
    })