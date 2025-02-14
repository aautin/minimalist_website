function printName(): void {
    const name = (document.getElementById("name") as HTMLInputElement).value;

    nameDisplay.textContent = `Hello, ${name}!`;
    nameDisplay.style.display = "flex";
    document.getElementById("submitButton")!.style.display = "none";
    document.getElementById("label")!.style.display = "none";
    document.getElementById("name")!.style.display = "none";
}

const button = document.getElementById("submitButton")!;
button.addEventListener("click", printName);

const nameDisplay = document.getElementById("nameDisplay")!;