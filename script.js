function insert(num){
  document.form.textview.value=document.form.textview.value+num;
}
function equal(){
  var ins=document.form.textview.value;
  if(ins){
    document.form.textview.value=eval(document.form.textview.value);
  }}
function clearnum(){
  document.form.textview.value="";
}

function sheckeToUro(){
  document.form.textview.value = document.form.textview.value*0.27;
}
function uroToSheckel(){
  document.form.textview.value=document.form.textview.value/0.27;
}

function shekelToDollar(){
  document.form.textview.value=document.form.textview.value*.31;
}


function dollarToShekel(){
  document.form.textview.value=document.form.textview.value/.31;
}
