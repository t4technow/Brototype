function toggleSidebar() {
	let hamMenu = document.querySelector("#hamburger-menu");
	let sidebar = document.querySelector("#sidebar");
	let sidebarOverlay = document.querySelector("#sidebar-overlay");
	let body = document.getElementsByTagName("body")[0];

	hamMenu.classList.toggle("menu-open");
	sidebar.classList.toggle("open");
	sidebarOverlay.classList.toggle("open");
	body.classList.toggle("h-100");
}

function checkRadio(e) {
	let parent = document.querySelectorAll(".radio-item");
	let child = e.querySelector(".radio-btn");
	let msgArea = document.querySelector("#placedInfo");

	let careerDetails = {
		IT: "138 students with IT background have already placed from Brocamp",
		nonIT:
			"139 students with non-IT background have already placed from Brocamp",
		dropout: "57 students with just +2 have already placed from Brocamp",
		gap: "32 students with career gap have already placed from Brocamp",
	};

	msgArea.innerHTML = careerDetails[child.id];
	child.checked = true;

	parent.forEach(removeIsActive);
	if (child.checked == true) {
		e.classList.add("isActive");
	}

	function removeIsActive(item) {
		if (item.classList.contains("isActive")) {
			item.classList.remove("isActive");
		}
	}
}

let vids = document.querySelector("video");

vids.forEach(function (index) {
	this.controls = false;
});

function showControls(e, status) {
	e.controls = status;
}
