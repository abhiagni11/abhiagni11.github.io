const WORD_OF_THE_DAY_URL =
    "https://words.dev-apis.com/word-of-the-day?random=1";
const VALIDATE_WORD_URL = "https://words.dev-apis.com/validate-word";
const total_allowed_guesses = document.querySelectorAll(".guess-row").length;
let WORD_TO_GUESS = ``;
let active_guess_row_index = 0;

async function getTheWord() {
    const response = await fetch(WORD_OF_THE_DAY_URL);
    const data = await response.json();
    return data.word.toUpperCase();
}

async function validateWord(word_to_validate) {
    const response = await fetch(VALIDATE_WORD_URL, {
        method: "POST",
        body: JSON.stringify({ word: word_to_validate }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data.validWord;
}

function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

function disableInactiveInputs(all_inputs = false) {
    document.querySelectorAll(".guess-row").forEach((row, index) => {
        const inputs = row.querySelectorAll(".letter-box");
        if (all_inputs || index !== active_guess_row_index) {
            inputs.forEach((input) => {
                input.disabled = true;
            });
        } else {
            inputs.forEach((input) => {
                input.disabled = false;
            });
        }
    });
}

function attachEventListenersToActiveRow() {
    const inputs = document
        .querySelectorAll(".guess-row")
        [active_guess_row_index].querySelectorAll(".letter-box");

    inputs.forEach((input, input_index) => {
        input.addEventListener("input", function (e) {
            if (isLetter(input.value)) {
                input.value = input.value.toUpperCase();
                const nextInput = inputs[input_index + 1];
                if (input.value.length === input.maxLength) {
                    if (nextInput) {
                        nextInput.focus();
                    } else {
                        document.querySelector(".submit").focus();
                    }
                }
            } else {
                input.value = "";
            }
        });

        input.addEventListener("keydown", function (e) {
            if (e.key === "Backspace" && input.value === "") {
                e.preventDefault();
                if (input_index > 0) {
                    inputs[input_index - 1].focus();
                }
            }
        });
    });

    document
        .querySelector(".submit")
        .addEventListener("keydown", function (event) {
            if (event.key === "Backspace") {
                event.preventDefault();
                inputs[inputs.length - 1].focus();
            }
        });
}

function isGuessCorrect(submitted_guess) {
    if (submitted_guess === WORD_TO_GUESS) {
        disableInactiveInputs(true);
        return true;
    }
    return false;
}

function compareLettersAndUpdateColor(submitted_guess) {
    let correct_place = [];
    let incorrect_place = [];
    let word_to_guess_array = WORD_TO_GUESS.split("");

    for (let i = 0; i < WORD_TO_GUESS.length; i++) {
        if (submitted_guess[i] === WORD_TO_GUESS[i]) {
            correct_place.push(i);
            word_to_guess_array[i] = null;
        }
    }

    for (let i = 0; i < word_to_guess_array.length; i++) {
        if (
            submitted_guess[i] !== WORD_TO_GUESS[i] &&
            word_to_guess_array.includes(submitted_guess[i])
        ) {
            incorrect_place.push(i);
            word_to_guess_array[
                word_to_guess_array.indexOf(submitted_guess[i], i + 1)
            ] = null;
        }
    }
    correct_place.forEach(function (i) {
        document
            .querySelectorAll(".guess-row")
            [active_guess_row_index].querySelectorAll(".letter-box")
            [i].classList.add("correct-place");
    });
    incorrect_place.forEach(function (i) {
        document
            .querySelectorAll(".guess-row")
            [active_guess_row_index].querySelectorAll(".letter-box")
            [i].classList.add("incorrect-place");
    });
}

function updateGuessedRow() {
    active_guess_row_index += 1;
    if (active_guess_row_index >= total_allowed_guesses) {
        disableInactiveInputs();
        return;
    }
    setTimeout(() => {
        document
            .querySelectorAll(".guess-row")
            [active_guess_row_index].querySelectorAll(".letter-box")[0]
            .focus();
    }, 0);
    attachEventListenersToActiveRow();
    disableInactiveInputs();
}

async function handleSubmitClick(event) {
    let submitted_guess = "";
    let is_word_5_letter = true;
    let is_word_valid = false;
    const inputs = document
        .querySelectorAll(".guess-row")
        [active_guess_row_index].querySelectorAll(".letter-box");

    inputs.forEach((input) => {
        submitted_guess += input.value;
        if (input.value === "") {
            is_word_5_letter = false;
        }
    });

    if (!is_word_5_letter) {
        showToast("Invalid word. Need to have a 5-letter word.", 3000);
    } else {
        is_word_valid = await validateWord(submitted_guess);
        if (!is_word_valid) {
            showToast("Invalid word. Word not agreed by the dictionary.", 3000);
        } else {
            compareLettersAndUpdateColor(submitted_guess);
            updateGuessedRow();
            setTimeout(function () {
                if (!isGuessCorrect(submitted_guess)) {
                    if (active_guess_row_index >= total_allowed_guesses) {
                        showToast(
                            `Uh oh! You were not able to guess the word, this time...\nthe word was ${WORD_TO_GUESS}`,
                            6000
                        );
                        endGame();
                    }
                } else {
                    document.querySelector(".submit").disabled = true;
                    showToast(
                        `🎉 You guessed it right 🎉<br>That too in only ${active_guess_row_index} ${
                            active_guess_row_index === 1
                                ? "attempt"
                                : "attempts"
                        }!`,
                        5000,
                        true
                    );
                    endGame();
                }
            }, 0);
        }
    }
}

function endGame() {
    const submitButton = document.querySelector(".submit");
    submitButton.textContent = "TRY A NEW WORD?";
    submitButton.disabled = false;
    submitButton.focus();
    submitButton.removeEventListener("click", handleSubmitClick);
    submitButton.addEventListener("click", function () {
        location.reload();
    });
}

function showToast(message, duration, finish = false) {
    const toast = document.createElement("div");
    toast.className = "toast";
    if (finish) {
        toast.classList.add("toast-large");
    }
    toast.innerHTML = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("show");
    }, 100);
    setTimeout(() => {
        toast.classList.remove("show");
        toast.addEventListener("transitionend", () => toast.remove());
    }, duration);
}

async function init() {
    WORD_TO_GUESS = await getTheWord();
    disableInactiveInputs();
    attachEventListenersToActiveRow();
    document
        .querySelectorAll(".guess-row")
        [active_guess_row_index].querySelectorAll(".letter-box")[0]
        .focus();
    document
        .querySelector(".submit")
        .addEventListener("click", handleSubmitClick);

    const letters = document.querySelectorAll("#game .letter");

    letters.forEach((letter, index) => {
        setTimeout(() => letter.classList.add("drop-letter"), index * 300);
    });

    setTimeout(() => {
        document.querySelector(".infinite-icon").classList.add("dissolve-in");
    }, letters.length * 300 + 500);

    setTimeout(() => {
        showToast(
            "This Wordle gives you a new word every time you play it!",
            5000
        );
    }, letters.length * 300 + 1000);
}

document.addEventListener("DOMContentLoaded", init);
