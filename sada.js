doS("helo,world",2);

function doS(arg1) {
    var variable1="asdf";
    return function(){
    alert(arg1);
    };
    
    //  var length=arguments.length
   //    alert(arguments.callee);
    // alert("hello dfunction declaration");
}
var fn=doS("hello,closure");
fn();

fn=null;
