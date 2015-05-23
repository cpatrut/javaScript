var utility = (function () {
    var i = 0;
    return {
        nameGen: function() {
       var name = "customName" + i;
            i++;
            return name;
        }
    }
}
());
var name = utility.nameGen();
var name3=utility.nameGen();
alert(name);
alert(name3);
