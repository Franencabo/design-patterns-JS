// Basic structure

// (function(){
//     // Declare private vars and functions


//     return {
//         // Declare public var and functions
//     }
// })();

// Standard module pattern
const UICtrl = (function(){
    let text = 'Hello World';

    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        callChangeText: function(){
            changeText();
            console.log(text);
        }
    }
})();

UICtrl.callChangeText();
UICtrl.changeText(); // You can't access to this variable

// Revealing module pattern
const ItemCtrl = (function(){
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added...')
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }

    return {
        add: add,
        get: get
    }
})();


ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));