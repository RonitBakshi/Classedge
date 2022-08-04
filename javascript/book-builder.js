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

// shows the input list
document.querySelectorAll(".bookbuilder__inputelement").forEach (
    (input_element) => {
        input_element.addEventListener("click",
            function () {
                const input_list = document.getElementById(input_element.id+"-List");
                input_list.classList.add(input_list.classList[0]+"--active");
            }
        )
    }
)

document.querySelector(".subjectlist__header__btn").addEventListener("click",closeSubjectList)

function closeSubjectList () {
    document.querySelectorAll("#other-subject").forEach(
        (subject) => {
            subject.classList.remove(subject.classList[0]+"--active");
        }
    )
    document.getElementById("Subject-List").classList.remove("subjectlist--active");
    document.querySelector(".subjectlist__btn").classList.add("subjectlist__btn--active");
}

// Shows other Subjects in subject list
document.querySelector(".subjectlist__btn").addEventListener("click",
    function () {
        document.querySelectorAll(".subjectlist__item").forEach(
            (listitem) => {
                listitem.classList.add("subjectlist__item--active");
            }
        );

        document.querySelectorAll(".subjectlist__division").forEach(
            (listitem) => {
                listitem.classList.add("subjectlist__division--active");
            }
        );

        this.classList.remove("subjectlist__btn--active");
}
)

//  takes input for subject list
document.querySelectorAll(".subjectlist__item").forEach(
    (listitem) => {
        listitem.addEventListener("click",
            function () {  
                document.querySelectorAll(".subjectlist__item__icon").forEach(
                    (item_icon) => {
                        item_icon.classList.remove("subjectlist__item__icon--active");
                    }
                )

                this.querySelector(".subjectlist__item__icon").classList.add("subjectlist__item__icon--active");

                document.getElementById("Subject-input").value = this.querySelector(".subjectlist__item__subject").innerText;

                closeSubjectList();
            }
        )
    }
)

document.querySelector(".gradelist__header__btn").addEventListener("click",closeGradeList)

function closeGradeList () {
    document.querySelectorAll("#other-grade").forEach(
        (grade) => {
            grade.classList.remove(grade.classList[0]+"--active");
        }
    )
    document.getElementById("Grade-List").classList.remove("gradelist--active");
    document.querySelector(".gradelist__btn").classList.add("gradelist__btn--active");
}

// Shows other Grades in grade list
document.querySelector(".gradelist__btn").addEventListener("click",
    function () {
        document.querySelectorAll(".gradelist__item").forEach(
            (listitem) => {
                listitem.classList.add("gradelist__item--active");
            }
        );

        document.querySelectorAll(".gradelist__division").forEach(
            (listitem) => {
                listitem.classList.add("gradelist__division--active");
            }
        );

        this.classList.remove("gradelist__btn--active");
}
)

//  takes input for grade list
document.querySelectorAll(".gradelist__item").forEach(
    (listitem) => {
        listitem.addEventListener("click",
            function () {  
                document.querySelectorAll(".gradelist__item__icon").forEach(
                    (item_icon) => {
                        item_icon.classList.remove("gradelist__item__icon--active");
                    }
                )

                this.querySelector(".gradelist__item__icon").classList.add("gradelist__item__icon--active");

                document.getElementById("Grade-input").value = this.querySelector(".gradelist__item__grade").innerText;

                closeGradeList();
            }
        )
    }
)

function sectioninput () {
    const section_element = document.getElementById("Section-input");

    document.getElementById("add-section").addEventListener("click",
        function () {
            section_element.classList.add("bookinput--active");
        }
    )

    section_element.querySelector(".bookinput__header__btn").addEventListener("click",
        function () {
            section_element.classList.remove("bookinput--active");
        }
    )

    section_element.querySelector(".bookinput__input").addEventListener("input",
        function () {
            section_element.querySelector(".bookinput__lettercount").innerText = this.value.length + "/20";
        }
    )
}

function createbook() {
    const section_element = document.getElementById("Book-title-input");

    document.getElementById("Create-book").addEventListener("click",
        function () {
            section_element.classList.add("bookinput--active");
        }
    )

    section_element.querySelector(".bookinput__header__btn").addEventListener("click",
        function () {
            section_element.classList.remove("bookinput--active");
        }
    )

    section_element.querySelector(".bookinput__input").addEventListener("input",
        function () {
            section_element.querySelector(".bookinput__lettercount").innerText = this.value.length + "/64";
        }
    )
}

sectioninput()
createbook()
