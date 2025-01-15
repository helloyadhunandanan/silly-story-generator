document.getElementById("generateStory").addEventListener("click", function() {
    const characters = ["a unicorn", "a pirate", "an alien", "a wizard"];
    const actions = ["danced", "sang", "flew", "ate"];
    const objects = ["pizza", "a balloon", "a sword", "a magic wand"];
    const places = ["in the sky", "on the moon", "at the beach", "in a castle"];

    const character = characters[Math.floor(Math.random() * characters.length)];
    const action = actions[Math.floor(Math.random() * actions.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    const place = places[Math.floor(Math.random() * places.length)];

    const story = `One day, ${character} ${action} with ${object} ${place}.`;
    document.getElementById("story").textContent = story;
});
