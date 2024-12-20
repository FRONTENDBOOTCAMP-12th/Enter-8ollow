import { LitElement, html } from 'lit';
import s from '/src/pages/board/board.css?inline';
import pb from '/src/api/pocketbase';

class Board extends LitElement {
  static properties = {
    postArray: { type: Array },
    postDetailArray: {},
    postId: { type: String },
  };
  constructor() {
    super();
    this.description = '';
    this.postArray = [];
    this.postDetailArray = [];
    this.connectedCallback();
    this.postId = 'no4l9i8q06plv7f';
  }

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchData();
    this.toggleHidden();
  }

  async fetchData() {
    const records = await pb.collection('posts').getList(0, 7, {
      sort: '-created',
      expand: 'with,qna',
    });

    let postArray = records.items.map((item) => item.expand);

    postArray.forEach((item) => {
      if (item.qna) {
        const { id, category, content, created, place, title, viewCount, img } =
          item.qna;

        this.postDetailArray.push({
          img: `${import.meta.env.VITE_PB_API}/files/qnaPosts/${id}/${img}?thumb=100x100`,
          category,
          content,
          created,
          place,
          title,
          viewCount,
          collectionName: '질의응답',
        });
      }
      if (item.with) {
        const {
          category,
          created,
          description,
          people,
          peoples,
          place,
          gender,
          time,
          title,
        } = item.with;

        this.postDetailArray.push({
          category,
          created,
          description,
          people,
          peoples,
          place,
          gender,
          time,
          title,
          collectionName: '같이해요',
        });
      }
    });

    this.requestUpdate();
  }

  toggleHidden() {
    //테마리스트의 닫기버튼과 메인버튼의 체크를 동시에 제어하는 이벤트
    const boardThemeList = document
      .querySelector('board-page')
      .shadowRoot.querySelector('board-theme-list');

    const button = document
      .querySelector('board-page')
      .shadowRoot.querySelector('.category');

    console.log(button);
    console.log(close);

    setTimeout(() => {
      const closeTheme = boardThemeList
        ? boardThemeList.shadowRoot.querySelector('.close')
        : null;
      const innerButton = button
        ? button.shadowRoot.querySelector('button')
        : null;

      //닫기 버튼이 클릭되면 hidden과 button의 checked 클래스를 토글
      if (closeTheme && innerButton) {
        innerButton.addEventListener('click', () => {
          boardThemeList.classList.toggle('hidden');
        });

        closeTheme.addEventListener('click', () => {
          boardThemeList.classList.toggle('hidden');
          innerButton.classList.toggle('checked');
        });
      } else {
        console.error('dom 요소들을 찾지 못했습니다.');
      }
    }, 300); // 300ms 후에 중첩된 두 번째 shadowRoot에 접근
  }

  render() {
    function formatTimeDifference(time) {
      const currentTime = new Date();
      const targetTime = new Date(time);

      // 두 시간의 차이 계산 (밀리초 단위)
      const differenceInMilliseconds = targetTime - currentTime;

      // 차이를 분, 시간, 일 단위로 변환
      const differenceInMinutes = Math.floor(
        Math.abs(differenceInMilliseconds) / 1000 / 60
      );
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const differenceInDays = Math.floor(differenceInHours / 24);

      // 차이가 음수일 경우 (과거 시간)
      if (differenceInMinutes < 1) {
        return '방금 전';
      } else if (differenceInMinutes < 60) {
        return `${differenceInMinutes} 분 전`;
      } else if (differenceInHours < 24) {
        return `${differenceInHours} 시간 전`;
      } else if (differenceInDays === 1) {
        return `어제`;
      } else {
        return `${differenceInDays} 일 전`;
      }
    }

    function formatMeetDay(time) {
      const currentTime = new Date();
      const targetTime = new Date(time);

      // 두 시간의 차이 계산 (밀리초 단위)
      const differenceInMilliseconds = targetTime - currentTime;

      // 차이를 분, 시간, 일 단위로 변환
      const differenceInMinutes = Math.floor(
        Math.abs(differenceInMilliseconds) / 1000 / 60
      );
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const differenceInDays = Math.floor(differenceInHours / 24);
      // 차이가 양수일 경우 (미래 시간)
      if (differenceInMilliseconds > 0) {
        if (differenceInMinutes < 60) {
          return `${differenceInMinutes} 분 후`;
        } else if (differenceInHours < 24) {
          return `${differenceInHours} 시간 후`;
        } else if (differenceInDays === 1) {
          return `내일`;
        } else {
          return `${differenceInDays} 일 후`;
        }
      } else return '마감됨';
    }

    return html`
      <style>
        ${s}
      </style>

      <div class="main-button-container">
        <main-button class="category" name="주제"></main-button>
        <main-button name="인기글"></main-button>
        <main-button name="같이해요"></main-button>
        <main-button name="질의응답"> </main-button>
        <main-button name="자유게시판"></main-button>
      </div>

      <ul class="board-field-container">
        ${this.postDetailArray.map(
          (item) => html`
            <li>
              <board-field
                text=${item.collectionName}
                title=${item.title.length > 18
                  ? item.title.substring(0, 18) + '..'
                  : item.title}
                location=${item.place}
                description=${item.content
                  ? item.content.length > 24
                    ? item.content.substring(0, 24) + '..'
                    : item.content
                  : ''}
                viewCount=${item.viewCount}
                time=${formatTimeDifference(item.created)}
                personCount="${item.people}/${item.peoples}"
                gender=${item.gender}
                meetDay=${formatMeetDay(item.time)}
                imgLink=${item.img}
              ></board-field>
            </li>
          `
        )}
      </ul>
      <region-menu></region-menu>
      <base-header></base-header>
      <board-theme-list id="board-theme-list" class="hidden"></board-theme-list>
    `;
  }
}

customElements.define('board-page', Board);
