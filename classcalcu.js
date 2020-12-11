class calcu {
constructor(a1 , b2){
this.a1 = a1
this.b2 = b2
}}
class opr extends calcu{
get add (){return this.a1+this.b2}
get sub (){return this.a1-this.b2}
get multi (){return this.a1*this.b2}
get div (){return this.a1/this.b2}
get sqr (){return this.a1*this.b2}
get pwr (){return Math.pow (this.a1,this.b2)}
get cbrt (){return Math.cbrt (this.a1,this.b2)}
get per (){return (this.a1/this.b2)*100}

}

var ans = new opr(25,45)
console.log(`
Addition     : ${ans.add}
Subraction   : ${ans.sub} 
Multiply     : ${ans.multi}
Divi         : ${ans.div}
Square       : ${ans.sqr}
Power        : ${ans.pwr}
Cube Root    : ${ans.cbrt}
Percent      : ${ans.per}

`)







































































































