
const container = document.querySelector(".container");
const length_config = document.querySelector("button#config");
const bw_button = document.querySelector("button#bw");
const rgb_button = document.querySelector("button#rgb");
const eraser = document.querySelector("#eraser")
const clear_grid = document.querySelector("#clear-grid")

let curr_mode = document.querySelector("span#current-mode")
let curr_size = document.querySelector("span#current-length")
let rgb = false
let erase = false

let size = 16;

length_config.addEventListener("click", () => {
    let input = +prompt("Enter side length:");

    if (input <= 100) {
        size = input;
        curr_size.textContent = "" + input;
        resetGrid();
    }
    else {
        alert("Error: Side length must be less than or equal to 100.")
    }

})

bw_button.addEventListener("click", () => {
    erase = false;
    if (rgb) {
        rgb = false;
        curr_mode.textContent = "Black & White";
    }
    
})

rgb_button.addEventListener("click", () => {
    erase = false;
    if (!rgb) {
        rgb = true;
        curr_mode.textContent = "RGB"
    }
})

eraser.addEventListener("click", () => {
    if (!erase) {
        erase = true;
    }
})

clear_grid.addEventListener("click", () => {
    resetGrid();
})

function resetGrid() {
    removeGrid()
    createGrid();
}


function createGrid() {
    for (let i = 0; i < size; i++) {
        for (let i = 0; i < size; i++) {
        
            const div = document.createElement("div");
            div.classList.add("square")
            div.style.height = "" + (container.offsetHeight / size) + "px";
            div.style.width = "" + (container.offsetWidth / size) + "px";

            div.addEventListener("mouseover", () => {
                if (erase) {
                    div.style.backgroundColor = "white";
                } else {
                    if (rgb) {
                        div.style.backgroundColor = color();
                    } else {
                        div.style.backgroundColor = "black";
                    }
                }
                
            })

    
            container.appendChild(div);
        }
    }
}

function color() {
    result = `rgb(${Math.floor(Math.random() * 257)}, \
    ${Math.floor(Math.random() * 257)}, \
    ${Math.floor(Math.random() * 257)})`;
    
    return result;
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}




createGrid();

