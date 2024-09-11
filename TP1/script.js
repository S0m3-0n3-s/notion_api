const btn = document.getElementById("btn")
const st = document.getElementById("st")
const main_section = document.querySelector(".main_section")

function handleClick(e) {

    st.innerText = "bouton cliqué !!"

	st.classList.add("red-text")

}

btn.addEventListener("click", handleClick)

//console.log("test ...", btn)
