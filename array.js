var fruit=["apples","oranges","bananas","grapes","oranges"];
function startsWithG(value,index,array){
  alert(value);
}
 /*startsWithG(value,index,array){
    return value[0]==='a'||value[0]==='b';
}*/
function isLengthOne(value,index,array){
return value.length===5;
}
fruit.foreach(startWithG);
alert(fruit.filter(startsWithG));
//every some filter
