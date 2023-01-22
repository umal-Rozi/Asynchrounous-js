

let request = new XMLHttpRequest();

// GET Request  markaad data kaliya so akhrinysid weyaan 
// POST request  markaad infomartio database u diraysid
// PUT request  markaad post upadte garaynaysid

//console.log(request.readyState);
request.addEventListener('readystatechange' ,()=>{
    if(request.readyState===4 && request.status===200){
        console.log(request.responseText);
    }else if(request.readyState===4) {
        console.log('paba wax ba qladan ');
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/posts/1');
//console.log(request.readyState);

request.send();
//console.log(request.readyState);





//callback :  waa function aad ka dhex wcaysid inside the function
// function socda ayaa ka dhex wacaysaa anther fumction kleh wakhti aad u goamisay adigu 


function shouldprintfirst( callback) {
    
    setTimeout( () =>{
        console.log('first')
        callback();

    },1000   )
}

function shouldprintseconds(){
    console.log('seconds');
}

shouldprintfirst(shouldprintseconds);



function sumUpNumbers( num1, num2){
    return num1+num2;
}
function printsummedNumbers (value){
    console.log('summed numbers ${value}');
}

printsummedNumbers( sumUpNumbers(20,30) );


// callback hell  cll laga dhex wacayo anter call calkeh 

//function counter(){

//}


//promises isku day samysid 
//1. inaad ku quulaystay 2.inaad ku guul darysatoh 

 let condition = false;
const  test= new Promise (  ( resolve, reject)  =>{
    if(condition){
        resolve ("oki wyeh paba ");
    }else{
        reject("qalad weyeh paba");
    }

}) 

test.then(  (successmessege)=>{
    console.log(successmessege);

}).catch( (erro) => console.log(erro))


//promises real projects

const getpost=(resources)=>{

    return new Promise ((resolve, teject) =>{
        let request = new XMLHttpRequest();

request.addEventListener('readystatechange' ,()=>{
    if(request.readyState===4 && request.status===200){
        let data =JSON.parse(request.responseText);
        resolve(data);
    }else if(request.readyState===4) {
        reject('paba wax ba qladan ');
    }
});

request.open('GET',resources)
request.send();

    });

}
getpost('./post.JSON').then( (data) =>{
    console.log(data);
})




// Aysnic and Await
const getDta =async ()=>{
    const request =await fetch('https://jsonplaceholder.typicode.com/posts');

    const response =await request.json();

    return response;
}

getDta().then (data =>{
    console.log(data);
 
})