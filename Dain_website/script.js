document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.header-modal');
    const toggleModalBtn = document.querySelector('.header-modal-btn');

    toggleModalBtn.onclick = function () {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'block';
        }
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// header
class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../../styles.css">
        <header>
            <nav>
                <a class="logo" href="./index.html"><img src="./images/logo.svg" alt="Logo" /></a>
                <button class="header-modal-btn">
                    PROJECTS
                    <img class="icon-32" src="./images/arr_down.svg" alt="Dropdown Arrow" />
                </button>
                <ul class="header-modal hidden">
                    <li>
                        <a href="#">
                            <div>
                                <p class="header-modal-title">CHARMSAE</p>
                                <span>BX Design</span>
                            </div>
                            <img class="icon-32" src="./images/arr_right.svg" alt="Right Arrow" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <p class="header-modal-title">CHARMSAE</p>
                                <span>BX Design</span>
                            </div>
                            <img class="icon-32" src="./images/arr_right.svg" alt="Right Arrow" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <p class="header-modal-title">CHARMSAE</p>
                                <span>BX Design</span>
                            </div>
                            <img class="icon-32" src="./images/arr_right.svg" alt="Right Arrow" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <p class="header-modal-title">CHARMSAE</p>
                                <span>BX Design</span>
                            </div>
                            <img class="icon-32" src="./images/arr_right.svg" alt="Right Arrow" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <p class="header-modal-title">CHARMSAE</p>
                                <span>BX Design</span>
                            </div>
                            <img class="icon-32" src="./images/arr_right.svg" alt="Right Arrow" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        `;

        this.querySelector('.header-modal-btn').addEventListener('click', () => {
            this.querySelector('.header-modal').classList.toggle('hidden');
        });
    }
}

customElements.define('header-component', HeaderComponent);
