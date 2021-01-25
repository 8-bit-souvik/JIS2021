
        var menuBtn = document.getElementById("menuBtn");
        var menu = document.getElementById('menu');
        var closeBtn = document.getElementById('closeBtn');
        menu.style.right = '-100%';

        function menuBtnClick() {
            if (menu.style.right == '-100%') {
                menu.style.right = '0px'
            }
        }

        function closeBtnClick() {
            if (menu.style.right == '0px') {
                menu.style.right = '-100%'
            }
        }
  