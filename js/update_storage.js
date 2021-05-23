function updateStorage(tasks) {

    localStorage.setItem("tasks", JSON.stringify(tasks));

}

export default updateStorage;