function checkpete(name: string | number): string {
    if (name == "pete") {
        return "I kak " + name
    } else if (name == "pinto") {
        return "Hello Mrs " + name
    } else {
        return "Hello " + name
    }
}

console.log(checkpete("Kiew"))