# fixed-tooltip
JavaScript tooltip library. Makes tooltips positioned outside overflowed elements. Creates the tooltip at the end of the body, and moves as positioned element next to target. When you have a overflowed container, and You want to user tooltip for any element in this container, this plugin helps You with that.

## Usage

```js
$('[data-tooltip]').fixedTooltip();
```
## Options

- template - HTML template used to create tooltip. One of the elements inside must have 'ct-text' class. Script inserts to this element the tooltip text.
- classHidden - Class added to hidden tooltip.
- classShowed - Class added to showed tooltip.
- attrText - Element attribute name, from which the script should take the tooltip text.
- offset - Offset in pixels from target element.
- removeTitleAttr - If true, script removes title attribute from target element.
