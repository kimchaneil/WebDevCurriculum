class CjsUtilClass {
    constructor(foo) {
        this.foo = foo;
    }

    double() {
        return foo * 2;
    }
}

const cjsUtilFunction = str => {
    return str.toUpperCase();
};
module.exports=CjsUtilClass; //commonjs 방식으로 export
module.exports=cjsUtilFunction; 
// TODO: 다른 패키지가 CjsUtilClass와 cjsUtilFunction를 가져다 쓰려면 어떻게 해야 할까요?
