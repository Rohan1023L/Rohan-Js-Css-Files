
document.addEventListener("DOMContentLoaded", function () {
    const countingElement = document.getElementById("Counting");
    const Change_Label = document.getElementById("Change_Label");
    const targetSection = document.querySelector(".S_Two");
    const endElement = document.getElementById("scoll-end");
    const upElement = document.getElementById("Up");

    function updateScrollPercentage() {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / documentHeight) * 100);
            countingElement.textContent = ` ${scrollPercent} %`;

            if (scrollPercent === 100) {
                Change_Label.innerHTML = `&nbsp; [ <b>&uarr;</b> ]`;
            } else {
                Change_Label.innerHTML = `&nbsp; [ <b>&uarr;</b> ]`;
            }
        }

    const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(entry => {
                    if (entry.target === targetSection) {
                        if (entry.isIntersecting) {
                            countingElement.style.display = "block";
                            Change_Label.style.display = "block";
                            updateScrollPercentage();
                        }
                    }

                    if (entry.target === endElement) {
                        if (entry.isIntersecting) {
                            countingElement.style.display = "none";
                            Change_Label.style.display = "none";
                        } else {
                            countingElement.style.display = "block";
                            Change_Label.style.display = "block";
                        }
                    }
                });
            },
            {
                threshold: 0.1
            }
        );

    observer.observe(targetSection);
    observer.observe(endElement);

    window.addEventListener("scroll", updateScrollPercentage);
});

