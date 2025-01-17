//Lexical scope is not closure/Closure basics
let x=1;

const parentFunction =() => {
    let myValue=2;
    console.log(x);
    console.log(myValue);

    const childFunction= ()=>{
        console.log(x+=5);
        console.log(myValue+=1);
    }
    return childFunction;
}

const result=parentFunction();
console.log(result);

result();
result();
result();
console.log(x);
console.log(myValue);

//closure with an IIFE
//IIFE(Immediately Invoked Function Expression)
const privateCounter =(()=>{
    let count=0;
    console.log(`initial value: ${count}`);
    return ()=> {count+=1;console.log(count)}
})();

privateCounter();
privateCounter();
privateCounter();


//Closure with an IIFE and a Parameter

const credits =((num)=>{
    let credits =num;
    console.log(`initial credits value: ${credits}`);
    return()=>{
        credits-=1;
        if(credits>0) console.log(`playing game, ${credits} credits(s) remaining`);
        if(credits<=0) console.log('not enough credits');
    }
})(3);

credits();
credits();
credits();
