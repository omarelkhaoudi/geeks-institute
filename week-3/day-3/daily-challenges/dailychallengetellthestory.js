let Story = document.getElementById("story");
const storyTime = "";

const form = document.getElementById("libform");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;
    const adverb = document.getElementById("place").value;

    const story = `Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}.`;
    Story.textContent = story;  
    form.reset();
});
