class EventObserver {
  constructor() {
    this.observers = [];
  }
  subscribe(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsuscribe(fn){
    this.observers = this.observers.filter(function (item) {
        if (item !== fn) {
          return item;
        }
      });
      console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire() {
    this.observers.forEach(function (item) {
        item.call();
      });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector(".sub-ms").addEventListener("click", function () {
  click.suscribe(getCurrMilliseconds);
});
document.querySelector(".sub-s").addEventListener("click", function () {
  click.suscribe(getCurrSeconds);
});
document.querySelector(".unsub-ms").addEventListener("click", function () {
  click.unsuscribe(getCurrMilliseconds);
});
document.querySelector(".unsub-s").addEventListener("click", function () {
  click.unsuscribe(getCurrSeconds);
});
document.querySelector(".fire").addEventListener("click", function () {
  click.fire();
});

// Click Handler
const getCurrMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};
const getCurrSeconds = function () {
  console.log(`Current Milliseconds: ${new Date().getSeconds()}`);
};
