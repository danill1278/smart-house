const Logger = {
  warning: function(text: string) {
    console.warn(text);
  },
  error: function(text: string) {
    throw new Error(text);
  }
};

export default Logger;
