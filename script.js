// ======================================================
// MY CODE LIBRARY - COMPLETE EXPERIMENT DATABASE
// ======================================================

const experiments = [

{
    title: "Jira Scrum Project Management",
    category: "Jira",
    description: "Create a Scrum project, manage Epics and issues, create a Sprint and track progress.",
    aim: "To create a Jira Software project using Scrum, manage issues, create a Sprint and track progress using the Scrum Board.",
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
    ],
    screenshots: [
        "Jira Scrum project dashboard",
        "Epic with Story, Tasks and Bug",
        "Product Backlog showing Sprint and issues",
        "Sprint details showing Sprint Goal and dates",
        "Scrum Board showing issue statuses"
    ],
    result: "Successfully created a Jira Scrum project, added issues under an Epic, created a Sprint and tracked issue progress using the Scrum Board."
},

{
    title: "Git Repository Integration with Jira",
    category: "Git",
    description: "Create a GitHub repository and connect code commits with Jira issues.",
    aim: "To create a Git repository for the project and integrate it with Jira using the relevant Jira issue key in commit messages.",
    steps: [
        "Create a public GitHub repository named student-registration.",
        "Add README.md to the repository.",
        "Clone the GitHub repository.",
        "Open the project folder.",
        "Create student.py containing the Student Registration System program.",
        "Configure Git identity.",
        "Check repository status.",
        "Add the source code.",
        "Commit using Jira issue key SCRUM-12.",
        "Push the code to GitHub.",
        "Verify the commit using git log --oneline.",
        "Install and connect GitHub for Jira.",
        "Authorize GitHub and connect the student-registration repository.",
        "Verify the commit under the Development section of Jira issue SCRUM-12."
    ],
    commands: `git clone https://github.com/Anushka0631/student-registration.git

cd "C:\\Users\\admin\\Downloads\\SML exp\\student-registration"

git config --global user.name "Anushka"
git config --global user.email "your-github-email@gmail.com"

git status
git add student.py

git commit -m "SCRUM-12 Add student registration source code"

git push origin main
git log --oneline`,
    python: `# Student Registration System

name = input("Enter Student Name: ")
roll = input("Enter Roll Number: ")
branch = input("Enter Branch: ")

print("\\nStudent Details")
print("Name:", name)
print("Roll Number:", roll)
print("Branch:", branch)
print("Registration Successful!")`,
    screenshots: [
        "GitHub repository created",
        "Repository cloned in terminal",
        "Student.py source code",
        "Git status and add command",
        "Successful commit with Jira issue key",
        "Git push output",
        "Commit linked in Jira Development section"
    ],
    output: `Student Details
Name: Anushka Mohite
Roll Number: 34
Branch: CSEDS
Registration Successful!`,
    result: "Successfully created a GitHub repository, added and committed source code, pushed changes and linked the commit to Jira using the issue key SCRUM-12.",
    note: "Replace your-github-email@gmail.com with your actual GitHub email before configuring Git."
},

{
    title: "Docker Containerization",
    category: "Docker",
    description: "Create a Dockerfile, build an image and execute a Python application inside a container.",
    aim: "To create a Dockerfile, build a Docker image and run a Python application inside a Docker container.",
    steps: [
        "Check Docker installation.",
        "Check whether the Docker engine is running.",
        "Navigate to the student-registration project folder.",
        "Create a file named Dockerfile.",
        "Paste the Dockerfile code shown below.",
        "If the file is saved as Dockerfile.txt, rename it.",
        "Build the Docker image.",
        "Display available Docker images.",
        "Run the Docker container.",
        "Enter the student details.",
        "Check the container status."
    ],
    commands: `docker --version

docker ps

cd /d "C:\\Users\\admin\\Downloads\\SML exp\\student-registration"

notepad Dockerfile

ren Dockerfile.txt Dockerfile

docker build -t student-registration .

docker images

docker run -it student-registration

docker ps -a`,
    extraCode: `FROM python:3.12-slim

WORKDIR /app

COPY student.py .

CMD ["python", "student.py"]`,
    extraLabel: "Dockerfile",
    output: `Student Registration System

Enter Student Name: Anushka Mohite
Enter Roll Number: 34
Enter Branch: CSEDS

Student Details
Name: Anushka Mohite
Roll Number: 34
Branch: CSEDS

Registration Successful!`,
    screenshots: [
        "Docker version in terminal",
        "Docker engine status",
        "Dockerfile code",
        "Successful Docker image build",
        "Docker images list",
        "Container execution output",
        "Container status using docker ps -a"
    ],
    result: "Successfully created a Dockerfile, built a Docker image and executed the Student Registration application inside a Docker container."
},

{
    title: "Basic Git Operations",
    category: "Git",
    description: "Perform Git initialization, configuration, staging, committing and status checking.",
    aim: "To perform basic Git operations and understand git init, git status, git diff, git add, git commit and git log.",
    steps: [
        "Create a folder named GitExp4.",
        "Open the folder and initialize the repository.",
        "Configure Git username and email.",
        "Create file.txt.",
        "Check the repository status.",
        "Check file differences using git diff.",
        "Stage the file using git add.",
        "Check the status again.",
        "Commit the file.",
        "Display commit history.",
        "Check the final repository status."
    ],
    commands: `mkdir GitExp4

cd GitExp4

git init

git config --global user.name "Anushka Mohite"
git config --global user.email "your-email@gmail.com"

echo This is my first Git experiment. > file.txt

git status

git diff

git add file.txt

git status

git commit -m "Initial commit"

git log

git status`,
    screenshots: [
        "Repository initialized using git init",
        "Git username and email configured",
        "Untracked file shown using git status",
        "File differences using git diff",
        "File staged using git add",
        "Successful commit message",
        "Commit history using git log",
        "Final clean working tree"
    ],
    output: `On branch main
nothing to commit, working tree clean`,
    result: "Successfully performed basic Git operations and demonstrated git status, git diff, git add, git commit and git log."
},

{
    title: "Git Branching and Merging",
    category: "Git",
    description: "Create a feature branch, make changes and merge them into the main branch.",
    aim: "To create a Git repository and perform branching and merging operations by creating a new branch, committing changes and merging them into the main branch.",
    steps: [
        "Create a folder named exp5.",
        "Initialize the Git repository.",
        "Create file.txt with Original Version.",
        "Add and commit the file.",
        "Create a new branch named feature.",
        "Switch to the feature branch.",
        "Add changes to file.txt.",
        "Stage and commit the changes.",
        "Switch to the main branch.",
        "Merge the feature branch.",
        "Verify branches and commit history."
    ],
    commands: `mkdir exp5

cd exp5

git init

echo "Original Version" > file.txt

git add file.txt

git commit -m "Initial commit"

git branch feature

git checkout feature

echo "Changes made in feature branch" >> file.txt

git add file.txt

git commit -m "Updated file in feature branch"

git checkout main

git merge feature

git branch

git log --oneline --graph --all`,
    screenshots: [
        "Successful repository initialization",
        "Creation of feature branch",
        "Switching to feature branch",
        "Successful commit in feature branch",
        "Switching to main branch",
        "Successful merge message",
        "Git log showing commits"
    ],
    result: "Successfully created a Git repository, created a feature branch, committed changes, switched to the main branch and merged the feature branch."
},

{
    title: "GitHub Remote Repository Operations",
    category: "Git",
    description: "Use Git and GitHub to perform remote repository operations.",
    aim: "To perform remote repository operations using Git and GitHub by cloning a repository, adding a remote repository, committing changes and demonstrating push, pull and fetch commands.",
    steps: [
        "Create a folder named exp6.",
        "Initialize Git.",
        "Configure Git username and email.",
        "Create exp6.txt.",
        "Add and commit the file.",
        "Create an empty GitHub repository named exp6.",
        "Add the GitHub remote repository.",
        "Verify the remote URL.",
        "Rename the branch to main.",
        "Push changes to GitHub.",
        "Clone the repository.",
        "Fetch changes from the remote repository.",
        "Pull changes from the remote repository.",
        "Make changes, commit and push again."
    ],
    commands: `mkdir exp6

cd exp6

git init

git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

echo "Experiment 6 - Git Remote Operations" > exp6.txt

git add .
git commit -m "Initial commit"

git remote add origin https://github.com/USERNAME/exp6.git

git remote -v

git branch -M main

git push -u origin main

cd ..

git clone https://github.com/USERNAME/exp6.git

cd exp6

git fetch origin

git pull origin main

echo "Git Push and Pull Demonstration" >> exp6.txt

git add .

git commit -m "Updated exp6 file"

git push origin main`,
    screenshots: [
        "Git repository initialized",
        "Remote repository added",
        "Remote URL using git remote -v",
        "Successful GitHub push",
        "Repository cloned",
        "Git fetch command",
        "Git pull command",
        "Final commit and push"
    ],
    result: "Successfully performed remote repository operations using git init, git remote, git clone, git fetch, git pull and git push.",
    note: "Replace USERNAME with your GitHub username. Create the GitHub repository before adding the remote."
},

{
    title: "Student Placement Prediction Using MLflow",
    category: "Machine Learning",
    description: "Predict student placement using a Decision Tree and compare two MLflow experiments.",
    aim: "To develop a Machine Learning classification model that predicts whether a student will be Placed or Not Placed using CGPA, Aptitude Score and Technical Skills Score. Compare two models using MLflow.",
    steps: [
        "Check Python installation.",
        "Create a folder named EXP7.",
        "Open the folder in VS Code.",
        "Install pandas, scikit-learn and MLflow.",
        "Verify the library installation.",
        "Create placement.py.",
        "Paste the complete Python program.",
        "Run the program using python placement.py.",
        "Verify student_placement.csv.",
        "Start MLflow UI using mlflow ui.",
        "Open http://localhost:5000.",
        "Open Student_Placement_Prediction.",
        "Compare the two Decision Tree experiments.",
        "Check parameters, accuracy and model artifacts.",
        "Take the required screenshots.",
        "Stop MLflow using Ctrl + C."
    ],
    commands: `python --version

mkdir EXP7
cd EXP7

python -m pip install pandas scikit-learn mlflow

python -m pip show pandas
python -m pip show scikit-learn
python -m pip show mlflow

python placement.py

mlflow ui`,
    python: `# EXPERIMENT 7: Student Placement Prediction using MLflow

import pandas as pd
import mlflow
import mlflow.sklearn

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Step 1: Create Dataset

data = {
    "CGPA": [
        8.5, 7.0, 6.5, 9.0, 5.5,
        8.0, 6.0, 9.5, 7.5, 5.0,
        8.8, 6.8, 7.8, 5.8, 9.2,
        7.2, 6.2, 8.2, 5.2, 9.8
    ],

    "Aptitude_Score": [
        85, 70, 60, 95, 50,
        80, 55, 98, 75, 45,
        90, 65, 78, 52, 92,
        72, 58, 82, 48, 99
    ],

    "Technical_Skills_Score": [
        90, 75, 65, 98, 45,
        85, 60, 99, 80, 40,
        95, 68, 82, 55, 96,
        70, 62, 88, 42, 100
    ],

    "Placement": [
        "Placed", "Placed", "Not Placed", "Placed",
        "Not Placed", "Placed", "Not Placed", "Placed",
        "Placed", "Not Placed", "Placed", "Not Placed",
        "Placed", "Not Placed", "Placed", "Placed",
        "Not Placed", "Placed", "Not Placed", "Placed"
    ]
}

df = pd.DataFrame(data)

df.to_csv("student_placement.csv", index=False)

print("Dataset Created Successfully!")
print(df)

# Step 2: Separate Features and Target

X = df[
    ["CGPA", "Aptitude_Score", "Technical_Skills_Score"]
]

y = df["Placement"]

# Step 3: Split Dataset

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print("Training and Testing Data Split Successfully!")

# Step 4: Set MLflow Experiment

mlflow.set_experiment("Student_Placement_Prediction")

# Step 5: Compare Two Models

for depth in [2, 3]:

    with mlflow.start_run(
        run_name=f"Decision_Tree_Depth_{depth}"
    ):

        model = DecisionTreeClassifier(
            max_depth=depth,
            random_state=42
        )

        model.fit(X_train, y_train)

        predictions = model.predict(X_test)

        accuracy = accuracy_score(y_test, predictions)

        mlflow.log_param("max_depth", depth)
        mlflow.log_metric("accuracy", accuracy)

        mlflow.sklearn.log_model(
            model,
            name="model"
        )

        print("\\nExperiment: Decision Tree")
        print("Max Depth:", depth)
        print("Accuracy:", accuracy)

print("\\nBoth Experiments Completed Successfully!")`,
    output: `Dataset Created Successfully!

Training and Testing Data Split Successfully!

Experiment: Decision Tree
Max Depth: 2

Experiment: Decision Tree
Max Depth: 3

Both Experiments Completed Successfully!`,
    screenshots: [
        "Library installation in terminal",
        "Complete Python code in VS Code",
        "Successful program execution",
        "Generated student_placement.csv",
        "MLflow dashboard",
        "Two experiment runs comparison",
        "Parameters, accuracy and model artifacts"
    ],
    result: "Successfully developed a Student Placement Prediction model using a Decision Tree Classifier. Two experiments were performed with max_depth values 2 and 3. Their parameters, accuracy and trained models were logged and compared using MLflow.",
    note: "Accuracy values depend on the dataset and train-test split. Run placement.py before starting mlflow ui."
},

{
    title: "Loan Approval Prediction Using MLflow",
    category: "Machine Learning",
    description: "Predict loan approval using applicant income, credit score and loan amount.",
    aim: "To develop a Machine Learning classification model to predict whether a loan application will be Approved or Rejected. Compare two Decision Tree experiments using MLflow.",
    steps: [
        "Open VS Code terminal.",
        "Install pandas, scikit-learn and MLflow.",
        "Create a folder named Loan_Approval.",
        "Open the folder in VS Code.",
        "Create loan_approval.py.",
        "Paste the complete Python program.",
        "Run python loan_approval.py.",
        "Verify loan_approval.csv.",
        "Start MLflow UI using mlflow ui.",
        "Open http://127.0.0.1:5000.",
        "Open Loan_Approval_Experiment.",
        "Compare Decision_Tree_Depth_2 and Decision_Tree_Depth_4.",
        "Check parameters, accuracy and model artifacts.",
        "Take screenshots of the practical."
    ],
    commands: `python -m pip install pandas scikit-learn mlflow

python loan_approval.py

mlflow ui`,
    python: `# EXPERIMENT 8: Loan Approval Prediction using MLflow

import pandas as pd
import mlflow
import mlflow.sklearn

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Step 1: Create Dataset

data = {
    "Applicant_Income": [
        25000, 50000, 30000, 80000, 45000,
        90000, 20000, 75000, 60000, 35000,
        100000, 40000, 85000, 28000, 70000,
        55000, 32000, 95000, 48000, 65000
    ],

    "Credit_Score": [
        550, 750, 600, 800, 700,
        820, 500, 780, 720, 580,
        850, 680, 810, 520, 760,
        740, 610, 830, 690, 790
    ],

    "Loan_Amount": [
        200000, 300000, 250000, 400000, 200000,
        350000, 150000, 320000, 280000, 180000,
        450000, 220000, 380000, 160000, 300000,
        270000, 190000, 420000, 240000, 310000
    ],

    "Loan_Status": [
        "Rejected", "Approved", "Rejected", "Approved",
        "Approved", "Approved", "Rejected", "Approved",
        "Approved", "Rejected", "Approved", "Approved",
        "Approved", "Rejected", "Approved", "Approved",
        "Rejected", "Approved", "Approved", "Approved"
    ]
}

df = pd.DataFrame(data)

df.to_csv("loan_approval.csv", index=False)

print("Dataset Created Successfully!")
print(df)

# Step 2: Separate Features and Target

X = df[
    ["Applicant_Income", "Credit_Score", "Loan_Amount"]
]

y = df["Loan_Status"]

# Step 3: Split Dataset

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

print("Training and Testing Data Split Successfully!")

# Step 4: Set MLflow Experiment

mlflow.set_experiment("Loan_Approval_Experiment")

# Step 5: Train and Compare Models

for depth in [2, 4]:

    with mlflow.start_run(
        run_name=f"Decision_Tree_Depth_{depth}"
    ):

        model = DecisionTreeClassifier(
            max_depth=depth,
            random_state=42
        )

        model.fit(X_train, y_train)

        predictions = model.predict(X_test)

        accuracy = accuracy_score(y_test, predictions)

        mlflow.log_param("max_depth", depth)
        mlflow.log_metric("accuracy", accuracy)

        mlflow.sklearn.log_model(
            model,
            name="model"
        )

        print("\\nExperiment: Decision Tree")
        print("Max Depth:", depth)
        print("Accuracy:", accuracy)

print("\\nBoth Experiments Completed Successfully!")
print("Check MLflow Dashboard for Comparison.")`,
    output: `Dataset Created Successfully!

Training and Testing Data Split Successfully!

Experiment: Decision Tree
Max Depth: 2

Experiment: Decision Tree
Max Depth: 4

Both Experiments Completed Successfully!`,
    screenshots: [
        "Python library installation",
        "Complete loan_approval.py code",
        "Successful program execution",
        "Generated loan_approval.csv",
        "MLflow dashboard",
        "Two experiment runs",
        "Parameters, accuracy and model artifacts"
    ],
    result: "Successfully developed a Loan Approval Prediction model using a Decision Tree Classifier. Two experiments with max_depth values 2 and 4 were logged and compared using MLflow.",
    note: "This is an illustrative sample dataset, not a real lending decision system. Accuracy depends on the dataset and split."
},

{
    title: "Employee Attrition Prediction Using MLflow",
    category: "Machine Learning",
    description: "Predict employee attrition and compare two Decision Tree models using MLflow.",
    aim: "To develop an Employee Attrition Prediction model and compare two experiments by changing the max_depth parameter.",
    steps: [
        "Open VS Code terminal.",
        "Install pandas, scikit-learn, MLflow and cloudpickle.",
        "Create exp9.py.",
        "Paste the complete Python program.",
        "Create the employee dataset.",
        "Separate features and target.",
        "Split the dataset into training and testing sets.",
        "Train Experiment 1 with max_depth = 2.",
        "Train Experiment 2 with max_depth = 4.",
        "Log model parameters, metrics and artifacts.",
        "Run the program.",
        "Start MLflow UI.",
        "Open Employee_Attrition_Prediction.",
        "Compare both experiment runs."
    ],
    commands: `python -m pip install pandas scikit-learn mlflow cloudpickle

python exp9.py

mlflow ui`,
    python: `# EXPERIMENT 9: Employee Attrition Prediction using MLflow

import pandas as pd
import mlflow
import mlflow.sklearn

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score

# Step 1: Create Employee Dataset

data = {
    "Age": [
        25, 30, 45, 35, 28,
        50, 32, 40, 26, 48,
        29, 42, 31, 55, 38,
        27, 46, 33, 52, 36
    ],

    "Experience": [
        1, 5, 20, 10, 3,
        25, 7, 15, 2, 22,
        4, 18, 6, 30, 12,
        2, 21, 8, 27, 11
    ],

    "MonthlyIncome": [
        20000, 35000, 70000, 50000, 25000,
        90000, 40000, 65000, 22000, 85000,
        30000, 75000, 38000, 95000, 55000,
        24000, 80000, 42000, 92000, 58000
    ],

    "Attrition": [
        "Yes", "No", "No", "No", "Yes",
        "No", "No", "No", "Yes", "No",
        "Yes", "No", "No", "No", "No",
        "Yes", "No", "No", "No", "No"
    ]
}

df = pd.DataFrame(data)

df.to_csv("employee_attrition.csv", index=False)

print("Dataset created successfully!")

# Step 2: Separate Features and Target

X = df[["Age", "Experience", "MonthlyIncome"]]
y = df["Attrition"]

# Step 3: Split Dataset

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.25,
    random_state=42,
    stratify=y
)

# Step 4: Set MLflow Experiment

mlflow.set_experiment("Employee_Attrition_Prediction")

accuracy1 = 0
accuracy2 = 0

# Step 5: Experiment 1 - max_depth = 2

with mlflow.start_run(run_name="Experiment_1"):

    model1 = DecisionTreeClassifier(
        max_depth=2,
        random_state=42
    )

    model1.fit(X_train, y_train)

    pred1 = model1.predict(X_test)

    accuracy1 = accuracy_score(y_test, pred1)

    mlflow.log_param("max_depth", 2)
    mlflow.log_metric("accuracy", accuracy1)

    mlflow.sklearn.log_model(
        model1,
        name="model"
    )

    print("Experiment 1 Accuracy:", accuracy1)

# Step 6: Experiment 2 - max_depth = 4

with mlflow.start_run(run_name="Experiment_2"):

    model2 = DecisionTreeClassifier(
        max_depth=4,
        random_state=42
    )

    model2.fit(X_train, y_train)

    pred2 = model2.predict(X_test)

    accuracy2 = accuracy_score(y_test, pred2)

    mlflow.log_param("max_depth", 4)
    mlflow.log_metric("accuracy", accuracy2)

    mlflow.sklearn.log_model(
        model2,
        name="model"
    )

    print("Experiment 2 Accuracy:", accuracy2)

# Step 7: Compare Experiments

print("\\nExperiment Comparison")

print("Max Depth = 2:", accuracy1)
print("Max Depth = 4:", accuracy2)

if accuracy1 > accuracy2:
    print("Experiment 1 performs better")

elif accuracy2 > accuracy1:
    print("Experiment 2 performs better")

else:
    print("Both experiments have equal accuracy")

print("\\nEmployee Attrition Prediction Completed!")`,
    output: `Dataset created successfully!

Experiment 1 Accuracy: (calculated value)
Experiment 2 Accuracy: (calculated value)

Experiment Comparison
Max Depth = 2: (calculated value)
Max Depth = 4: (calculated value)

Employee Attrition Prediction Completed!`,
    screenshots: [
        "Library installation",
        "Complete exp9.py code",
        "Successful program execution",
        "Generated employee_attrition.csv",
        "MLflow dashboard",
        "Experiment 1 and Experiment 2",
        "Accuracy, parameters and artifacts"
    ],
    result: "Successfully developed an Employee Attrition Prediction model using a Decision Tree Classifier. Two experiments with max_depth values 2 and 4 were performed and compared using MLflow.",
    note: "The employee dataset is illustrative because the original practical did not include its complete dataset. Actual accuracy is calculated when you run the program."
},

{
    title: "Create and Execute a DAG Using Apache Airflow",
    category: "Airflow",
    description: "Create a daily Airflow DAG with two dependent Python tasks and monitor execution.",
    aim: "To create a DAG named simple_dag with two Python tasks, task_1 and task_2, where task_1 executes before task_2. Monitor task status and logs using the Airflow web interface.",
    steps: [
        "Install Apache Airflow using the recommended installation method for your operating system and Python version.",
        "Create a Python file named simple_dag.py.",
        "Import datetime, DAG and PythonOperator.",
        "Create task_1_function().",
        "Create task_2_function().",
        "Create the DAG with dag_id simple_dag.",
        "Set the start date to January 1, 2026.",
        "Set the schedule to @daily and catchup to False.",
        "Create PythonOperator tasks task_1 and task_2.",
        "Set task_1 to execute before task_2.",
        "Place simple_dag.py inside the Airflow dags folder.",
        "Initialize the Airflow database.",
        "Start the webserver and scheduler.",
        "Open http://localhost:8080.",
        "Enable simple_dag and click Trigger DAG.",
        "Open Grid view.",
        "Verify both task statuses and their logs."
    ],
    commands: `# Set Airflow home (Windows PowerShell)

$env:AIRFLOW_HOME = "$HOME/airflow"

# Initialize Airflow database

airflow db migrate

# Create an Airflow user if needed
airflow users create --username admin --firstname Admin --lastname User --role Admin --email admin@example.com

# Start API server
airflow api-server --port 8080

# In a separate terminal:
airflow scheduler`,
    python: `# EXPERIMENT 10: Apache Airflow DAG

from datetime import datetime

from airflow import DAG
from airflow.operators.python import PythonOperator

# Function for Task 1

def task_1_function():
    print("Task 1 is executed successfully!")

# Function for Task 2

def task_2_function():
    print("Task 2 is executed successfully!")

# Create DAG

with DAG(
    dag_id="simple_dag",
    start_date=datetime(2026, 1, 1),
    schedule="@daily",
    catchup=False
) as dag:

    task_1 = PythonOperator(
        task_id="task_1",
        python_callable=task_1_function
    )

    task_2 = PythonOperator(
        task_id="task_2",
        python_callable=task_2_function
    )

    # Define task execution order

    task_1 >> task_2`,
    output: `DAG: simple_dag

task_1
    Executes first

task_2
    Executes after task_1

Expected task status:

task_1    Success
task_2    Success

Task 1 is executed successfully!
Task 2 is executed successfully!`,
    screenshots: [
        "Airflow installation or environment setup",
        "Complete simple_dag.py code",
        "Airflow database initialization",
        "Airflow web interface",
        "simple_dag displayed in the DAG list",
        "DAG Graph or Grid view",
        "task_1 Success status",
        "task_2 Success status",
        "Task execution logs"
    ],
    result: "Successfully created and executed the simple_dag workflow using Apache Airflow. Both Python tasks executed in the specified order, and their status and logs were monitored through the Airflow web interface.",
    note: "Airflow installation and commands differ by version and operating system. The commands above use the modern Airflow CLI. On Windows, running Airflow through WSL2 or Linux is generally preferable. Create the dags folder under AIRFLOW_HOME."
}

];

// ======================================================
// HTML ELEMENTS
// ======================================================

const searchInput = document.getElementById("search");
const categoryContainer = document.getElementById("categories");
const codeList = document.getElementById("code-list");

const categories = [
    "All",
    ...new Set(experiments.map(exp => exp.category))
];

let selectedCategory = "All";

// ======================================================
// CATEGORY FILTERS
// ======================================================

function renderCategories() {

    categoryContainer.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.className = "category-btn";

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

// ======================================================
// COPY CODE
// ======================================================

async function copyCode(button, text) {

    try {

        await navigator.clipboard.writeText(text);

        button.textContent = "Copied!";

    } catch (error) {

        const temporary = document.createElement("textarea");

        temporary.value = text;

        document.body.appendChild(temporary);

        temporary.select();

        document.execCommand("copy");

        temporary.remove();

        button.textContent = "Copied!";

    }

    setTimeout(() => {
        button.textContent = "Copy code";
    }, 1800);

}

// ======================================================
// CREATE CODE BLOCK
// ======================================================

function createCodeBlock(label, code) {

    const wrapper = document.createElement("div");

    wrapper.className = "code-block";

    const heading = document.createElement("span");

    heading.className = "code-label";

    heading.textContent = label;

    const button = document.createElement("button");

    button.className = "copy-btn";

    button.textContent = "Copy code";

    button.addEventListener("click", () => {
        copyCode(button, code);
    });

    const pre = document.createElement("pre");

    const codeElement = document.createElement("code");

    codeElement.textContent = code;

    pre.appendChild(codeElement);

    wrapper.appendChild(heading);
    wrapper.appendChild(button);
    wrapper.appendChild(pre);

    return wrapper;

}

// ======================================================
// CREATE EXPERIMENT DETAILS
// ======================================================

function createDetails(exp) {

    const details = document.createElement("div");

    details.className = "details";

    // Aim

    const aimHeading = document.createElement("h4");

    aimHeading.textContent = "Aim";

    const aim = document.createElement("div");

    aim.className = "aim";

    aim.textContent = exp.aim;

    details.appendChild(aimHeading);
    details.appendChild(aim);

    // Steps

    const stepHeading = document.createElement("h4");

    stepHeading.textContent = "Procedure / Steps";

    details.appendChild(stepHeading);

    const stepList = document.createElement("ol");

    stepList.className = "steps-list";

    exp.steps.forEach(step => {

        const item = document.createElement("li");

        item.textContent = step;

        stepList.appendChild(item);

    });

    details.appendChild(stepList);

    // Commands

    if (exp.commands) {

        const heading = document.createElement("h4");

        heading.textContent = "Commands";

        details.appendChild(heading);

        details.appendChild(
            createCodeBlock("TERMINAL COMMANDS", exp.commands)
        );

    }

    // Dockerfile or additional code

    if (exp.extraCode) {

        const heading = document.createElement("h4");

        heading.textContent = exp.extraLabel || "Additional Code";

        details.appendChild(heading);

        details.appendChild(
            createCodeBlock(exp.extraLabel || "CODE", exp.extraCode)
        );

    }

    // Python

    if (exp.python) {

        const heading = document.createElement("h4");

        heading.textContent = "Complete Python Program";

        details.appendChild(heading);

        details.appendChild(
            createCodeBlock("PYTHON CODE", exp.python)
        );

    }

    // Expected output

    if (exp.output) {

        const heading = document.createElement("h4");

        heading.textContent = "Expected Output";

        details.appendChild(heading);

        const output = document.createElement("div");

        output.className = "output-box";

        output.textContent = exp.output;

        details.appendChild(output);

    }

    // Screenshots

    if (exp.screenshots) {

        const heading = document.createElement("h4");

        heading.textContent = "Practical Journal - Screenshots";

        details.appendChild(heading);

        const list = document.createElement("div");

        list.className = "screenshot-list";

        exp.screenshots.forEach((screenshot, index) => {

            const label = document.createElement("label");

            const checkbox = document.createElement("input");

            checkbox.type = "checkbox";

            checkbox.addEventListener("change", () => {
                label.style.opacity = checkbox.checked ? "0.55" : "1";
            });

            const text = document.createElement("span");

            text.textContent = `${index + 1}. ${screenshot}`;

            label.appendChild(checkbox);
            label.appendChild(text);

            list.appendChild(label);

        });

        details.appendChild(list);

    }

    // Notes

    if (exp.note) {

        const heading = document.createElement("h4");

        heading.textContent = "Important Note";

        const note = document.createElement("div");

        note.className = "aim";

        note.textContent = exp.note;

        details.appendChild(heading);
        details.appendChild(note);

    }

    // Result

    if (exp.result) {

        const heading = document.createElement("h4");

        heading.textContent = "Result";

        const result = document.createElement("div");

        result.className = "result-box";

        result.textContent = exp.result;

        details.appendChild(heading);
        details.appendChild(result);

    }

    return details;

}

// ======================================================
// DISPLAY EXPERIMENT CARDS
// ======================================================

function renderExperiments() {

    const searchText = searchInput.value.toLowerCase().trim();

    codeList.innerHTML = "";

    const filteredExperiments = experiments.filter(exp => {

        const matchesCategory =
            selectedCategory === "All" ||
            exp.category === selectedCategory;

        const searchableText = [
            exp.title,
            exp.category,
            exp.description,
            exp.aim,
            ...exp.steps,
            exp.commands || "",
            exp.python || ""
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchText);

        return matchesCategory && matchesSearch;

    });

    document.getElementById("result-count").textContent =
        `Showing ${filteredExperiments.length} of ${experiments.length} experiments`;

    if (filteredExperiments.length === 0) {

        const empty = document.createElement("div");

        empty.className = "empty-state";

        empty.textContent = "No experiments found. Try another search.";

        codeList.appendChild(empty);

        return;

    }

    filteredExperiments.forEach((exp) => {

        const originalIndex = experiments.indexOf(exp);

        const card = document.createElement("article");

        card.className = "experiment-card";

        // Card top

        const top = document.createElement("div");

        top.className = "card-top";

        const number = document.createElement("span");

        number.className = "card-number";

        number.textContent =
            `EXPERIMENT ${String(originalIndex + 1).padStart(2, "0")}`;

        const category = document.createElement("span");

        category.className = "card-category";

        category.textContent = exp.category;

        top.appendChild(number);
        top.appendChild(category);

        // Title

        const title = document.createElement("h3");

        title.textContent = exp.title;

        // Description

        const description = document.createElement("p");

        description.className = "card-description";

        description.textContent = exp.description;

        // Actions

        const actions = document.createElement("div");

        actions.className = "card-actions";

        const count = document.createElement("span");

        count.className = "step-count";

        count.textContent = `${exp.steps.length} PROCEDURE STEPS`;

        const viewButton = document.createElement("button");

        viewButton.className = "view-btn";

        viewButton.textContent = "View full experiment +";

        // Expandable content

        const details = createDetails(exp);

        viewButton.addEventListener("click", () => {

            const isOpen = details.classList.toggle("open");

            viewButton.textContent = isOpen
                ? "Close experiment −"
                : "View full experiment +";

        });

        actions.appendChild(count);
        actions.appendChild(viewButton);

        card.appendChild(top);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(actions);
        card.appendChild(details);

        codeList.appendChild(card);

    });

}

// ======================================================
// SEARCH
// ======================================================

searchInput.addEventListener("input", renderExperiments);

// ======================================================
// INITIALIZE WEBSITE
// ======================================================

document.getElementById("experiment-count").textContent =
    String(experiments.length).padStart(2, "0");

document.getElementById("category-count").textContent =
    String(categories.length - 1).padStart(2, "0");

renderCategories();

renderExperiments();

console.log("MyCodeLibrary loaded successfully!");
console.log("Total experiments:", experiments.length);