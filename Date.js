var date=new Date(1905,5,21,12,45,2);

var months=[
    "janauare",
    "fabruary",
    "march",
    "april",
    "may",
    "june"
   ];
date.setMonth(3)
var days=[
    "luni",
    "marti",
    "miercuri",
    "joi",
    "vineri",
    "sambata",
    "duminica"
   ];
var day=days[date.getDay()];
alert(date);
