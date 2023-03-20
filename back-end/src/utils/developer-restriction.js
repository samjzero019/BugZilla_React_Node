 module.exports = (req,res,next)=>{
    if (req.session.current_user.role === "developer") {
        return res.status(401).json({
          message: "Role Permission Restriction",
          error: "Developer Role can't create Bug resources",
        });
      }
      
 }