let started=false;
let level=0;
let gameSeq=[];
let userSeq=[];
let curr_level=0;
let flashRandom=function(){
    let num=Math.floor(Math.random()*4)+1;
    console.log(num);
    let rndbtn;
    if(num==1)
    {
   rndbtn=document.querySelector(".pink");

    }
    if(num==2)
    {
        rndbtn=document.querySelector(".blue");
    }
    if(num==3)
    {
        rndbtn=document.querySelector(".orange");
    }
    if(num==4)
    {
        rndbtn=document.querySelector(".purple");
    }
    rndbtn.classList.add("flash");
    setTimeout(function(){
        rndbtn.classList.remove("flash");
    },500);
    gameSeq.push(`${num}`);
    console.log(gameSeq);
};
let levelUpdate=function()
{
level++;
curr_level=0;
let heading2=document.querySelector("h2");
heading2.innerText=`Level ${level}`;
userSeq.splice(0,userSeq.length);
flashRandom();
};
document.addEventListener("keypress",function(){
if(started==false)
{ 
console.log("game started");
started=true;
levelUpdate();
}
});
let btns=document.querySelectorAll(".btn");
btns.forEach((btn)=>{
    btn.addEventListener("click",function(){
        let clickedBtn = this;
        this.classList.add("flash");
        userSeq.push(this.innerText);
        console.log(userSeq);
        console.log("clicked");
        curr_level++;
        setTimeout(function(){
            clickedBtn.classList.remove("flash");
        },1000);
        if(userSeq[curr_level-1]===gameSeq[curr_level-1])
        {
            if(curr_level==level) setTimeout(levelUpdate,1000);
        }
        else{
            console.log("wrong entered");
            let heading2=document.querySelector("h2");
            heading2.innerText=`Wrong Answer ! Click To restart(Your score was ${level-1})`;

            console.log(heading2.innerText);
            level=0;
            started=false;
            gameSeq.splice(0,gameSeq.length);
            userSeq.splice(0,userSeq.length);
        }
    });
});