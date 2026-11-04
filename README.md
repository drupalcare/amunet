# Amunet

Amunet is a sub-theme of W3CSS Theme (machine name `drupal8_w3css_theme`). Its
menu is hidden until a visitor asks for it: a menu button sits at the left of the
header and a search button at the right, with the site branding between them.

## Requirements

- Drupal 11.3 or later, or Drupal 12.
- W3CSS Theme 3.0. Install it first. Amunet does not work without it, and it is
  the release that Amunet's class names and settings follow.

## Installing

1. Install W3CSS Theme 3.0 (for example `composer require drupal/d8w3css`).
2. Install Amunet into `themes/contrib`, for example
   `composer require drupal/amunet`.
3. Go to Appearance (`/admin/appearance`) and scroll to "Amunet".
4. Click "Install and set as default".

With Drush: `drush theme:enable drupal8_w3css_theme amunet`, then
`drush config:set system.theme default amunet -y`, then `drush cr`.

Installing the theme also adds its default block placements (main menu, account
menu, search, branding, footer menu and the page blocks). Check them at
`/admin/structure/block` for the Amunet theme and move any that clash with blocks
you already have.

## What is different from W3CSS Theme

Amunet changes the header and the menu. Everything below the header comes from
the base theme.

- **Hidden side menu.** The main menu and the account menu are placed in the
  "Primary Menu Vertical" region. They do not show on the page. The menu button
  at the left of the header opens them as a side panel, at least 300 pixels
  wide. The button appears only when that region holds a block.
- **Header with three parts.** The menu button is at the left, the Site branding
  block in "Header" is centered, and the search button is at the right.
- **Header stays at the top.** The header sticks to the top of the window while
  the page scrolls.
- **Search panel.** The Search block goes in the "Fixed Search Bar" region. It
  does not show on the page. The search button opens it as a full-width panel at
  the top of the window. A close button, the Escape key, or a click outside the
  panel closes it. Opening the search closes the side menu. Clicking the menu
  button closes the search.
- **Horizontal menu is still available.** A menu block you place in "Primary
  Menu" shows as the base theme's horizontal bar above the header. Amunet places
  none there by default.
- **Footer order.** On the front page, the three footer regions show first. On
  every page, the bottom regions, the footer menu and the copyright follow, in
  one footer.
- **Colors.** The default color scheme is `w3-theme-00008` (Red Turquoise).
  Amunet adds a few contrast fixes for this scheme: navy text in the header, a
  lighter footer menu text and a darker input focus border. They apply only
  while this scheme is selected. If you pick another scheme, you get that
  scheme's own colors.
- **Focus and motion.** Links, buttons and fields show a visible outline on
  keyboard focus. Visitors who ask their system for less motion get no
  transitions.

The regions are the base theme's 22, plus "Fixed Search Bar" (23 in total).

## Settings

Amunet has no settings of its own. It uses the settings form of W3CSS Theme: go
to `/admin/appearance/settings/amunet` to set the website width, color scheme
and region colors, fonts, social links, copyright and the rest. Amunet's own
defaults are the color scheme above and the copyright text "Copyright %year% -
All Rights Reserved". Social links are empty and turned off, and the credit link
is off.

## Checking that it works

1. Open the front page. The header shows a menu button at the left, the branding
   in the middle and a search button at the right. No menu is visible.
2. Click the menu button. The menu opens as a panel at the side. Close it with
   its close button.
3. Click the search button. The search panel slides down from the top and the
   cursor is in the search field. Press Escape. The panel closes.
4. Scroll down. The header stays at the top.
5. Make the window narrow, about 390 pixels wide. The header still shows the
   three parts and both buttons still open their panels.
6. Press the Tab key. A visible outline moves with the focus.

## Custom CSS and JavaScript

Amunet 3.0 uses the `w3css-` class names and ids of W3CSS Theme 3.0, for example
`w3css-main-nav-vertical` and `w3css-header`. W3.CSS library classes that start
with `w3-` are unchanged. Custom CSS or JavaScript written against the old names
must be renamed. The base theme ships a script for it and a table of old and new
names: `docs/CLASS-MIGRATION.md` in the W3CSS Theme folder.

Put your own CSS, JavaScript and templates in a sub-theme of Amunet. The folder
`amunet_subtheme` in this package is an empty starter. Copy it to
`themes/custom`, and rename the folder, its files, the library name inside them
and the name in the `.info.yml` file before you enable it.

## Helpful links

- W3CSS Theme: https://www.drupal.org/project/d8w3css
- Documentation: https://www.drupal.org/node/2866181
- Color schemes: https://www.w3css.flashwebcenter.com/w3css-predefined-color-themes
- Amunet demo: https://www.amunet.flashwebcenter.com/
- Issue queue: https://www.drupal.org/project/issues/amunet
