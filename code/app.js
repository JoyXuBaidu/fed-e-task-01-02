const fp = require("lodash/fp")
const {Maybe,Container} = require("./support");

const cars = [
  {name:"Ferrari FF", horsepower:660,
  dollar_value:700000,in_stock:true},
  {name:"Spyker C12 zagato",horsepower:650,
  dollar_value:648000,in_stock:false},
  {name:"Audi R8",horsepower:525,
  dollar_value:114200,in_stock:false}
]
//代码题1

//练习1
const isLAstInStock = fp.flowRight(fp.prop('in_stock'),fp.last)

isLAstInStock(cars);

//练习2
const firstCarName = fp.flowRight(fp.prop('name'),fp.first);

firstCarName(cars)

//练习3
let _average = function(xs) {
  return fp.reduce(fp.add,0,xs) / xs.length
}

const averageDollar = fp.flowRight(_average,fp.map(fp.prop('dollar_value')));

averageDollar(cars)

//练习4
let _underscore = fp.replace(/\W+/g,'_');

const sanitizeNames = fp.flowRight(fp.map(fp.flowRight(_underscore,fp.toLower)),fp.map(fp.prop('name')));

sanitizeNames(cars)

//==========================
//代码题2
//练习1
let maybe = Maybe.of([5,6,1])

const ex1 = (add) => fp.map(fp.add(add));

maybe.map(ex1(2));

//练习2
let xs = Container.of(['do','yar','me','fa','so','la','ti','do'])
let ex2 = fp.first;

xs.map(ex2);

//练习3
let safeProp = fp.curry(function(x,o){
  return Maybe.of(o[x]);
})

let user = {id:2,name:'Albert'}

let ex3 = (obj,arg) => safeProp(arg)(obj).map(fp.first)
ex3(user,"name");

//练习4
let ex4 = (n) => Maybe.of(n).map(parseInt);


