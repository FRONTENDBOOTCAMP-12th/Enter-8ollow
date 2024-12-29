import { LitElement, html, css } from 'lit';

class CommentList extends LitElement {
  static properties = {
    comments: {
      type: Array,
      hasChanged(newVal, oldVal) {
        return newVal !== undefined && newVal !== oldVal;
      },
    },
  };

  static styles = css`
    .comment-list {
      padding: 0.9375rem;
    }
    .author {
      font-size: var(--paragraph---small);
      color: var(--contents--content-secondary);
      font-weight: 600;
    }

    .content {
      margin: 0.2rem 0 0.5rem 0;
    }
  `;

  constructor() {
    super();
    this.comments = [];
  }

  async getNickname(uid) {
    try {
      const user = await pb.collection('members').getOne(uid);

      return user.nickName || '';
    } catch (error) {
      console.error(`닉네임 가져오기 실패 (UID: ${uid}):`, error);
      return 'Unknown User';
    }
  }

  render() {
    console.log(this.comments);
    if (!this.comments.length) {
      return html`<div>댓글이 없습니다.</div>`;
    }

    return html`
      <div class="comment-list">
        ${this.comments.map(
          (comment) => html`
            <div class="comment">
              <span class="author">${comment.nickname}</span>
              <p class="content">${comment.contents}</p>
              <span class="timestamp">${comment.timestamp}</span>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('comment-list', CommentList);
