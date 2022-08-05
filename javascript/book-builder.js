// shows the button expansion
document.querySelectorAll(".expansion__btn").forEach(
    (expand_btn) => {
        expand_btn.addEventListener("click",
            function () {
                document.querySelectorAll(".expansion").forEach (
                    (expansion) => {
                        if(expansion.id === expand_btn.id)
                            expansion.classList.toggle("expansion--active");
                    }
                )
            }
        )
    }
)

function createInputList (button_id,input_element_id,output_element_id) {
    const input_list = document.getElementById(input_element_id);

    document.getElementById(button_id).addEventListener("click",
        function () {
            input_list.classList.add(input_list.classList[0]+"--active");
        }
    )

    input_list.querySelector(".selectionlist__header__btn").addEventListener("click",closeList)

    function closeList () {
        input_list.querySelectorAll("#other").forEach(
            (subject) => {
                subject.classList.remove(subject.classList[0]+"--active");
                input_list.classList.remove("selectionlist--active");
                input_list.querySelector(".selectionlist__btn").classList.add("selectionlist__btn--active");
            }
        )
    }

    input_list.querySelector(".selectionlist__btn").addEventListener("click",
        function () {
            input_list.querySelectorAll(".selectionlist__item").forEach(
                (listitem) => {
                    listitem.classList.add("selectionlist__item--active");
                }
            );
    
            input_list.querySelectorAll(".selectionlist__division").forEach(
                (listitem) => {
                    listitem.classList.add("selectionlist__division--active");
                }
            );
    
            this.classList.remove("selectionlist__btn--active");
        }
    )

    input_list.querySelectorAll(".selectionlist__item").forEach(
        (listitem) => {
            listitem.addEventListener("click",
                function () {  
                    input_list.querySelectorAll(".selectionlist__item__icon").forEach(
                        (item_icon) => {
                            item_icon.classList.remove("selectionlist__item__icon--active");
                        }
                    )
    
                    this.querySelector(".selectionlist__item__icon").classList.add("selectionlist__item__icon--active");
    
                    document.getElementById(output_element_id).value = this.querySelector(".selectionlist__item__value").innerText;

                    closeList();
                }
            )
        }
    )
}

createInputList("Subject","Subject-List","Subject-input");
createInputList("Grade","Grade-List","Grade-input");

function bookinput (button_id,input_element_id,output_function) {
    const input_element = document.getElementById(input_element_id);

    document.getElementById(button_id).addEventListener("click",
        function () {
            input_element.classList.add("bookinput--active");
        }
    )

    input_element.querySelector(".bookinput__header__btn").addEventListener("click",
        function () {
            input_element.classList.remove("bookinput--active");
        }
    )

    input_element.querySelector(".bookinput__input").addEventListener("input",
        function () {
            input_element.querySelector(".bookinput__lettercount").innerText = this.value.length + "/" + this.getAttribute("maxlength");
        }
    )

    input_element.querySelector(".bookinput__btn").addEventListener("click",output_function)
}

var section_number = 1;

function addSection() {
    section_input = document.getElementById("Section-input");
    new_section = document.querySelector(".bookbuilder__element").cloneNode(true);
    new_section.querySelector(".bookbuilder__element__h1").innerText = section_input.querySelector(".bookinput__input").value;

    section_number++;
    new_section.querySelector(".expansion__btn").id = "Section" + section_number;
    new_section.querySelector(".expansion").id = "Section" + section_number;
    document.querySelector(".bookbuilder__element__h2").innerText = "Table of Contents(" + section_number + ")";

    document.querySelector(".bookbuilder__left").appendChild(new_section);
    new_section.querySelector(".expansion__btn").addEventListener("click",
        function () {
            document.querySelectorAll(".expansion").forEach (
                (expansion) => {
                    if(expansion.id === this.id)
                        expansion.classList.toggle("expansion--active");
                }
            )
        }
    )

    section_input.querySelector(".bookinput__header__btn").click();
    section_input.querySelector(".bookinput__input").value = "";
    section_input.querySelector(".bookinput__lettercount").innerText = section_input.querySelector(".bookinput__input").value.length + "/" + section_input.querySelector(".bookinput__input").getAttribute("maxlength");
}

bookinput("add-section","Section-input",addSection);
bookinput("Create-book","Book-title-input");
