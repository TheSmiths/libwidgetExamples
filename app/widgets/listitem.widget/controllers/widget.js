var widgetBuilder = require("libwidget/index").newBuilder(this);

var m = Ti.UI.create2DMatrix({
    rotate: 45
});

_.extend(this, {
    construct: function (config) {
        widgetBuilder.addRules({
            // Picture
            picture: "#picture.image",
            // Arrow TODO: init with function
            arrowColor: "#pointer.backgroundColor",
            // Button
            button: "#button.title",
            buttonColor: "#button.backgroundColor",
            buttonTextColor: "#button.color",
            // Title
            title: "#title.text",
            titleColor: "#title.color",
            // Description
            description: "#description.text",
            descriptionColor: "#description.color",
            // Price
            price: "#price.text",
            priceColor: "#price.color",
            // Footer
            separatorColor: "#footer.backgroundColor",
            // All
            color: [
                "#title.color",
                "#description.color",
                "#price.color"
            ],
            fontFamily: function(family) {
                widgetBuilder.setProperty("#title", "font.fontFamily", family);
                widgetBuilder.setProperty("#description", "font.fontFamily", family);
                widgetBuilder.setProperty("#price", "font.fontFamily", family);
            }
        }).build(config, $.item);

        // Rotate arrow view
        $.pointer.transform = m;
    }
});
