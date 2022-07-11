'use strict';

const btnComment = document.getElementById('post_comment'),
content = document.getElementById('commenting_input_field'),
displayContent = document.getElementById('show_comment');

console.log(btnComment);

const showContent = function(){
    displayContent.textContent =  content.value;
}

const enterShowContent = function(e){
    if(e.key === 'Enter'){
        displayContent.textContent =  content.value;
    } 
}

btnComment.addEventListener('click', showContent);

content.addEventListener('keydown', enterShowContent);