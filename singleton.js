// Singleton
const Singleton = (function(){
    let instance;

    function createInstance() {
        const object = new Object({text: 'Instance here!!!'});
        return object;
    }

    return {
        getInstace: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();


const instanceA = Singleton.getInstace();
const instanceB = Singleton.getInstace();
console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);