# Amunet changelog

## Next release

- Header buttons: the menu and search icons keep the header's colour on hover (W3.CSS turned them black, which hid them on a dark header); the hover shows as a light tint.
- Search panel: the close button is now 44px high, the same height as the search field and the Search button (the base theme fixes those at 44px).
- Composer: the package name is `drupal/amunet-amunet` again, the name Drupal.org publishes; the rename to `drupal/amunet` is reverted, so `composer require drupal/amunet-amunet` keeps working.
- Accessibility: the search slide wrapper no longer adds a second search landmark around the search form.
- JavaScript: the search behavior is renamed `amunetSearchSlide`; the 2.x name `amunetThemeBehavior` keeps working as a deprecated alias, so a sub-theme that replaces or reads it is unaffected.
- Accessibility: header text and links are white again (4.61:1 on the Indigo Lagoon header `#008192` of W3CSS Theme 3.x; the navy used on the old `#00a1c2` header is 3.21:1 there).
- CSS layers: the stylesheet is written in W3CSS Theme 3.x layers (`w3css.subtheme`, tokens, base, locked), with css-layers.json and scripts/css-layers-check.py; the library uses `drupal8_w3css_theme/base-layers` instead of the deprecated `d8w3css-global-styling`.
- W3CSS Theme 3.x scheme tokens: the footer menu form border uses `--w3css-custom-footer-menu-form-border` (was `--w-fm-inner-f-v`, no longer read by the base theme); the README names the default scheme Indigo Lagoon.
