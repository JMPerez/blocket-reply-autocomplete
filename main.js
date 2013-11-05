(function() {

  var BlocketAutofill = {

    _options: {},

    /**
     * Initialises the class
     */
    init: function() {
      var container = document.getElementById('contact_container');
      if (!container) {
        return;
      }

      var self = this;
      document.getElementById('contact_link').addEventListener('click',
        function () {
          setTimeout(function() {
            chrome.extension.sendRequest({method: 'getOptions'}, function(response) {
              self._options = response.options;
              self.fillForm();
            });
          }, 200);
        },
        false
      );
    },

    /**
     * Gets the advertiser short name
     * @return {string} The advertiser short name
     */
    getAdvertiserShortName: function() {
      var container = document.getElementById('ad_replay_form_headline');
      var text = container.innerHTML.trim();
      if (text.split(' ').length > 1) {
        var name = text.split(' ')[1];
        return name.charAt(0).toUpperCase() + name.slice(1);
      } else {
        return '';
      }
    },

    /**
     * Gets the Blockr page id
     * @return {string} The Blockr page id
     */
    getPageId: function() {
      var url = window.location.href;
      var parts = url.split('_');
      var parts2 = parts[parts.length - 1].split('.');
      return parts2[0];
    },

    /**
     * Composes the reply message
     * @return {string} The reply message after doing the substitutions
     */
    composeMessage: function() {
      var replacements = {
        'ad_id': this.getPageId(),
        'advertiser_short_name': this.getAdvertiserShortName()
      };

      var message = this._options.message;
      for (var r in replacements) {
        if (replacements.hasOwnProperty(r)) {
          message = message.replace(new RegExp('{{' + r + '}}', 'g'), replacements[r]);
        }
      }
      return message;
    },

    /**
     * Fills the reply form
     */
    fillForm: function() {
      document.getElementById('name').value = this._options.name || '';
      document.getElementById('email').value = this._options.email || '';
      document.getElementById('phone').value = this._options.phone || '';
      document.getElementById('adreply_body').value = this.composeMessage();
      document.getElementById('cc').setAttribute('checked', 'checked');
      document.getElementById('adreply_body').style.height = '390px';
    }
  };


  BlocketAutofill.init();
})();
