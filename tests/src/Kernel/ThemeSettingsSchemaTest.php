<?php

declare(strict_types=1);

namespace Drupal\Tests\amunet\Kernel;

use Drupal\KernelTests\KernelTestBase;
use PHPUnit\Framework\Attributes\Group;
use PHPUnit\Framework\Attributes\RunTestsInSeparateProcesses;

/**
 * Amunet's settings config has a schema and installs under strict checking.
 *
 * Before config/schema/amunet.schema.yml existed this threw
 * "No schema for amunet.settings". The schema is self-contained, so the test
 * holds whichever d8w3css release is installed, including a tag that predates
 * the base theme's own schema.
 *
 * @license SPDX-License-Identifier: GPL-2.0-or-later
 *
 * @group amunet
 */
#[Group('amunet')]
#[RunTestsInSeparateProcesses]
class ThemeSettingsSchemaTest extends KernelTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = ['system'];

  /**
   * The only config object the strict checker is told to skip.
   *
   * Installing the base theme saves drupal8_w3css_theme.settings, whose schema
   * ships with d8w3css itself and is verified by d8w3css's own
   * ThemeSettingsSchemaTest. A released d8w3css older than that schema must not
   * fail this theme's test. This theme's own amunet.settings stays fully strict.
   */
  private const BASE_THEME_SETTINGS = 'drupal8_w3css_theme.settings';

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    // Core declares $configSchemaCheckerExclusions typed on D12 and untyped on
    // D10/D11, so a subclass cannot redeclare it on every supported major.
    // Extending the inherited static before the kernel boots works on all of
    // them; it is restored in tearDown() so nothing leaks.
    static::$configSchemaCheckerExclusions[] = self::BASE_THEME_SETTINGS;
    parent::setUp();
  }

  /**
   * {@inheritdoc}
   */
  protected function tearDown(): void {
    static::$configSchemaCheckerExclusions = array_values(array_diff(
      static::$configSchemaCheckerExclusions,
      [self::BASE_THEME_SETTINGS],
    ));
    parent::tearDown();
  }

  /**
   * Installing the theme (and its base) under strict schema is clean.
   */
  public function testInstallUnderStrictSchemaIsClean(): void {
    $this->installConfig(['system']);
    $this->container->get('theme_installer')->install(['amunet']);
    $settings = $this->config('amunet.settings');
    $this->assertFalse($settings->isNew());
    $this->assertSame('w3-theme-00008', $settings->get('current_theme'));
    $this->assertSame(1, $settings->get('top_region'));
  }

}
