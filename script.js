function sendMessage() {

    let input = document.getElementById("user-input");
    let originalMessage = input.value;
    let message = originalMessage.toLowerCase();

    let chatBox = document.getElementById("chat-box");

    if (message === "") {
        return;
    }

    // User message
    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = originalMessage;
    chatBox.appendChild(userDiv);

    // Clear input
    input.value = "";

    // Scroll down
    chatBox.scrollTop = chatBox.scrollHeight;

    // Typing effect
    let typingDiv = document.createElement("div");
    typingDiv.className = "bot-message";
    typingDiv.innerText = "EduBot AI is typing...";
    chatBox.appendChild(typingDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    // AI delay
    setTimeout(() => {

        let botReply = "Sorry, I don't understand that yet.";

        // Greetings
        if (message.includes("hello") || message.includes("hi")) {

            let hour = new Date().getHours();

            if (hour < 12) {
                botReply = "Good morning! I am EduBot AI.";
            }

            else if (hour < 18) {
                botReply = "Good afternoon! I am EduBot AI.";
            }

            else {
                botReply = "Good evening! I am EduBot AI.";
            }
        }

        // Name
        else if (message.includes("your name")) {
            botReply = "My name is EduBot AI, your smart study assistant.";
        }

        // AI
        else if (message.includes("ai")) {
            botReply = "Artificial Intelligence helps computers think, learn, and solve problems.";
        }

        // INSA
        else if (message.includes("insa")) {
            botReply = "INSA is the Information Network Security Administration of Ethiopia.";
        }

        // Cybersecurity
        else if (message.includes("cybersecurity")) {
            botReply = "Cybersecurity protects computers, systems, and data from attacks.";
        }

        // Study
        else if (message.includes("study")) {
            botReply = "Study consistently every day and practice what you learn.";
        }

        // Ethiopia
        else if (message.includes("ethiopia")) {
            botReply = "Ethiopia is growing fast in technology, innovation, and digital education.";
        }

        // Time
        else if (message.includes("time")) {

            let now = new Date();

            botReply = "Current time: " + now.toLocaleTimeString();
        }

        // Date
        else if (message.includes("date")) {

            let today = new Date();

            botReply = "Today's date is " + today.toDateString();
        }

        // Motivation
        else if (message.includes("motivate me")) {
            botReply = "Never give up. Great programmers start small and improve every day.";
        }

        // Joke
        else if (message.includes("joke")) {
            botReply = "Why do programmers hate bugs? Because bugs debug them back!";
        }

        // Math
        else if (message.startsWith("calculate")) {

            try {

                let expression = message.replace("calculate", "");

                let result = eval(expression);

                botReply = "The answer is " + result;

            } catch {

                botReply = "I could not calculate that.";
            }
        }

        // Goodbye
        else if (message.includes("bye")) {
            botReply = "Goodbye! Keep learning and building amazing things.";
        }

        // Remove typing message
        chatBox.removeChild(typingDiv);

        // Bot reply
        let botDiv = document.createElement("div");
        botDiv.className = "bot-message";
        botDiv.innerText = botReply;
        chatBox.appendChild(botDiv);

        // Auto scroll
        chatBox.scrollTop = chatBox.scrollHeight;

    }, 1000);
}

// ENTER key support
document.getElementById("user-input")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});