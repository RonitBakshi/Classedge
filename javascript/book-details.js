document.querySelectorAll(".bookdetails__card__btn").forEach(
    (cardButton) => {
        cardButton.addEventListener("click",
            function () {
                if (cardButton.innerHTML === "expand_more")
                {
                    cardButton.innerHTML = "chevron_right";
                }
                else
                {
                    cardButton.innerHTML = "expand_more";
                }
                var cardid = cardButton.id.slice(0,cardButton.id.length-4); 

                document.querySelectorAll('#'+cardid).forEach(
                    function(card) {
                        card.classList.toggle("bookdetails__card--active") // add card active class
                    }
                )
            }
        )
    }
)

document.getElementById("overflowbtn").addEventListener("click",
    () => document.querySelector(".expansion").classList.toggle("expansion--active")
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
