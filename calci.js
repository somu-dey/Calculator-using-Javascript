function display(value) {
    document.getElementById("textarea").value+=value;
}
function calculate() {
var value=document.getElementById("textarea").value;
var number=eval(value);
document.getElementById("textarea").value=number;

}
function reset(){
    document.getElementById("textarea").value=null;
}