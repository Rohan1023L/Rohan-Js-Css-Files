
    const headerHeight = document.querySelector('header').offsetHeight;

    const links = document.querySelectorAll('#open-md .nav-link');

                links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                links.forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            }
        });
                });

                window.addEventListener('load', () => {
                    const currentHash = window.location.hash;
    if (currentHash) {
                        const activeLink = document.querySelector(`#open-md .nav-link[href="${currentHash}"]`);
    if (activeLink) activeLink.classList.add('active');
                    }
                });
