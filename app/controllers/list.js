
var listData = {
    listitem1: {
        title: "Title is important",
        description: "Description is also nice.",
        price: 110
    },
    listitem2: {
        title: "Another title",
        description: "But same description.",
        price: 220
    },
    listitem3: {
        title: "I lied...",
        description: "The latter was different!",
        price: 330
    }
}

function doOpen(e) {
    var width = $.list.rect.width,
        height = 175;
    _.each(listData, function(data, id){
        $[id].setTitle(data.title);
        $[id].setDescription(data.description);
        $[id].setPrice("€" + data.price);
        $[id].setPicture("http://lorempixel.com/g/"+ width + "/" + height);
    });
}
$.list.addEventListener("open", doOpen);
