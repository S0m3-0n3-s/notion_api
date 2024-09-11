const btn = document.getElementById("btn")

function handleClick(e) {
	e.target.innerHTML = "bonjour"
}

btn.addEventListener("click", handleClick)
