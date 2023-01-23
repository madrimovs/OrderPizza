function findElement(element, parent = document) {
	return parent.querySelector(element);
}

const elSelect = findElement(".form-select");
const elBread = findElement("#bread");
const elSizeBread = findElement("#sizeOfBread");
const elInput = document.querySelectorAll(".size-wrapper__input");
const elUnder = findElement("#ustida");
const elHold = document.querySelectorAll(".hold__input");
const elPlus = document.querySelectorAll(".hold__inputt");
const elAdd = findElement("#additional-wrapper");

function changeElement(element, parent = elSelect) {
	element.textContent = parent.value;
	element.textContent = null;
	parent.addEventListener("change", () => {
		element.textContent = parent.value;
	});

	elBread.textContent = localStorage.getItem("text");
	elSelect.oninput = () => {
		localStorage.setItem("text", elSelect.value);
	};
}

changeElement(elBread);

for (let i = 0; i < elInput.length; i++) {
	const element = elInput[i];
	element.addEventListener("click", () => {
		elSizeBread.textContent = element.dataset.size;
	});

	// elSizeBread.textContent = localStorage.getItem("size");
	// localStorage.setItem("size", element.dataset.size);

	elSizeBread.textContent = localStorage.getItem("input");
	element.oninput = () => {
		localStorage.setItem("input", element.value);
	};
}

function checkArr(element, parent) {
	for (let i = 0; i < element.length; i++) {
		const arr = element[i];
		let elem = arr.dataset.add;

		const newLi = document.createElement("li");
		newLi.style = "list-style: none";
		arr.addEventListener("change", () => {
			if (arr.checked === true) {
				newLi.textContent = elem;
				parent.appendChild(newLi);
			}
			if (arr.checked === false) {
				newLi.textContent = null;
			}

			localStorage.setItem("check", elUnder.textContent);
		});
	}
}
checkArr(elHold, elUnder);

for (let i = 0; i < elPlus.length; i++) {
	const element = elPlus[i];

	let arr = element.dataset.extra;

	const newList = document.createElement("li");
	newList.style = "list-style: none";

	element.addEventListener("change", () => {
		if (element.checked === true) {
			newList.textContent = arr;
			elAdd.appendChild(newList);
		}
		if (element.checked === false) {
			newList.textContent = null;
		}

		arr.checked = localStorage.getItem("checked");
		localStorage.setItem("checked", elAdd.textContent);
	});
}
