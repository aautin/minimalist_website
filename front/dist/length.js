var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getLength() {
    return __awaiter(this, void 0, void 0, function* () {
        const nameLength = document.getElementById("nameLength");
        const name = document.getElementById("name");
        let length;
        const nameValue = name.value;
        try {
            // Wait for the fetch request to complete and get the response
            const response = yield fetch("http://localhost:3000/name-length", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name: nameValue }) // Send the 'name' value
            });
            // Parse the response as JSON
            const data = yield response.json();
            length = data.length;
            // Update the label with the name length
            nameLength.textContent = `Name length: ${length}`;
            nameLength.style.display = "block";
        }
        catch (error) {
            console.error("Error:", error);
        }
        name.value = "";
    });
}
