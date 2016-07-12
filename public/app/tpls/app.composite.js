module.exports = function(data){
  return `
          <div class="ui list">
            <div class="item">
              <i class="users icon"></i>
              <div class="content">
                ${data.user_name}
              </div>
            </div>
          </div>
        `;
}
