const form = document.getElementById('github-form')
form.addEventListener("submit", (e) => {
  e.preventDefault()
 fetch(`https://api.github.com/search/users?q=${e.target[0].value}`)
 .then(resp => resp.json())
 .then(resp => {
  
 })
})