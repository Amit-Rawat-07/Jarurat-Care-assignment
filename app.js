document.addEventListener("DOMContentLoaded", function() {
    let num = 0;
    const maxNum = 150;
    const minNum = 0;

    const numberDisplay = document.getElementById('number');
    const progressBar = document.getElementById('progress');
    
    const undoStack = [];
    const redoStack = [];

    function updateDisplay() {
        numberDisplay.textContent = num;
        const progressPercentage = (num / maxNum) * 100;
        progressBar.style.width = progressPercentage + '%';
    }

    function addNumber() {
        if (num < maxNum) {
            undoStack.push(num);
            num++;
            updateDisplay();
            redoStack.length = 0; // Clear redo stack
        }
    }

    function subtractNumber() {
        if (num > minNum) {
            undoStack.push(num);
            num--;
            updateDisplay();
            redoStack.length = 0; // Clear redo stack
        }
    }

    function undo() {
        if (undoStack.length > 0) {
            redoStack.push(num);
            num = undoStack.pop();
            updateDisplay();
        }
    }

    function redo() {
        if (redoStack.length > 0) {
            undoStack.push(num);
            num = redoStack.pop();
            updateDisplay();
        }
    }

    document.getElementById('add').addEventListener('click', addNumber);
    document.getElementById('subtract').addEventListener('click', subtractNumber);
    document.getElementById('undo').addEventListener('click', undo);
    document.getElementById('redo').addEventListener('click', redo);

    updateDisplay();
});