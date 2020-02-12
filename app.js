console.log("hello World");
let add_btn=document.querySelector("#Add");
console.log(add_btn);
add_btn.addEventListener('click', add);
let clr_btn=document.querySelector("#Clear");
console.log(clr_btn);
clr_btn.addEventListener('click', removAll);
function verif_exist(Task){
    let exist= 0;
    let children = document.querySelectorAll('li');
    let cpt=0;
    while(cpt<children.length){
        if(children[cpt].querySelector('p').innerText.includes(Task)){
            exist++;
        }
        cpt++;
    }
    return exist;
}
function add(e){
    let first=false;
    let Task = document.querySelector('input').value;
    let ul = document.querySelector('ul');
    let p_no = document.querySelector('#NO');
    console.log(p_no);
    if (Task.length !== 0) {
        document.querySelector("#Clear").style.display = 'inline-block';
        if (ul.children.length===1 && p_no!==null){
            first=true;
            console.log("FFIRST");
            p_no.remove()
        }
        let li = document.createElement('li');
        let rpt;
        if(first){
            rpt=0;
        }
        else{rpt= verif_exist(Task);}
        console.log(rpt);
         if(!rpt){
            li.innerHTML='<p>'+Task+'</p> <i class="far fa-times-circle"></i>';
         }else{
            li.innerHTML='<p>'+Task+' ('+(rpt+1)+')'+'</p> <i class="far fa-times-circle"></i>';
         }
        li.querySelector('.fa-times-circle').addEventListener('click',remov);
        if(!first){li.style.borderTop='0';}
        ul.appendChild(li);
    }
}
function remov(e){
    e.target.parentElement.remove();
    let ul = document.querySelector('ul');
    if(ul.children.length>=1){
    ul.children[0].style.borderTop=ul.children[0].style.border;
    }else{
        document.querySelector("#Clear").style.display = 'none';
        let p = document.createElement('p');
        p.id = 'NO';
        p.innerText="There isn't any Task Currently!! , make your day productive and add some tasks to do dude !!"
        ul.appendChild(p);

    }
}
function removAll(){
    let cfrm=confirm("Are you Sure you want to delete all your Tasks to do");
    if (cfrm){
        document.querySelector("#Clear").style.display = 'none';
        console.log('YES');
        let ul = document.querySelector('ul');
        ul.innerHTML="<p id='NO'>There isn't any Task Currently!! , make your day productive and add some tasks to do dude !!</p>";
    }
}