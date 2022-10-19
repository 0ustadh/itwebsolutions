window.onload = function() {
    // Hacked counter
    let follower = document.getElementById('counter');
    let i = 2000000-102;
    let count = setInterval(function() {
        i++;
        follower.innerText = i;       
        if(follower.innerText == 20000000000) {
            clearInterval(count);
        }
    }, 48);
    // Hacked counter end
    };

    // Bootstrap 4 Tooltip initialization
    $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    });
    // Bootstrap 4 Tooltip initialization end