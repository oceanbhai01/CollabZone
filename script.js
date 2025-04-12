
function selectPlatform(platform) {
    document.getElementById('platform').value = platform;
    document.getElementById('collabForm').style.display = 'block';
}

function submitForm(event) {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    const sheetURL = "https://docs.google.com/forms/d/e/1FAIpQLSfZmA0iDmjw3MjpsWwt4PfYGGlqDGaeE7U7EUQqfOEZaVDzRw/formResponse";

    const formData = new FormData();
    formData.append("entry.1234567890", obj.platform);      // Replace with your real entry IDs
    formData.append("entry.2345678901", obj.channelName);
    formData.append("entry.3456789012", obj.followers);
    formData.append("entry.4567890123", obj.price);

    fetch(sheetURL, { method: "POST", mode: "no-cors", body: formData });

    document.getElementById("response").textContent = "Submitted!";
    form.reset();
    form.style.display = "none";
}
