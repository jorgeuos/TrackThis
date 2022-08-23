<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\TrackThis;

class TrackThis extends \Piwik\Plugin
{
    /**
     * Register function to fetch scripts
     */
    public function registerEvents()
    {
        return array(
            'AssetManager.getJavaScriptFiles' => 'getJavaScriptFiles',
        );
    }

    /**
     * Add scripts to head
     */
    public function getJavaScriptFiles(&$jsFiles)
    {
        $jsFiles[] = "plugins/TrackThis/javascripts/TrackThis.js";
    }
}
