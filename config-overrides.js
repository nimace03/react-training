module.exports = function override(config, env) {
    config.optimization.splitChunks = {
        cacheGroups: {
            default: false
        }
    };
    config.optimization.runtimeChunk = false;
    config.output.filename = "static/js/todo.js";
    config.plugins[5].options.moduleFilename = () => "static/css/todo-style.css";
    return config;
}