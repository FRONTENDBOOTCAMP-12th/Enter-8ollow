import { html, LitElement } from 'lit';
import { BoardWithCSS } from '/src/pages/Board/BoardWith/BoardWithCSS.js';
import buttonReset from '/src/style/buttonReset.css?inline';
import pb from '/src/api/pocketbase';
import { SearchActivitiesCSS } from '/src/pages/Board/SearchActivities/SearchActivitiesCSS.js';

class BoardWith extends LitElement {
  static properties = {
    activated: { type: String },
    categoryList: { type: Array },
    postArray: { type: Array },
    postDetailArray: { type: Array },
  };
  static styles = [BoardWithCSS];

  constructor() {
    super();
    this.categoryList = ['전체'];
    this.postDetailArray = [];
    this.sortRecent = true;
    this.recruiting = true;

    this.fetchData();
  }

  async fetchData() {
    const records = await pb.collection('withPosts').getList(0, 7, {
      sort: '-created',
    });

    console.log(records);

    let postArray = records.items;
    console.log(postArray);

    postArray.forEach((item) => {
      const {
        category,
        allCategory = ['전체', ...category],
        created,
        description,
        people,
        peoples,
        place,
        gender,
        time,
        lastTime,
        title,
      } = item;

      this.postDetailArray.push({
        category,
        allCategory,
        created,
        description,
        people,
        peoples,
        place,
        gender,
        time,
        lastTime,
        title,
        collectionName: '같이해요',
      });
    });

    console.log(this.postDetailArray);

    this.requestUpdate();
  }

  toggleCategory(e) {
    const parentDiv = e.target.parentElement;
    const categoryText = parentDiv.querySelector('p').textContent;

    parentDiv.classList.toggle('active');

    if (this.categoryList.includes(categoryText)) {
      this.categoryList = this.categoryList.filter(
        (item) => item !== categoryText
      );
    } else {
      this.categoryList.push(categoryText);
    }

    console.log(this.categoryList);

    this.requestUpdate();
  }

  toggleRecent() {
    this.sortRecent = !this.sortRecent;
    this.requestUpdate();
  }

  toggleRecruit() {
    this.recruiting = !this.recruiting;
    this.requestUpdate();
  }

  handleNavigation() {
    window.location.href = '/src/pages/Board/SearchActivities/index.html'; // 이동할 URL
  }

  render() {
    function formatMeetDay(time, lastTime) {
      const currentTime = new Date();
      const targetTime = new Date(time);
      const targetLastTime = new Date(lastTime);

      console.log(targetTime);

      const months = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ];
      const month = months[targetTime.getMonth()];
      const day = targetTime.getDate();

      const lastMonth = months[targetLastTime.getMonth()];
      const lastDay = targetLastTime.getDate();

      let hours = targetTime.getHours();
      const minutes = targetTime.getMinutes().toString().padStart(2, '0');
      let period = '오전';

      // 12시간 형식으로 변환 (12시 기준)
      if (hours >= 12) {
        hours = hours % 12 || 12; // 12시가 0시로 나오는 문제 해결
        period = '오후';
      } else {
        hours = hours || 12; // 0시를 12시로 변환
      }

      const differenceInMilliseconds = targetTime - currentTime;

      const differenceInMinutes = Math.floor(
        Math.abs(differenceInMilliseconds) / 1000 / 60
      );
      const differenceInHours = Math.floor(differenceInMinutes / 60);
      const differenceInDays = Math.floor(differenceInHours / 24);

      if (differenceInDays < 1) {
        return `오늘`;
      } else if (!lastTime) {
        return `${month} ${day}일, ${period} ${hours}:${minutes}`;
      } else if (lastTime) {
        return `${month} ${day}일-${lastMonth} ${lastDay}일, ${period} ${hours}:${minutes}`;
      }
    }

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
        return `${differenceInMinutes}분 전`;
      } else if (differenceInHours < 24) {
        return `${differenceInHours}시간 전`;
      } else if (differenceInDays === 1) {
        return `어제`;
      } else {
        return `${differenceInDays}일 전`;
      }
    }
    return html` <style>
        ${buttonReset}
      </style>
      <back-component><h1>같이해요</h1></back-component>
      <div class="all-button-container">
        <div class="all-button active" @click="${this.toggleCategory}">
          <button class="all-button-category">🙌</button>
          <p>전체</p>
        </div>
        <div class="all-button" @click="${this.toggleCategory}">
          <button class="all-button-category">🖊</button>
          <p>스터디</p>
        </div>
        <div class="all-button" @click="${this.toggleCategory}">
          <button class="all-button-category">💻</button>
          <p>프로젝트</p>
        </div>
        <div class="all-button" @click="${this.toggleCategory}">
          <button class="all-button-category">✨</button>
          <p>오프라인</p>
        </div>
        <div class="all-button" @click="${this.toggleCategory}">
          <button class="all-button-category">🏆</button>
          <p>공모전</p>
        </div>
      </div>

      <div class="main-button-container">
        <main-button
          class="category"
          name=${this.sortRecent ? '최근 작성순' : '오래된 순'}
          style="--button-padding: 15px"
          @click=${() => this.toggleRecent()}
          ><img
            src="/src/assets/common/direction/down.svg"
            alt="아래 방향 화살표"
            style="padding-right: 5px"
        /></main-button>
        <main-button
          name="모집 중인 글만"
          @click=${() => this.toggleRecruit()}
        ></main-button>
      </div>

      <ul class="board-field-container">
        ${this.postDetailArray
          .filter((item) => {
            let filterConditions = true;
            if (this.recruiting) {
              filterConditions =
                (this.categoryList == '전체' ||
                  this.categoryList.includes(item.category.toString())) &&
                item.peoples !== item.people;
            } else {
              filterConditions =
                this.categoryList == '전체' ||
                this.categoryList.includes(item.category.toString());
            }

            return filterConditions;
          })
          .sort((a, b) => {
            if (this.sortRecent) {
              return new Date(a.created) - new Date(b.created);
            } else return new Date(a.created) + new Date(b.created);
          })
          .map(
            (item) => html`
              <li>
                <div class="board-status">
                  <span class="recruite"
                    >${item.peoples == item.people
                      ? '모집종료'
                      : '모집 중'}</span
                  >
                  · <span>${item.category}</span> ·
                  <span>${item.place}</span>
                </div>
                <h3 class="title">${item.title}</h3>
                <board-info-items
                  gender="${item.gender}"
                  meetDay="${formatMeetDay(item.time, item.lastTime)}"
                ></board-info-items>
                <div class="participationTime">
                  <span class="participation"
                    >${item.people}/${item.peoples}명</span
                  >
                  <span class="time"
                    >${formatTimeDifference(item.created)}</span
                  >
                </div>
              </li>
            `
          )}
      </ul>

      <header-component></header-component>

      <plus-button items="[]" @click=${this.handleNavigation}></plus-button>`;
  }
}

customElements.define('board-with-page', BoardWith);
