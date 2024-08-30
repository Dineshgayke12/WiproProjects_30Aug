let count=0;

function myCount(){

    let count=0;
   function inc() { count +=1;}
   inc();

    return count;
}

document.getElementById("count").innerHTML=myCount;