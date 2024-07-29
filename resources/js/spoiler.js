document.getElementById('spoilerButton').addEventListener('click', function() {
    let spoilerContainer = document.getElementById('spoilerContainer');
    let spoilerContent = document.getElementById('spoilerContent');
    if (spoilerContent.style.maxHeight) {
        spoilerContent.style.maxHeight = null;
        spoilerContainer.style.maxHeight = null;
    } else {
        spoilerContent.style.maxHeight = spoilerContent.scrollHeight + "px";
        spoilerContainer.style.maxHeight = spoilerContainer.scrollHeight + spoilerContent.scrollHeight + "px";
    }
});
