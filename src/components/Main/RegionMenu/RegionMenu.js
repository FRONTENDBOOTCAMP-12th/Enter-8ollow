import { LitElement, html } from 'lit';
import pb from '/src/api/pocketbase';
import s from '/src/components/Main/RegionMenu/RegionMenu.css?inline';

class RegionMenu extends LitElement {
  static properties = {
    isActive: { type: Boolean },
  };

  constructor() {
    super();
    this.isActive = false;
    this.placeList = [];
    this.checkPlace = '';
    this.id = 'i1vn08611tpq5z2';
  }

  toggleClass = async (e) => {
    const button = this.shadowRoot.querySelector('button');

    button.disabled = true; // 버튼 비활성화

    if (!this.checkPlace) {
      await this.fetchData();
    }

    this.isActive = !this.isActive;

    this.requestUpdate();

    button.disabled = false; // 데이터 요청이 끝난 후 버튼 활성화
  };

  choosePlace = (e) => {
    const li = this.shadowRoot.querySelectorAll('li');
    this.checkPlace = e.target.textContent;
    li.forEach((li) => {
      li.classList.remove('highlighted');
    });
    e.target.classList.add('highlighted');
  };

  toggleDark = () => {
    const element = document.querySelector('body');
    const checkActive = this.shadowRoot.querySelector('.inactive');

    if (!checkActive) {
      element.classList.add('modal-overlay');
    } else {
      element.classList.remove('modal-overlay');
    }
  };

  firstUpdated() {
    const button = this.shadowRoot.querySelector('button');

    button.addEventListener('click', async () => {
      await this.toggleClass();
      await this.toggleDark();
    });
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
  }

  async fetchData() {
    const records = await pb.collection('place').getOne('ptkt059wm2l8id0', {
      expand: 'name',
    });

    let obj = await pb
      .collection('place')
      .getList(1, 50, { filter: `userId = "${this.id}"` });

    this.placeList = obj.items.map((item) => item.name);
    this.checkPlace = this.placeList[0];

    this.place = records.name;
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        ${s}
      </style>

      <nav>
        <button type="button" class="region">
          <span class="region-name">${this.checkPlace}</span>
          <span class="svg-icon ${this.isActive ? 'active' : 'inactive'}">
            ${this.isActive
              ? html`
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6923 7.94219C13.6342 8.0003 13.5653 8.0464 13.4894 8.07785C13.4136 8.10931 13.3322 8.12549 13.2501 8.12549C13.168 8.12549 13.0866 8.10931 13.0108 8.07785C12.9349 8.0464 12.866 8.0003 12.8079 7.94219L7.0001 2.1336L1.19229 7.94219C1.07502 8.05947 0.915956 8.12535 0.750103 8.12535C0.584251 8.12535 0.425191 8.05947 0.307916 7.94219C0.19064 7.82492 0.124756 7.66586 0.124756 7.5C0.124756 7.33415 0.19064 7.17509 0.307916 7.05782L6.55792 0.807816C6.61596 0.749705 6.68489 0.703606 6.76077 0.672154C6.83664 0.640701 6.91797 0.624512 7.0001 0.624512C7.08224 0.624512 7.16357 0.640701 7.23944 0.672154C7.31531 0.703606 7.38425 0.749705 7.44229 0.807816L13.6923 7.05782C13.7504 7.11586 13.7965 7.18479 13.828 7.26067C13.8594 7.33654 13.8756 7.41787 13.8756 7.5C13.8756 7.58214 13.8594 7.66347 13.828 7.73934C13.7965 7.81522 13.7504 7.88415 13.6923 7.94219Z"
                      fill="black"
                    />
                  </svg>
                `
              : html`
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.6923 1.94229L7.44229 8.19229C7.38425 8.2504 7.31531 8.2965 7.23944 8.32795C7.16357 8.35941 7.08224 8.37559 7.0001 8.37559C6.91797 8.37559 6.83664 8.35941 6.76077 8.32795C6.68489 8.2965 6.61596 8.2504 6.55792 8.19229L0.307916 1.94229C0.19064 1.82502 0.124756 1.66596 0.124756 1.5001C0.124756 1.33425 0.19064 1.17519 0.307916 1.05792C0.425191 0.94064 0.584251 0.874756 0.750103 0.874756C0.915956 0.874756 1.07502 0.94064 1.19229 1.05792L7.0001 6.86651L12.8079 1.05792C12.866 0.999847 12.9349 0.953784 13.0108 0.922357C13.0867 0.890931 13.168 0.874756 13.2501 0.874756C13.3322 0.874756 13.4135 0.890931 13.4894 0.922357C13.5653 0.953784 13.6342 0.999847 13.6923 1.05792C13.7504 1.11598 13.7964 1.18492 13.8278 1.26079C13.8593 1.33666 13.8755 1.41798 13.8755 1.5001C13.8755 1.58223 13.8593 1.66354 13.8278 1.73941C13.7964 1.81528 13.7504 1.88422 13.6923 1.94229Z"
                      fill="black"
                    />
                  </svg>
                `}
          </span>
        </button>

        <ul class="region-modal ${this.isActive ? '' : 'hidden'}">
          ${this.placeList.map(
            (item) =>
              html`<li @click="${this.choosePlace}" class="my-place ">
                ${item}
              </li>`
          )}

          <li class="my-place-setting"><a href="/">내 동네 설정</a></li>
        </ul>

        <div class="menu-container">
          <a href="/"><img src="/src/assets/common/search.svg" alt="검색" /></a>
          <a href="/"
            ><img src="/src/assets/common/hamburger.svg" alt="전체메뉴"
          /></a>
          <a href="/"
            ><img src="/src/assets/common/alramBell.svg" alt="알림"
          /></a>
        </div>
      </nav>
    `;
  }
}

customElements.define('region-menu', RegionMenu);
