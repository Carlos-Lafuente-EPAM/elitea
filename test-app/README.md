# quiz-cli

## Project Overview

`quiz-cli` is an interactive command-line quiz application built with Node.js. Players choose a quiz category and number of questions, answer multiple-choice questions, and review their results.

The project uses Node.js built-in modules and has no declared external dependencies.

## Features

- Offers three quiz categories: JavaScript Basics, Node.js Fundamentals, and General Programming.
- Lets players select a category and question count.
- Shuffles questions using the Fisher–Yates algorithm.
- Tracks quiz progress, answers, and score.
- Displays answer feedback and explanations.
- Shows a progress bar and final results, including a review of incorrect answers.
- Offers the option to play again.
- Uses ANSI terminal styling without external dependencies.

## Technology Stack

- JavaScript with ES modules.
- Node.js `>=18.0.0`.
- Node.js built-in `readline` module.
- Node.js built-in test runner (`node --test`).

## File Structure

```text
test-app/
├── data/
│   └── questions.json
├── src/
│   ├── colors.js
│   ├── input.js
│   └── quiz.js
├── index.js
└── package.json
```

- `package.json` — Project metadata, Node.js requirement, and start and test scripts.
- `index.js` — Application entry point and interactive quiz flow.
- `data/questions.json` — Quiz categories, questions, answer choices, and explanations.
- `src/colors.js` — ANSI terminal color and style helpers.
- `src/input.js` — Terminal input and prompt utilities built on `readline`.
- `src/quiz.js` — Quiz question flow, scoring, progress display, and results.

## Prerequisites

- Node.js `>=18.0.0`.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/Carlos-Lafuente-EPAM/elitea.git
   ```

2. Change to the project directory containing `package.json`. In the supplied repository structure, this is `test-app`:

   ```bash
   cd elitea/test-app
   ```

3. No dependency installation is required; the manifest declares no external dependencies.

## Usage Examples

Start the interactive quiz from the directory containing `package.json`:

```bash
npm start
```

Run the project's test command:

```bash
npm test
```

## Testing

The `test` script runs Node.js’s built-in test runner:

```bash
node --test
```

Or run it through npm:

```bash
npm test
```

## Other Relevant Details

The application loads its quiz content from `data/questions.json`. The supplied repository structure does not list separate test files.