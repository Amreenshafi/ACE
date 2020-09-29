
// Script For Closing Menu from Outside -->
$(document).ready(function () {
    $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});

function opendesing(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg1");
    var imgText = document.getElementById("imgtext1");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
// Get the element with id="defaultOpen" and click on it
    document.getElementById("defaultOpen1").click();
    function myFunction1(imgs) {
        var expandImg = document.getElementById("expandedImg");
        var imgText = document.getElementById("imgtext");
        expandImg.src = imgs.src;
        imgText.innerHTML = imgs.alt;
        expandImg.parentElement.style.display = "block";
    }
    // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen2").click();
        function myFunction2(imgs) {
            var expandImg = document.getElementById("expandedImg2");
            var imgText = document.getElementById("imgtext2");
            expandImg.src = imgs.src;
            imgText.innerHTML = imgs.alt;
            expandImg.parentElement.style.display = "block";
        }
        // Get the element with id="defaultOpen" and click on it
            document.getElementById("defaultOpen3").click();



            function showModal0() {
                $('#myModal0').modal('show');
            }
            function showModal1() {
                $('#myModal1').modal('show');
            }
            function showModal2() {
                $('#myModal2').modal('show');
            }
           
