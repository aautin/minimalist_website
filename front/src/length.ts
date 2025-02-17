async function getLength() {
    const nameLength = document.getElementById("nameLength")! as HTMLLabelElement;
    const name = document.getElementById("name")! as HTMLInputElement;

    let length : number;
    const nameValue = name.value;
    try {
        // Wait for the fetch request to complete and get the response
        const response = await fetch("http://localhost:3000/name-length", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: nameValue })  // Send the 'name' value
        });

        // Parse the response as JSON
        const data = await response.json();
        length = data.length;

        // Update the label with the name length
        nameLength.textContent = `Name length: ${length}`;
        nameLength.style.display = "block";
    } catch (error) {
        console.error("Error:", error);
    }

    name.value = "";
}
