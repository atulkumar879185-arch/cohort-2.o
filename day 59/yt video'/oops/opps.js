class Pencil{
    constructor(color,company,price){
        this.color=color,
        this.company,
        this.price

    }
    write(text){
       let h1=document.createElement('h1')
       h1.innerHTML=text;
       h1.style.color=this.color;
       document.body.appendChild(h1)

    }
    
}

class Admin extends Pencil{
    constructor(color,company,price){
        super(color,company,price)

    }
    erase(){
        document.querySelectorAll('h1').forEach(function (elem){
            elem.remove();

        });
    }
}


let p1=new Pencil("red","natra",45)
let p2=new Pencil("blue","doms",89)
let adm=new Admin("cyan","domc",78)

