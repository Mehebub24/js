# Projects related to DOM
[click here]()

## project 1 
# Color Switcher

```javascript
const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

button.forEach(function(button){
  button.addEventListener("click",function(e){
    if (e.target.id === "grey"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === "white"){
      body.style.backgroundColor = e.target.id
    }
  })
});

```

## project 2
# BMI calulator
```javascript
  const form = document.querySelector("form")

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector('#results')
  if (height ==="" || height <0 || isNaN(height)){
    results.innerHTML = "plaese give a valid height"
  }else if (weight ==="" || weight <0 || isNaN(weight)){
    results.innerHTML = "plaese give a valid weight"
  }else{
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    results.innerHTML =`<span>${bmi}</span>`
  }
})

```