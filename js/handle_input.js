

function handleInput(e, fn, tasks) {

    e.target.onkeydown = function (e) {
        e = e || window.event;
        if (e.key === "Enter" || e.code === "Enter") {
            fn(e, tasks);
        }
    };

}

export default handleInput;

