function fun1() {
    document.getElementById("skills").style.display="block";
    document.getElementById("Experience").style.display="none";
    document.getElementById("Education").style.display="none";
    event.currentTarget.classList.add("active-link");
}
function fun2() {
    document.getElementById("skills").style.display="none";
    document.getElementById("Experience").style.display="block";
    document.getElementById("Education").style.display="none";
    event.currentTarget.classList.add("active-link");
}
function fun3() {
    document.getElementById("skills").style.display="none";
    document.getElementById("Experience").style.display="none";
    document.getElementById("Education").style.display="block";
    event.currentTarget.classList.add("active-link");
}

var slidmenu = document.getElementById("slidemenu");
function openMenu(){
    slidmenu.style.right = "0";
    slidmenu.style = "display:block";
}
function closeMenu() {
    slidmenu.style.right = "-200px";
}
function closeMenuAgain(){
    slidmenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzRIFEyF9wd5UFqwFaP4JdxUTSLD0J7tFJRW2F2-5fIo-9odGf_Yk3UCJ9-iWrQhq4a/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    alert("Data Sent Successfully!");
    form.reset()
})