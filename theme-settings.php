<?php

/**
 * @file
 * Amunet Theme.theme.
 */

use Drupal\Core\Form\FormStateInterface;

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function amunet_form_system_theme_settings_alter(&$form, FormStateInterface $form_state) {
  $form['amunet_settings']['w3_external_libraries'] = [
    '#type' => 'details',
    '#title' => t('Load External Libraries locally - Amunet'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
    '#description'   => t('<p>Load Amunet google fonts locally.</p>'),
  ];
  $form['amunet_settings']['w3_external_libraries']['amunet_google_font'] = [
    '#type' => 'checkbox',
    '#title' => t('Load google font locally. This is for use with the Amunet sub-theme'),
    '#default_value' => theme_get_setting('amunet_google_font'),
  ];

}
