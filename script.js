let questions = [];

function submitFeedback() {
    const teamName = document.getElementById('team-name').value.trim();
    const feedback = document.getElementById('feedback').value.trim();
    
    if (teamName !== "" && feedback !== "") {
        questions.push({ teamName, feedback, yes: 0, no: 0 });
        document.getElementById('team-name').value = "";
        document.getElementById('feedback').value = "";
        displayQuestions();
    }
}

function displayQuestions() {
    const questionsList = document.getElementById('questions-list');
    questionsList.innerHTML = '';
    questions.forEach((q, index) => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <div><strong>チーム名:</strong> ${q.teamName}</div>
            <div><strong>自由記述:</strong> ${q.feedback}</div>
            <button class="yes" onclick="vote(${index}, 'yes')">Yes</button>
            <button class="no" onclick="vote(${index}, 'no')">No</button>
        `;
        questionsList.appendChild(questionItem);
    });
}

function vote(index, type) {
    if (type === 'yes') {
        questions[index].yes++;
    } else {
        questions[index].no++;
    }
    displayThankYouMessage();
}

function displayThankYouMessage() {
    document.getElementById('thank-you-message').style.display = 'block';
    setTimeout(() => {
        document.getElementById('thank-you-message').style.display = 'none';
    }, 3000);
}
