document.addEventListener('scroll',function funk1() {  
    if(window.scrollY > 0){
        item.style.opacity=1
    }
    else{
        item.style.opacity=0
    }
})
function funk() {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

// const posts=[
//     {title:'Armud',body:"Yaxsi sulu meyvedir"},
//     {title:'Alma',body:"Yaxsi sulu meyvedir"},
//     {title:'Heyva',body:"Yaxsi sulu meyvedir"},
//     {title:'Nar',body:"Yaxsi sulu meyvedir"}
// ];
// function getPost() {   
//     setTimeout(()=>{
//         let content='';
//         posts.forEach((post,index)=> {
//             content+=`<li>${index+1} ${post.title}</li>`
//         })
//         document.body.innerHTML=content
//     },1000)
// };
// function newPost(post) {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post)
//             const error=false;
//             if(error){
//                 resolve()
//             }
//             else{
//                 reject('Error:Bir sehv var.')
//             }
//         },1000)  
//     })
// };
// newPost({title:"Badimcan",body:'cox babat yemekdir'}).then(getPost).catch((err)=>{console.log(err)})

const promise1=Promise.resolve('Hello World');
const promise2=1234;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,200,'hellow dilber');
});
const promise4=fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then((res)=>res.json())

Promise.all([promise1,promise2,promise3,promise4]).then((res)=>{
    console.log(res)
})