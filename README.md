Git Commit GPT-3
-----------
An AI-powered Git extension that generates commit messages using OpenAI's GPT-3, streamlining the commit process and improving developer productivity.

Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[Dependencies](#Dependencies)
[Contributing](#Contributing)
[License](#License)

Installation
------
Clone this repository or download the source code.

```
git clone https://github.com/yourusername/git-commit-gpt3.git
```

Change to the project directory and install the required dependencies:
```
cd git-commit-gpt3
npm install
```

Add your OpenAI API key to the .env file:
```
OPENAI_API_KEY=your_openai_api_key
```

Create a symbolic link using npm link:
```
npm link
```
After setting up the project, you can use the Git extension in any Git repository:

Stage your changes:
```
git add .
```
Run the Git extension:
```
git gpt commit
```
The script will summarize the Git changes since the last commit and generate a commit message using GPT-3. You will be prompted to confirm whether to use the suggested message or cancel the commit.

Dependencies
----
- OpenAI - For generating commit messages using GPT-3.
- Prompts - For creating a user-friendly command-line interface.
- Dotenv - For loading environment variables from the .env file.
Contributing
----
Contributions are welcome! Please feel free to open a pull request or create an issue if you find a bug or have suggestions for improvements.

Fork the repository.
Create a new branch with a descriptive name.
Make your changes and commit them to your branch.
Submit a pull request, detailing your changes and the motivation behind them.

License
----
This project is licensed under the MIT License.