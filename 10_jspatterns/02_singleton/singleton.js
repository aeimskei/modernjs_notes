// =================== singleton pattern ===================

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object('Trying out object instance!');
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);