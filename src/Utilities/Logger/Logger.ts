const Logger = {
  warning: function(text) {
    console.warn(text);
  },
  error: function(text) {
    throw new Error(text);
  }
};

export default Logger;
