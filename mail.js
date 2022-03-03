const nodemailer=require("nodemailer")

var transporter=nodemailer.createTransport({
    service:"gmail",
   auth:{ 
       user:"testnode122@gmail.com",
        pass:"node12345"
    }
})

const sendMail=(email,subject,text,cb)=>{
    var mailOptions={
        from:"testnode122@gmail.com",
        to:email,
        subject:subject,
        text:text
    }
    
    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            cb(error,null);
        }else {
            cb((null,data));
        }
    })
}
module.exports= sendMail;