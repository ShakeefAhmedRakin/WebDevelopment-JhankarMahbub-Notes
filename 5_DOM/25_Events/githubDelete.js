console.log('EVENT TESTING');


document.getElementById('btn-one').addEventListener('mouseenter',function(){
    console.log('The Cursor Is Inside Button')
})
document.getElementById('btn-two').addEventListener('mouseover',function(){
    console.log('The Cursor Is Hovering The Button')
})