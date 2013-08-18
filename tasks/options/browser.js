module.exports = {
  "dist": {
    src: ["vendor/spin.js", "vendor/loader.js", "vendor/moment.js", "vendor/ember-inflector.js", "tmp/dist/**/*.js"],
    dest: "dist/adminjs.js",
    options: {
      barename: "adminjs/main",
      namespace: "AJS"
    }
  }
}