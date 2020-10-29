export default {
  fetch: function(name) {
    try {
      return window.JSON.parse(window.localStorage.getItem(name));
    } catch (err) {
      return {};
    }
  },
  save: function(name, items) {
    window.localStorage.setItem(name, window.JSON.stringify(items));
  },
  remove: function(name) {
    window.localStorage.removeItem(name);
  },
};
