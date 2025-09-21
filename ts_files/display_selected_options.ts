
      const optionBox = document.getElementById("optionBox");
      const selectedOptionsList = document.getElementById("selectedOptions");

      function getDropdownValue() {
        selectedOptionsList.innerHTML = ""; // Clear existing list

        Array.from(optionBox.selectedOptions).forEach((opt) => {
          const li = document.createElement("li");
          li.textContent = opt.text;

          // Create the remove button
          const removeBtn = document.createElement("span");
          removeBtn.textContent = "x";

          // On click -> deselect in dropdown + remove from list
          removeBtn.onclick = () => {
            opt.selected = false; // deselect in dropdown
            li.remove(); // remove from list
          };

          li.appendChild(removeBtn);
          selectedOptionsList.appendChild(li);
        });
      }