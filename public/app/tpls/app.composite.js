module.exports = function(data){
  return `
  <div class="ui dropdown">
  <div class="text">File</div>
  <i class="dropdown icon"></i>
  <div class="menu">
    <div class="item">New</div>
    <div class="item">
      <span class="description">ctrl + o</span>
      Open...
    </div>
    <div class="item">
      <span class="description">ctrl + s</span>
      Save as...
    </div>
    <div class="item">
      <span class="description">ctrl + r</span>
      Rename
    </div>
    <div class="item">Make a copy</div>
    <div class="item">
      <i class="folder icon"></i>
      Move to folder
    </div>
    <div class="item">
      <i class="trash icon"></i>
      Move to trash
    </div>
    <div class="divider"></div>
    <div class="item">Download As...</div>
    <div class="item">
      <i class="dropdown icon"></i>
      Publish To Web
      <div class="menu">
        <div class="item">Google Docs</div>
        <div class="item">Google Drive</div>
        <div class="item">Dropbox</div>
        <div class="item">Adobe Creative Cloud</div>
        <div class="item">Private FTP</div>
        <div class="item">Another Service...</div>
      </div>
    </div>
    <div class="item">E-mail Collaborators</div>
  </div>
</div>
          <div class="ui list">
            <div class="item">
              <i class="users icon"></i>
              <div class="content">
                ${data.user_name}
              </div>
            </div>
          </div>
          <div class="ui people shape">
          <div class="sides">
            <div class="side active">
              <div class="ui card">
                <div class="image">
                  <img src="http://pickaface.net/includes/themes/clean/img/slide2.png">
                </div>
                <div class="content">
                  <div class="header">Steve Jobes</div>
                  <div class="meta">
                    <a>Acquaintances</a>
                  </div>
                  <div class="description">
                    Steve Jobes is a fictional character designed to resemble someone familiar to readers.
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">
                    Joined in 2014
                  </span>
                  <span>
                    <i class="user icon"></i>
                    151 Friends
                  </span>
                </div>
              </div>
            </div>
            <div class="side">
              <div class="ui card">
                <div class="image">
                  <img src="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png">
                </div>
                <div class="content">
                  <a class="header">Stevie Feliciano</a>
                  <div class="meta">
                    <span class="date">Joined in 2014</span>
                  </div>
                  <div class="description">
                    Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.
                  </div>
                </div>
                <div class="extra content">
                  <a>
                    <i class="user icon"></i>
                    22 Friends
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui basic modal">
          <i class="close icon"></i>
          <div class="header">
            Archive Old Messages
          </div>
          <div class="image content">
            <div class="image">
              <i class="archive icon"></i>
            </div>
            <div class="description">
              <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
            </div>
          </div>
          <div class="actions">
            <div class="two fluid ui inverted buttons">
              <div class="ui cancel red basic inverted button">
                <i class="remove icon"></i>
                No
              </div>
              <div class="ui ok green basic inverted button">
                <i class="checkmark icon"></i>
                Yes
              </div>
            </div>
          </div>
        </div>
        <div class="ui form">
          <div class="grouped fields">
            <label>Outbound Throughput</label>
            <div class="field">
              <div class="ui slider checkbox">
                <input type="radio" name="throughput" checked="checked id="input_20_mbps">
                <label for="input_20_mbps">20 mbps max</label>
              </div>
            </div>
            <div class="field">
              <div class="ui slider checkbox">
                <input type="radio" name="throughput" id="input_10_mbps">
                <label for="input_10_mbps">10mbps max</label>
              </div>
            </div>
            <div class="field">
              <div class="ui slider checkbox">
                <input type="radio" name="throughput" id="input_5_mbps">
                <label for="input_5_mbps">5mbps max</label>
              </div>
            </div>
            <div class="field">
              <div class="ui slider checkbox checked">
                <input type="radio" name="throughput" id="input_unmetered_mbps">
                <label for="input_unmetered_mbps">Unmetered</label>
              </div>
            </div>
          </div>
        </div>
        `;
}
