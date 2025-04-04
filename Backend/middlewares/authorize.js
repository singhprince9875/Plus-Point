const jwt = require('jsonwebtoken');

const authorizeRole = (requiredRole)=>{
    return (req,res,next)=>{
        try{
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: 'Authorization header not found' });
            }
            const token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
            if(!decoded || !decoded.role){
                return res.status(401).json({ message: 'Invalid token', success:false });
            }
            if(decoded.role !== requiredRole){
                return res.status(403).json({ message: 'Forbidden: Insufficient permissions', success:false });
            }
            req.user = decoded;
            next();
        }catch(error){
            console.error("Authorization error in authorize role",error);
            res.status(500).json({ message: 'Authorization error', success:false });
        }
    }
}
module.exports = authorizeRole;