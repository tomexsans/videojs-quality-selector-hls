import videojs from 'video.js';

// Concrete classes
const VideoJsMenuItemClass = videojs.getComponent('MenuItem');

/**
 * Create a QualitySelectorHls plugin instance.
 *
 * @param  {player} player
 *         A Video.js Player instance.
 *
 * @param  {item} [item]
 *         The Item Quality Item
 *
 * @param  {qualityButton} [qualityButton]
 *         ConcreteButton
 *
 * @param  {plugin} plugin
 *         Plugin
 *
 * @return {MenuItem} MenuItem
 *         VideoJS Menu Item Class
 */
export default function ConcreteMenuItem(player, item, qualityButton, plugin) {

  const ConcreteMenuItemInit = new VideoJsMenuItemClass(player, {
    label: item.label,
    selectable: true,
    selected: item.selected || false
  });

  ConcreteMenuItemInit.item = item;
  ConcreteMenuItemInit.qualityButton = qualityButton;
  ConcreteMenuItemInit.plugin = plugin;

  ConcreteMenuItemInit.handleClick = function() {
    // Reset other menu items selected status.
    for (let i = 0; i < this.qualityButton.items.length; ++i) {
      this.qualityButton.items[i].selected(false);
    }
    // Set this menu item to selected, and set quality.
    this.plugin.setQuality(this.item.value);
    this.selected(true);
  };

  return ConcreteMenuItemInit;
}
