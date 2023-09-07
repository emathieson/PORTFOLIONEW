// JavaScript source code

//for on load:
$("#aboutMeLink").addClass("activeLink");
$("#experienceSection").hide();
$("#aboutMeSection").show();
$("#portfolioSection").hide();
$("#contactSection").hide();


//navigation link color changes
$("#aboutMeLink").click(function () {
    $("#aboutMeLink").addClass("activeLink");
    $("#portfolioLink").removeClass("activeLink");
    $("#experienceLink").removeClass("activeLink");
    $("#contactLink").removeClass("activeLink");

    $("#aboutMeSection").show();
    $("#experienceSection").hide();
    $("#portfolioSection").hide();
    $("#contactSection").hide();

});

$("#portfolioLink").click(function () {
    $("#aboutMeLink").removeClass("activeLink");
    $("#portfolioLink").addClass("activeLink");
    $("#experienceLink").removeClass("activeLink");
    $("#contactLink").removeClass("activeLink");

    $("#aboutMeSection").hide();
    $("#portfolioSection").show();
    $("#experienceSection").hide();
    $("#contactSection").hide();
});

$("#githubLink").click(function () {
    $("#aboutMeLink").removeClass("activeLink");
    $("#portfolioLink").removeClass("activeLink");
    $("#experienceLink").removeClass("activeLink");
    $("#contactLink").removeClass("activeLink");

    $("#aboutMeSection").hide();
    $("#portfolioSection").hide();
    $("#experienceSection").hide();
    $("#contactSection").hide();
});

$("#experienceLink").click(function () {
    $("#aboutMeLink").removeClass("activeLink");
    $("#portfolioLink").removeClass("activeLink");
    $("#experienceLink").addClass("activeLink");
    $("#contactLink").removeClass("activeLink");

    $("#aboutMeSection").hide();
    $("#portfolioSection").hide();
    $("#experienceSection").show();
    $("#contactSection").hide();
});

$("#contactLink").click(function () {
    $("#aboutMeLink").removeClass("activeLink");
    $("#portfolioLink").removeClass("activeLink");
    $("#experienceLink").removeClass("activeLink");
    $("#contactLink").addClass("activeLink");

    $("#aboutMeSection").hide();
    $("#portfolioSection").hide();
    $("#experienceSection").hide();
    $("#contactSection").show();
});

$("#ContactButton").click(function () {
    $("#aboutMeLink").removeClass("activeLink");
    $("#portfolioLink").removeClass("activeLink");
    $("#experiencelink").removeClass("activeLink");
    $("#contactLink").addClass("activeLink");

    $("#aboutMeSection").hide();
    $("#portfolioSection").hide();
    $("#experienceSection").hide();
    $("#contactSection").show();
});


