// Cache selectors

let menuItems = $('ul#menu li');

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {
    console.log("click");
    let href = $(e.currentTarget).find('a').attr('href');
    let offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function() {

    let fromTop = $(this).scrollTop();

    let items = menuItems.toArray();
    let curr = items.find(function (item) {
        let href = $($(item).find('a').attr('href'))[0];
        if (href.offsetTop + href.offsetHeight - 5 > fromTop) {
            return item;
        }
    });

    // console.log("selected");
    console.log(curr);
    console.log($($(curr).find('a').attr('href'))[0]);

    menuItems.removeClass("active");
    $(curr).addClass("active");


    // if (lastId !== id) {
    //     lastId = id;
    //     // Set/remove active class
    //     menuItems
    //         .parent().removeClass("active")
    //         .end().filter("[href='#" + id + "']").parent().addClass("active");
    // }
});