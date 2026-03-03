let currentTab = 'all';

const activeTab = ["text-white","bg-[#3B82F6]"];
const inactiveTab = ["text-[#64748B]", "bg-white", "border",
                    "border-gray-300"];

const allContainer = document.getElementById("all_container");

const interviewContainer = document.getElementById("interview_container");

const rejectedContainer = document.getElementById("rejected_container"); 


// function for Switching Buttons 

function switchTab (tab) {
    
    const tabs = ["all", "interview", "rejected"];


    // for of loop for Removing & adding inactive & active tab's style to the three buttons

    for (const t of tabs) {
        const tabName = document.getElementById(t + "_tab");

        if (t === tab) {
            tabName.classList.remove(...inactiveTab);
            tabName.classList.add(...activeTab);
        }
        else {
            tabName.classList.remove(...activeTab);
            tabName.classList.add(...inactiveTab);
        }
    }

    const sections = [allContainer, interviewContainer, rejectedContainer];


    // for of loop for adding hidden class initially to all the sections 

    for (const section of sections) {
        section.classList.add("hidden");
    }


    // if else conditon for removing hidden class from all the sections by clicking the three buttons

    if (tab === "all") {
        allContainer.classList.remove("hidden");
    }
    else if (tab === "interview") {
        interviewContainer.classList.remove("hidden");
    }
    else {
        rejectedContainer.classList.remove("hidden");
    }
}


// Statistic Cards Update 

const totalStat = document.getElementById("total_stat");
const interviewStat = document.getElementById("interview_stat");
const rejectedStat = document.getElementById("rejected_stat");


switchTab(currentTab);



// event listener for interview, rejected & delete button in the card

document.getElementById("jobs_container").addEventListener("click", function (event) {

    const clickedElement = event.target;
    
    const card = clickedElement.closest(".card");
    const parentOfCard = card.parentNode;

    const applyStatus = card.querySelector(".apply_status");


    if (clickedElement.classList.contains("interview_btn")) {
        applyStatus.innerText = "Interview";
        interviewContainer.appendChild(card); 
        updateStat ();
    }

    if (clickedElement.classList.contains("rejected_btn")) {
        applyStatus.innerText = "Rejected";
        rejectedContainer.appendChild(card);
        updateStat ();
    }

    if (clickedElement.classList.contains("delete_btn")) {
        parentOfCard.removeChild(card);
        updateStat ();
    }
});


// function for updating statistics 

function updateStat () {
    totalStat.innerText = allContainer.children.length;
    interviewStat.innerText = interviewContainer.children.length;
    rejectedStat.innerText = rejectedContainer.children.length;
}

updateStat ();