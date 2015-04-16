var widgetBuilder = require("libwidget/libWidget").newBuilder(this);

_.extend(this, {
    construct: function (config) {
        widgetBuilder.addRules({
            title: "#label.text",
            type: function (value) {
                var changeColor = function (color) {
                    widgetBuilder.setProperty("#outer", "backgroundColor", color);
                    widgetBuilder.setProperty("#inner", "backgroundColor", color);
                }
                switch(value) {
                    case "primary": changeColor("#1DB7FF"); break;
                    case "cancel": changeColor("#E52D35"); break;
                    default: changeColor("#BABABA");
                }
            }
        }).build(config);
    }
});
