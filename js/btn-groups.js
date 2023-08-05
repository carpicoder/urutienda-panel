const btnGroups = document.querySelectorAll(".btn-group");

    btnGroups.forEach(btnGroup => {
        const buttons = btnGroup.querySelectorAll(".btn");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                buttons.forEach(btn => {
                    btn.classList.remove("btn-warning");
                    btn.classList.add("btn-outline-dark");
                });

                this.classList.remove("btn-outline-dark");
                this.classList.add("btn-warning");
            });
        });
    });