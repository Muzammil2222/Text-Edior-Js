var bold_btn =  document.getElementById('bold-btn');
var italic_btn =  document.getElementById('italic-btn');
bold_btn.addEventListener('click', function() {
    var text = document.getElementById('text');
    text.style.fontWeight = 'bold';
} );
italic_btn.addEventListener('click', function() {
    var text = document.getElementById('text');
    text.style.fontStyle = 'italic';
} );
console.log(bold_btn);