## Documentations

**Flexbox:**
- [MDN Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Flexbox Froggy](https://flexboxfroggy.com/) - An interactive game to learn Flexbox visually.


**Grids:**
- [MDN CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Grid Garden](https://cssgridgarden.com/) - An interactive game for learning CSS Grid.

**Media Queries:**
- [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)

**CSS Units:**
- [MDN CSS Units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [CSS Units: vh, vw, vmin, vmax](https://www.sitepoint.com/css-viewport-units-quick-start/) - SitePoint guide.

**Optimizing Images:**
- [Optimizilla](https://imagecompressor.com/)

**Specificity, Important, Priority of CSS:**
- [Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/) - CSS-Tricks article.
- [MDN Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [!important and CSS Specificity](https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/) - Smashing Magazine article.

## 

**Using Flexboxes:**
- **Flexbox** is a layout model in CSS that makes it easier to design flexible and responsive layouts.
- Parent container becomes a **flex container**, and child items become **flex items**.
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  flex: 1;
}
```

**Using Grids:**
- **CSS Grid** is a powerful layout system that creates two-dimensional layouts.
```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;
}
```

**Using Media Queries:**
- **Media queries** allow you to apply CSS based on screen size or device characteristics.
```css
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
}
```

**CSS Units:**
- **Pixels (px)**: Fixed-size units.
- **Percentages (%)**: Relative to the parent element.
- **Viewport Width (vw)** and **Viewport Height (vh)**: Relative to the viewport size.
- **Em and Rem**: Relative to font-size of an element and root element respectively.
- **Auto**: Adjusts based on content.

**Optimizing Images:**
- Use **image compression tools** like TinyPNG, ImageOptim, or Squoosh.
- Choose appropriate image formats (JPEG for photos, PNG for transparency, SVG for scalable graphics).
- Use responsive images with the `<picture>` element and `srcset` attribute.

**Specificity, Important, Priority of CSS:**
- **Specificity**: Determines which rule is applied when multiple rules target the same element.
- **!important**: Overrides all other rules, but it's best to avoid using it excessively.
- **Cascade**: If specificity is equal, the last rule takes priority.
- **External CSS**: Overrides internal and inline styles.
- **Inline CSS**: Has higher specificity than internal and external styles.

Remember, practice and experimentation are essential to mastering these concepts. Combine theoretical knowledge with hands-on coding to build a strong foundation in web development.
