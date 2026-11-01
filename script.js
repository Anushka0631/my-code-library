
const codes = [
    {
        title: "Python Hello World",
        category: "Python",
        description: "Basic Python program",
        code: `print("Hello World")`
    },
    {
        title: "Git Basic Commands",
        category: "Git",
        description: "Useful Git commands",
        code: `git init
git status
git add .
git commit -m "Initial commit"
git log`
    },
    {
        title: "Docker Basic Commands",
        category: "Docker",
        description: "Useful Docker commands",
        code: `docker --version
docker images
docker ps
docker build -t myapp .
docker run myapp`
    }
];

let selectedCategory = "All";

const categories = [
    "All",
    ...new Set(codes.map(item => item.category))
];

const categoryBox = document.getElementById("categories");
const codeList = document.getElementById("code-list");
const search = document.getElementById("search");

function showCategories() {
    categoryBox.innerHTML = "";

    categories.forEach(category => {
        const button = document.createElement("button");
        button.className = "category" +
            (selectedCategory === category ? " active" : "");
        button.textContent = category;

        button.onclick = () => {
            selectedCategory = category;
            showCategories();
            showCodes();
        };

        categoryBox.appendChild(button);
    });
}

function showCodes() {
    codeList.innerHTML = "";

    const query = search.value.toLowerCase();

    const filtered = codes.filter(item =>
        (selectedCategory === "All" ||
         item.category === selectedCategory) &&
        (item.title.toLowerCase().includes(query) ||
         item.description.toLowerCase().includes(query) ||
         item.code.toLowerCase().includes(query))
    );

    if (filtered.length === 0) {
        codeList.textContent = "No matching codes found.";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "code-card";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent =
            item.category + " | " + item.description;

        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.textContent = item.code;
        pre.appendChild(code);

        const copy = document.createElement("button");
        copy.className = "copy-btn";
        copy.textContent = "Copy Code";

        copy.onclick = async () => {
            try {
                await navigator.clipboard.writeText(item.code);
                copy.textContent = "Copied!";
                setTimeout(() => {
                    copy.textContent = "Copy Code";
                }, 1500);
            } catch {
                copy.textContent = "Copy failed";
            }
        };

        card.append(title, description, pre, copy);
        codeList.appendChild(card);
    });
}

search.addEventListener("input", showCodes);

showCategories();
showCodes();
