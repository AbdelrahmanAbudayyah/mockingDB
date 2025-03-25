const {getUser}=require('./database');

async function getUserInfo(userId) {
    const user = await getUser(userId);
    return user.name;    
}

getUserInfo(1).then(console.log);
module.exports=getUserInfo;