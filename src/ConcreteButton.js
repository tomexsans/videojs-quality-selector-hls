import videojs from 'video.js';

const VideoJsButtonClass = videojs.getComponent('MenuButton');
const VideoJsMenuClass = videojs.getComponent('Menu');
const VideoJsComponent = videojs.getComponent('Component');
const Dom = videojs.dom;

/**
 * Convert string to title case.
 *
 * @param {string} string - the string to convert
 * @return {string} the returned titlecase string
 */
function toTitleCase(string) {
  if (typeof string !== 'string') {
    return string;
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Convert string to title case.
 *
 * @param {Player} player - the string to convert
 * @return {MenuButton} the returned titlecase string
 */
export default function ConcreteButton(player) {
  const ConcreteButtonInit = new VideoJsButtonClass(player, {
    title: player.localize('Quality'),
    name: 'QualityButton',
    createItems: () => {
      return [];
    },
    createMenu: () => {
      const menu = new VideoJsMenuClass(this.player_, {menuButton: this});

      this.hideThreshold_ = 0;

      // Add a title list item to the top
      if (this.options_.title) {
        const titleEl = Dom.createEl('li', {
          className: 'vjs-menu-title',
          innerHTML: toTitleCase(this.options_.title),
          tabIndex: -1
        });
        const titleComponent = new VideoJsComponent(this.player_, {el: titleEl});

        this.hideThreshold_ += 1;

        menu.addItem(titleComponent);
      }

      this.items = this.createItems();

      if (this.items) {
        // Add menu items to the menu
        for (let i = 0; i < this.items.length; i++) {
          menu.addItem(this.items[i]);
        }
      }

      return menu;

    }
  });

  return ConcreteButtonInit;
}
