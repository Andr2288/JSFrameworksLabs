function foo1(strVar: string, numVar: number = 20) {
    console.log(strVar + '\n' + numVar);
}

foo1('Hello TS', 100);
foo1('Hello TS');
