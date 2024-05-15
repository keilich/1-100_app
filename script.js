let questions = [];

function submitFeedback() {
    const feedback = document.getElementById('feedback').value;
    if (feedback.trim() !== "") {
        questions.push({ question: feedback, yes: 0, no: 0 });
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
            <div>${q.question}</div>
            <button class="yes" onclick="vote(${index}, 'yes')">Yes</button>
            <button class="no" onclick="vote(${index}, 'no')">No</button>
            <div>Yes: ${q.yes}, No: ${q.no}, Yes/(Yes+No): ${(q.yes + q.no > 0 ? (q.yes / (q.yes + q.no) * 100).toFixed(2) : 0)}%</div>
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
    displayQuestions();
}
