const loader = function () {
    setTimeout(function(){
        const loaderVid = document.querySelector(".VideoContent")
        loaderVid.classList.toggle("VideoContent_hidden")
    }, 7000);
};

loader();