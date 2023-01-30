let string = "";
let f=0;
const arr=document.getElementsByTagName("button");

// const one=document.querySelector(".one");
// const two=document.querySelector(".two");
// const three=document.querySelector(".three");
// const four=document.querySelector(".four");
// const five=document.querySelector(".five");
// const six=document.querySelector(".six");
// const seven=document.querySelector(".seven");
// const eight=document.querySelector(".eight");
// const nine=document.querySelector(".nine");
// const div=document.querySelector(".div");
// const mul=document.querySelector(".mul");
// const dec=document.querySelector(".dec");
// const sub=document.querySelector(".sub");
// const add=document.querySelector(".add");
// const cancle=document.querySelector(".cancle");
// const eqe=document.querySelector(".eqe");
// const zero=document.querySelector(".zero");

const fun=(e)=>{
  return e.addEventListener('click',()=>{
    let temp=e.innerText;
    if(temp=="="){
      string=eval(string);
      document.getElementById("input").value=string;
      f=1;
    }
    else if(temp=="C"){
      string="";
      document.getElementById("input").value=string;
    }
    else{
      if(f==1){
      if(temp=="/"||temp=="*"||temp=="+"||temp=="-"){
        string+=temp;
        document.getElementById('input').value=string;
        f=0;
      }
      else{
      string="";
      string+=temp;
      document.getElementById('input').value=string;
      f=0;
      }
      
    }
    else{
      string+=temp;
      document.getElementById('input').value=string;
      f=0;

    }
      
    }

  });
};
for(const x in arr){
  fun(arr[x]);
}

// fun(one);
// fun(two);
// fun(three);
// fun(four);
// fun(five);
// fun(six);
// fun(seven);
// fun(eight);
// fun(nine);
// fun(div);
// fun(mul);
// fun(add);
// fun(sub);
// fun(dec);
// fun(eqe);
// fun(cancle);
// fun(zero);
