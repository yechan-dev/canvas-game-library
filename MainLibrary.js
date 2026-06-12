let has_scene = false;
let sprites = {};

let keys = {};

document.addEventListener("keydown", e => {
    keys[e.key] = true;
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;
});

function isKeyPressed(key) {
    return !!keys[key];
}

function createScene(x, y) {
    if (has_scene) return;
    has_scene = true;

    let scene = document.createElement("canvas");
    scene.width = x;
    scene.height = y;
    scene.className = "scene"
    scene.style.border = "1px solid black";

    document.body.appendChild(scene);

    return {
        scene,
        setSceneSize(x, y){
            scene.width = x;
            scene.height = y;
        }
    }
}

function reload_sprite() {
    let canvas = document.querySelector(".scene");
    if (!canvas) return;
    let ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i in sprites) {
        let current = sprites[i];
        ctx.fillStyle = "black";
        ctx.fillStyle = current.color
        ctx.fillRect(
            current.x,
            current.y,
            current.width,
            current.height
        );
    }
}

function createSprite (name) {
    let canvas = document.querySelector(".scene");
    let ctx = canvas.getContext("2d");

    sprites[name] = {};
    
    function send_sprite (x, y, width, height, color){
        sprites[name]["width"] = width;
        sprites[name]["height"] = height;
        sprites[name]["x"] = x;
        sprites[name]["y"] = y;
        sprites[name]["color"] = color;
    }

    send_sprite(0, 0, 50, 50);

    return {
        goX (value){
            sprites[name]["x"] += value;
        },
        goY (value){
            sprites[name]["y"] += value;
        },
        setLocation (x, y){
            sprites[name]["x"] = x;
            sprites[name]["y"] = y;
        },
        setSize (x, y){
            sprites[name]["width"] = x;
            sprites[name]["height"] = y;
        },
        setWidth(value){
            sprites[name]["width"] = value;
        },
        setHeight(value){
            sprites[name]["height"] = value;
        },
        setX(value){
            sprites[name]["x"] = value;
        },
        setY(value){
            sprites[name]["y"] = value;
        },
        setColor(value){
            sprites[name]["color"] = value;
        }
    }
}

function loop(callback) {
    function frame() {
        reload_sprite();

        if (callback) {
            callback();
        }

        requestAnimationFrame(frame);
    }

    frame();
}
loop();
