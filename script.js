function Character(name,strenght,health)
{
    this.name=name;
    this.strenght=strenght;
    this.health=health;
    this.attackBtn=document.querySelector(`#${this.name}-attack `)
    this.healthBtn=document.querySelector(`#${this.name}-make-health `)
    this.progress=document.querySelector(`.${this.name}-health span `)
    this.alive=document.querySelector(`#${this.name}-alive `)
}
Character.prototype.attack=function(opponent)
{
    if(opponent.health>0){
opponent.health-=this.strenght;
opponent.progress.style.width=`${opponent.health}%`;
    }
else{
opponent.attackBtn.remove();
opponent.healthBtn.remove();
opponent.alive.innerHTML=`${opponent.name} is died`
}
}
Character.prototype.status = function()
{
    console.log(`name: ${this.name}`);
    console.log(`strength: ${this.strenght}`);
    console.log(`healthe: ${this.health}`);
}
Character.prototype.makeHealth = function()
{
if(this.health<100)
{
    this.health+=10;
    this.progress.style.width=`${this.health}%`

}
if(this.health>100)
{
    this.health=100
}
}
let nartoo=new Character("nartoo",10,100);
let skata=new Character("skata",10,100); 
nartoo.attackBtn.addEventListener('click',function()
{
    nartoo.attack(skata);
}
)

skata.attackBtn.addEventListener('click',function()
{
    skata.attack(nartoo);

}
)
nartoo.healthBtn.addEventListener("click",function()
{
    nartoo.makeHealth();
})
skata.healthBtn.addEventListener("click",function()
{
    skata.makeHealth();
})