
//styling Element

//queryselector
const title = document.querySelector('#heading');
title.style.color = 'red';

console.log('title');


//querySelectorAll
const listitem= document.querySelectorAll('.list-items');
for ( i = 0 ; i < listitem.length; i++){
    listitem[i].style.fontSize= '5rem';
}
console.log(listitem);


//creating Element

const ul = document.querySelector('ul');
const li = document.createElement('li');

//Adding Elements
ul.append(li)
// elements append به شما امکان می دهد اشیاء رشته را نیز اضافه کنید
// elements append هیچ مقدار بازگشتی ندارد، می تواند چندین گره و رشته را اضافه کند.


// Modifying the text

li.innerText= 'Me Before You';
//رشته ای که محتوای متن رندر شده یک عنصر را نشان می دهد.
//به آخرین لیستمون اضافه شد 

// Modifying Attributes & Classes

li.classList.add('list-items')

//با استفاده از classlist
// اون کلاسی که بهش پاس میدیم خاصیت اون رو میگیره 


//Remove Elements

li.remove();
// آخرین فرزند رو پاک میکنه 



//Event Listener

// Click

const buttontwo = document.querySelector('.btn2');

function alertbtn(){
    alert('I also Love Js');
}

buttontwo.addEventListener("click",alertbtn);



//mouseover

const bgcolor = document.querySelector('.btn3');

function changbgcolor() {
    bgcolor.style.backgroundColor = 'blue'
};

bgcolor.addEventListener("mouseover", changbgcolor);


//Reveal Event

const revealBtn = document.querySelector('.reveal-btn');

const hiddencontent = document.querySelector('.hidden-contant');

function revealContent(){

    if (hiddencontent.classList.contains('reveal-btn')){
        hiddencontent.classList.remove('reveal-btn')
    }else{
        hiddencontent.classList.add('reveal-btn')
    }
}

revealBtn.addEventListener('click',revealContent)