
const experiments = [
    {
        title: "EXP 1 - Jira Scrum Project Management",
        category: "Jira",
        steps: [
            "Open Jira Software and create a project using the Scrum template.",
            "Create an Epic named Student Registration.",
            "Add a Story: Register a New Student.",
            "Add a Task: Design Student Registration Form.",
            "Add a Bug: Registration Form Does Not Save Data.",
            "Add a Task: Test Student Registration.",
            "Open the Backlog and create a Sprint.",
            "Add the required issues to the Sprint.",
            "Define the Sprint Goal and set the Sprint duration.",
            "Start the Sprint.",
            "Open the Scrum Board.",
            "Move issues between To Do, In Progress and Done.",
            "Capture screenshots of the dashboard, Epic, Backlog, Sprint details and Scrum Board."
        ]
    },
    {
        title: "EXP 2 - Git Repository Integration with Jira",
        category: "Git",
        steps: [
            "Create a public GitHub repository named student-registration.",
            "Add README.md to the repository.",
            "Clone the repository:",
            "git clone https://github.com/Anushka0631/student-registration.git",
            "Open the project folder:",
            'cd "C:\\Users\\admin\\Downloads\\SML exp\\student-registration"',
            "Create a source code file named student.py.",
            "Configure Git identity:",
            'git config --global user.name "Anushka"',
            'git config --global user.email "your-github-email@gmail.com"',
            "Check repository status:",
            "git status",
            "Add the source code:",
            "git add student.py",
            "Commit using the Jira issue key:",
            'git commit -m "SCRUM-12 Add student registration source code"',
            "Push code to GitHub:",
            "git push origin main",
            "Verify commit:",
            "git log --oneline",
            "Connect GitHub with Jira using GitHub for Jira.",
            "Authorize GitHub and connect the student-registration repository.",
            "Verify the commit under the Development section of Jira issue SCRUM-12."
        ]
    },
    {
        title: "EXP 3 - Docker Containerization",
        category: "Docker",
        steps: [
            "Check Docker installation:",
            "docker --version",
            "Check Docker engine:",
            "docker ps",
            "Navigate to the project folder:",
            'cd /d "C:\\Users\\admin\\Downloads\\SML exp\\student-registration"',
            "Create Dockerfile:",
            "notepad Dockerfile",
            "Paste and save the following Dockerfile:",
            "FROM python:3.12-slim",
            "WORKDIR /app",
            "COPY student.py .",
            'CMD ["python", "student.py"]',
            "If saved as Dockerfile.txt, rename it:",
            "ren Dockerfile.txt Dockerfile",
            "Build Docker image:",
            "docker build -t student-registration .",
            "Display Docker images:",
            "docker images",
            "Run the Docker container:",
            "docker run -it student-registration",
            "Enter Student Name: Anushka Mohite",
            "Enter Roll Number: 34",
            "Enter Branch: CSEDS",
            "Check container status:",
            "docker ps -a",
            "Expected output:",
            "Student Registration System",
            "Student Details",
            "Name: Anushka Mohite",
            "Roll Number: 34",
            "Branch: CSEDS",
            "Registration Successful!"
        ]
    },
    {
        title: "EXP 4 - Basic Git Operations",
        category: "Git",
        steps: [
            "Create a folder and initialize repository:",
            "mkdir GitExp4",
            "cd GitExp4",
            "git init",
            "Configure username and email:",
            'git config --global user.name "Anushka Mohite"',
            'git config --global user.email "your-email@gmail.com"',
            "Create a file:",
            "echo This is my first Git experiment. > file.txt",
            "Check repository status:",
            "git status",
            "Check file differences:",
            "git diff",
            "Stage the file:",
            "git add file.txt",
            "Check status again:",
            "git status",
            "Commit the file:",
            'git commit -m "Initial commit"',
            "Display commit history:",
            "git log",
            "Check final status:",
            "git status",
            "Expected result: nothing to commit, working tree clean."
        ]
    },
    {
        title: "EXP 5 - Git Branching and Merging",
        category: "Git",
        steps: [
            "Create a Git repository:",
            "mkdir exp5",
            "cd exp5",
            "git init",
            "Create a file and commit it:",
            'echo "Original Version" > file.txt',
            "git add file.txt",
            'git commit -m "Initial commit"',
            "Create a new branch:",
            "git branch feature",
            "Switch to the new branch:",
            "git checkout feature",
            "Make changes and commit:",
            'echo "Changes made in feature branch" >> file.txt',
            "git add file.txt",
            'git commit -m "Updated file in feature branch"',
            "Switch to main branch:",
            "git checkout main",
            "Merge the feature branch:",
            "git merge feature",
            "Verify branches:",
            "git branch",
            "View commit history:",
            "git log --oneline --graph --all"
        ]
    },
    {
        title: "EXP 6 - GitHub Remote Repository Operations",
        category: "Git",
        steps: [
            "Create a folder and initialize Git:",
            "mkdir exp6",
            "cd exp6",
            "git init",
            "Configure Git username and email:",
            'git config --global user.name "Your Name"',
            'git config --global user.email "your-email@gmail.com"',
            "Create a file:",
            'echo "Experiment 6 - Git Remote Operations" > exp6.txt',
            "Add and commit the file:",
            "git add .",
            'git commit -m "Initial commit"',
            "Create an empty GitHub repository named exp6.",
            "Add the remote repository (replace USERNAME):",
            "git remote add origin https://github.com/USERNAME/exp6.git",
            "Verify remote:",
            "git remote -v",
            "Push changes to GitHub:",
            "git branch -M main",
            "git push -u origin main",
            "Clone the repository:",
            "cd ..",
            "git clone https://github.com/USERNAME/exp6.git",
            "Enter the cloned repository and fetch changes:",
            "cd exp6",
            "git fetch origin",
            "Pull changes:",
            "git pull origin main",
            "Make changes and push again:",
            'echo "Git Push and Pull Demonstration" >> exp6.txt',
            "git add .",
            'git commit -m "Updated exp6 file"',
            "git push origin main"
        ]
    },
    {
        title: "EXP 7 - Student Placement Prediction Using MLflow",
        category: "Machine Learning",
        steps: [
            "Check Python installation:",
            "python --version",
            "Create project folder:",
            "mkdir EXP7",
            "cd EXP7",
            "Open the folder in VS Code.",
            "Install required libraries:",
            "python -m pip install pandas scikit-learn mlflow",
            "Verify installation:",
            "python -m pip show pandas",
            "python -m pip show scikit-learn",
            "python -m pip show mlflow",
            "Create a Python file named placement.py.",
            "Write the Student Placement Prediction code using a Decision Tree Classifier and MLflow.",
            "Create a dataset with CGPA, Aptitude_Score, Technical_Skills_Score and Placement.",
            "Save the dataset as student_placement.csv from the program.",
            "Split the dataset into training and testing sets.",
            "Train two Decision Tree models using max_depth values 2 and 3.",
            "Calculate accuracy for both models.",
            "Log parameters, accuracy metrics and models using MLflow.",
            "Save the file and run:",
            "python placement.py",
            "Start MLflow UI:",
            "mlflow ui",
            "Open http://localhost:5000 in Chrome.",
            "Open Student_Placement_Prediction.",
            "Compare Decision_Tree_Depth_2 and Decision_Tree_Depth_3.",
            "Check parameters, accuracy and model artifacts.",
            "Take screenshots of installation, code, output, CSV and MLflow dashboard.",
            "Stop MLflow using Ctrl + C."
        ]
    },
    {
        title: "EXP 8 - Loan Approval Prediction Using MLflow",
        category: "Machine Learning",
        steps: [
            "Open VS Code terminal.",
            "Install required libraries:",
            "pip install pandas scikit-learn mlflow",
            "Create a folder named Loan_Approval.",
            "Open this folder in VS Code.",
            "Create a Python file named loan_approval.py.",
            "Write the Loan Approval Prediction code using a Decision Tree Classifier and MLflow.",
            "Create a dataset containing Applicant_Income, Credit_Score, Loan_Amount and Loan_Status.",
            "Separate features and target.",
            "Split data into training and testing sets.",
            "Train two Decision Tree models using max_depth values 2 and 4.",
            "Calculate accuracy for both models.",
            "Log parameters, accuracy metrics and models using MLflow.",
            "Save the file and run:",
            "python loan_approval.py",
            "Verify the generated loan_approval.csv file.",
            "Start MLflow dashboard:",
            "mlflow ui",
            "Open http://127.0.0.1:5000 in Chrome.",
            "Open Loan_Approval_Experiment.",
            "Compare Decision_Tree_Depth_2 and Decision_Tree_Depth_4.",
            "Check max_depth, accuracy and model artifacts.",
            "Verify the final folder contains loan_approval.py, loan_approval.csv and mlruns."
        ]
    },
    {
        title: "EXP 9 - Employee Attrition Prediction Using MLflow",
        category: "Machine Learning",
        steps: [
            "Open VS Code terminal.",
            "Install required libraries:",
            "python -m pip install pandas scikit-learn mlflow cloudpickle",
            "Create a Python file named exp9.py.",
            "Write the Employee Attrition Prediction code using a Decision Tree Classifier and MLflow.",
            "Prepare the employee dataset and split it into training and testing sets.",
            "Train Experiment 1 using max_depth = 2.",
            "Train Experiment 2 using max_depth = 4.",
            "Calculate accuracy for both experiments.",
            "Log parameters, metrics and models using MLflow.",
            "Save the file in C:\\Users\\admin\\Downloads\\exp9.py.",
            "Run the program:",
            'python "C:\\Users\\admin\\Downloads\\exp9.py"',
            "Compare the two experiment accuracy values.",
            "Start MLflow dashboard:",
            "mlflow ui",
            "Open the MLflow dashboard in your browser.",
            "Open Employee_Attrition_Prediction.",
            "Verify Experiment 1 and Experiment 2.",
            "Check accuracy under Metrics and the model under Artifacts."
        ]
    },
    {
        title: "EXP 10 - Create and Execute a DAG Using Apache Airflow",
        category: "Airflow",
        steps: [
            "Open Command Prompt or VS Code terminal.",
            "Install Apache Airflow:",
            "pip install apache-airflow",
            "Create a Python file named simple_dag.py.",
            "Import datetime, DAG and PythonOperator.",
            "Create a function task_1_function() that prints Task 1 is executed successfully!",
            "Create a function task_2_function() that prints Task 2 is executed successfully!",
            "Create a DAG with dag_id='simple_dag'.",
            "Set start_date=datetime(2026, 1, 1).",
            "Set schedule='@daily' and catchup=False.",
            "Create PythonOperator tasks named task_1 and task_2.",
            "Set task_1 to execute before task_2 using task_1 >> task_2.",
            "Create an Airflow folder and a dags folder inside it.",
            "Place simple_dag.py inside the dags folder.",
            "Set the Airflow home directory.",
            "Initialize the Airflow database.",
            "Start the Airflow webserver and scheduler.",
            "Open http://localhost:8080 in your browser.",
            "Log in to the Airflow web interface.",
            "Search for simple_dag and enable the DAG.",
            "Click Trigger DAG to execute it.",
            "Open the DAG and select Grid view.",
            "Verify that task_1 and task_2 show Success.",
            "Open each task to view its logs.",
            "Verify the success messages in the logs."
        ]
    }
];

// Get HTML elements
const searchInput = document.getElementById("search");
const categoryContainer = document.getElementById("categories");
const codeList = document.getElementById("code-list");

// Create category buttons
const categories = [
    "All",
    ...new Set(experiments.map(exp => exp.category))
];

let selectedCategory = "All";

// Display category buttons
function renderCategories() {
    categoryContainer.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");

        button.textContent = category;

        if (category === selectedCategory) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            selectedCategory = category;
            renderCategories();
            renderExperiments();
        });

        categoryContainer.appendChild(button);
    });
}

// Display experiments
function renderExperiments() {
    const searchText = searchInput.value.toLowerCase();

    codeList.innerHTML = "";

    const filteredExperiments = experiments.filter(exp => {
        const matchesCategory =
            selectedCategory === "All" ||
            exp.category === selectedCategory;

        const searchableText =
            exp.title + " " +
            exp.category + " " +
            exp.steps.join(" ");

        const matchesSearch =
            searchableText.toLowerCase().includes(searchText);

        return matchesCategory && matchesSearch;
    });

    if (filteredExperiments.length === 0) {
        codeList.textContent = "No experiments found.";
        return;
    }

    filteredExperiments.forEach(exp => {
        const card = document.createElement("div");
        card.className = "card";

        const heading = document.createElement("h2");
        heading.textContent = exp.title;

        const category = document.createElement("p");
        category.className = "category";
        category.textContent = exp.category;

        const stepList = document.createElement("ol");

        exp.steps.forEach(step => {
            const item = document.createElement("li");
            item.textContent = step;
            stepList.appendChild(item);
        });

        const copyButton = document.createElement("button");
        copyButton.textContent = "Copy Steps";

        copyButton.addEventListener("click", async () => {
            const textToCopy =
                exp.title + "\n\n" +
                exp.steps.map((step, index) =>
                    `${index + 1}. ${step}`
                ).join("\n");

            try {
                await navigator.clipboard.writeText(textToCopy);
                copyButton.textContent = "Copied!";
                setTimeout(() => {
                    copyButton.textContent = "Copy Steps";
                }, 1500);
            } catch (error) {
                copyButton.textContent = "Copy unavailable";
            }
        });

        card.appendChild(heading);
        card.appendChild(category);
        card.appendChild(stepList);
        card.appendChild(copyButton);

        codeList.appendChild(card);
    });
}

// Search experiments
searchInput.addEventListener("input", renderExperiments);

// Initial display
renderCategories();
renderExperiments();
