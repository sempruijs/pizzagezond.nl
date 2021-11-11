function randomSpeed() {
    let pizzaImage = document.getElementById('pizza');
    let turnSpeed = Math.round((Math.random() * 7) + 2);
    pizzaImage.style.animationDuration = turnSpeed.toString() + "s";
}