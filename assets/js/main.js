textScroll = "SECTION HOME: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
textScroll2 = "SECTION HOME: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"

const mercury= document.querySelector("#mercury")
window.addEventListener("click", (e)=>{
    if (mercury.checked) {
        textScroll = "SECTION HOME: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION HOME: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    } else if (venus.checked){
        textScroll = "SECTION ABOUT: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION ABOUT: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    } else if (earth.checked){
        textScroll = "SECTION SERVICES: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION SERVICES: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    } else if (mars.checked){
        textScroll = "SECTION PORTOFOLIO: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION PORTOFOLIO: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    } else if (jupiter.checked){
        textScroll = "SECTION TEAM: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION TEAM: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    } else if (saturn.checked){
        textScroll = "SECTION CONTACT: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text one"
        textScroll2 = "SECTION CONTACT: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus sit voluptates iure, dignissimos impedit quidem nulla ea nobis perspiciatis. text two"
    }
})
