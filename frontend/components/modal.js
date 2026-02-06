export function Modal(id, title, content) {
  return `
    <div class="modal" id="${id}">
      <div class="modal-content">
        <span class="close" onclick="document.getElementById('${id}').style.display='none'">&times;</span>
        <h3>${title}</h3>
        <div class="modal-body">
          ${content}
        </div>
      </div>
    </div>
  `;
}
