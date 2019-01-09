const Mock=require('mockjs');

let db=Mock.mock({
    'data|3-6':[{
        id:'@id',
        name:'@name',
        'age|18-32':1
    }]
});

module.exports={
    [`GET /api/loginuser`](req,res){

        res.status(200).json(db);
    },
    // [`GET /api/login`](req,res){

    //     let user=req.body;
    //     console.log(req);
    //     user.id=Mock.mock('@id');
    //     user.name=Mock.mock('@name');
    //     db.data.push(user);
        
    //     res.status(200).json(user);
    // },
    [`POST /api/login`](req,res){

        // let user=req.body;
        // console.log(req);
        // user.id=Mock.mock('@id');
        // db.data.push(user);
        
        res.status(200).json({code:1,data:{username:'guo',id:1}});
    }
}