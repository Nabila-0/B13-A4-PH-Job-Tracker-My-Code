let currentTab = 'all';

const activeTab = ["text-white","bg-[#3B82F6]"];
const inactiveTab = ["text-[#64748B]", "bg-white", "border",
                    "border-gray-300"];

const allContainer = document.getElementById("all_container");

const interviewContainer = document.getElementById("interview_container");

const rejectedContainer = document.getElementById("rejected_container"); 

console.log(allContainer, interviewContainer, rejectedContainer);

function switchTab (tab) {
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];

    for (const t of tabs) {
        const tabName = document.getElementById(t + "_tab");
        // console.log(tabName);

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

    for (const section of sections) {
        section.classList.add("hidden");
    }

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

switchTab(currentTab);