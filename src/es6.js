// var name = "imooc"
// var  course = "reac开发app"

// function hello(name) {
//     console.log(`hello ${name}!`)
// }

// const hello1 = (name) =>{
//     console.log(`hello ${name}~`)
// }


// hello('zengyao');
// hello1('yaobaozai')

// setTimeout(() => {
//     console.log('xxx')
// },1000)

// const double = x =>x*2
// console.log(double(5))

// 默认值
// const hello = (name="zengyao") => {
//     console.log(`hello ${name}!`)
// }
// hello();

// function hello(name1,name2){
//     console.log(name1,name2)
// }
// var arr = ['imooc','zengyao']
// // hello.apply(null,arr)
// hello(...arr)

// var obj = { name: 'imooc', course: 'React开发app'}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// let name = 'imooc'
// let obj = {}
// obj[name] = 'hello zeng'
// console.log(obj[name])

// const obj = {name:'imooc', course: 'react'}
// const obj2 = {type: 'it', name: 'woniu'}
// console.log({...obj,...obj2})

// const arr = ['hello', 'imooc']

// let arg1 = arr[0]
// let arg2 = arr[1]
//批量赋值
// let [arg1, arg2] = arr;
// console.log(arg1,arg2);

// const obj = {name: 'imooc', course: 'React'}
// const {name,course} = obj
// console.log(name, '|', course)

class MyApp {
    constructor() {
        this.name = 'imooc'
    }
    sayHello() {
        console.log(`hello ${this.name}`)
    }
}
const app = new MyApp()
app.sayHello()

// set map symbol