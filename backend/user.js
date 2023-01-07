const con = require('./db.js')
require('dotenv').config(); 
const express = require('express');
const router = express.Router();
const twilio = require('twilio'); // for OTP purpose

const accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_PASSWORD; // Your Auth Token from www.twilio.com/console
      

//Get all User History and OTP 
router.get("/", function(req,res){
   try{
        con.getConnection((err,connection)=> {

            if (err) throw err;
            connection.query("SELECT * FROM otpusers", (err, result, fields)=> {
                connection.release();
                if (err) throw err;
                res.send(result);
            });
        })  
   }catch(err){
    console.log(err)
   }
    
})

// OTP and details are posted and first sent to TWILIO after receiving correct responsem Data is further sent to mySQL cloud DB and then response is sent to Frontend
router.post('/',async function(req,res){
    try{ 

        let {phone,name,otp} = req.body        
        const client = new twilio(accountSid, authToken);   
              
            client.messages
            .create({
                body: "Hi. Your OTP is: "+otp,
                to: phone, // Text this number
                from: '+19034742661', // From a valid Twilio number
            })
            .then((message) => {
                // console.log(message)
                // console.log(message.sid)
            
                if(message.errorMessage == null){
                    var sql = "INSERT INTO otpusers (phone,name,otp,otptime) VALUES ('"+phone+"','"+name+"','"+otp+"','"+message.dateUpdated+"') ";
                    con.getConnection((err,connection)=> {
                        if (err) throw err;
                        connection.query(sql, function (err, result) {
                            connection.release();
                            if (err) throw err;    
                            if(result.affectedRows == 1){
                                res.send(true) 
                            }else{
                                res.send(false) 
                            }
                        });
                     })
                }else {
                    res.send(false);
                }

            });
             
       
        
    }catch( error ){
        console.log(error);
    }
});


module.exports = router;