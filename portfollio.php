<?php
/**
 * Plugin Name:       Portfollio
 * Description:       Example block scaffolded with Create Block tool.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Alexandre Crespin
 * License:           GPL-2.0
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       portfollio
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_portfollio_block_init() {
	register_block_type( __DIR__ . '/build/portfollio' );
}
add_action( 'init', 'create_block_portfollio_block_init' );
