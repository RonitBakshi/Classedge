
document.querySelectorAll(".bookshelf__tabbar__tab").forEach(
    (TabElement) => {
        TabElement.addEventListener("click",function () {

            document.querySelectorAll(".bookshelf__list__item").forEach(
                (element) => {
                    return element.classList.remove(element.classList[0] + "--active");
                }
            );

            document.querySelectorAll(".bookshelf__list__header").forEach(
                (element) => {
                    element.classList.remove(element.classList[0] + "--active");
                }
            );

            document.querySelectorAll("#" + TabElement.innerHTML).forEach(
                (element) => {
                    element.classList.add(element.classList[0] + "--active");
                }
            );

            document.querySelectorAll(".bookshelf__tabbar__tab").forEach(
                (element) => {
                    element.classList.remove(element.classList[0] + "--active");
                }
            );

            TabElement.classList.add(TabElement.classList[0] + "--active");
        })
    }
)

document.querySelector(".searchbar__input").addEventListener("input",
    function () {
        document.querySelector(".searchbar__searchicon").classList.add("searchbar__searchicon--active");
        document.querySelector(".searchbar__btn").classList.remove("searchbar__btn--active");
        document.querySelector(".searchbar").classList.add("searchbar--active");
    }
)

document.querySelector(".searchbar__btn").addEventListener("click",
    function ()
    {
        document.querySelector(".searchbar__searchicon").classList.remove("searchbar__searchicon--active");
        document.querySelector(".searchbar__btn").classList.add("searchbar__btn--active");
        document.querySelector(".searchbar").classList.remove("searchbar--active");
        document.querySelector(".searchbar__input").value = "";
    }
)

