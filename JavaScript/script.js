function ClickMeFunction() {
    const c = 22.7;
    console.log(c);

    let a = true;
    var b = "20";
    console.log('a:', a, 'b:', b);

    document.getElementById('adhyaId').innerText = 'girl';
    document.getElementsByClassName('someClass')[0].style.color = 'blue';
    document.getElementsByName('someName')[0].innerText = 'Name attribute changed';
    document.getElementsByTagName('p')[0].style.fontWeight = 'bold';
    document.getElementsByTagName('p')[1].style.backgroundColor = '#f0f8ff';
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMeButton');
    if (button) {
        button.addEventListener('click', ClickMeFunction);
    }
});

