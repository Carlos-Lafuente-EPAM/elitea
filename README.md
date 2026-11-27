# quiz-cli

## Project Description

`quiz-cli` is an interactive command-line quiz game built with Node.js. It helps players practice JavaScript, Node.js, and general programming knowledge by answering multiple-choice questions and reviewing their results.

## Key Features

- Choose from JavaScript Basics, Node.js Fundamentals, and General Programming.
- Select how many questions to answer.
- Answer shuffled multiple-choice questions.
- See immediate feedback and explanations.
- Track progress and view a final score.
- Review incorrect answers.
- Choose to play again.
- Uses ANSI terminal styling without external dependencies.

## Technology Stack

- JavaScript with ES modules.
- Node.js `>=18.0.0`.
- Node.js built-in `readline`, file system, URL, and path modules.
- Node.js built-in test runner (`node --test`).

## Project Structure

```text
test-app/
├── README.md             # Project documentation
├── package.json          # Project metadata, Node.js requirement, and scripts
├── index.js              # Application entry point and interactive quiz flow
├── data/
│   └── questions.json    # Quiz categories, questions, answers, and explanations
└── src/
    ├── colors.js         # ANSI terminal color and style helpers
    ├── input.js          # Terminal input and prompt utilities
    └── quiz.js           # Question flow, scoring, progress, and results
```

## Prerequisites

- Node.js `>=18.0.0`.
- npm, which is distributed with Node.js.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Carlos-Lafuente-EPAM/elitea.git
   ```

2. Change to the project directory:

   ```bash
   cd elitea/test-app
   ```

3. No dependency installation is required. The project declares no external dependencies.

## How to Run the Project

1. Start the quiz from the `test-app` directory:

   ```bash
   npm start
   ```

2. Follow the terminal prompts to choose a category, select the number of questions, and enter your answers. You can choose to play again after viewing your results.

## Testing

Run the test script from the `test-app` directory:

```bash
npm test
```

This runs Node.js’s built-in test runner with `node --test`. No separate test files are listed in the repository structure.

## Configuration

The application does not declare environment variables or require configuration files. Quiz content is stored in `data/questions.json`.
