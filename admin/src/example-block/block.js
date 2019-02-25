/**
 * WordPress dependencies
 */
const {
	__
} = wp.i18n;

const {
	registerBlockType
} = wp.blocks;

/**
 * Internal dependencies.
 */
import edit from "./edit.js";

const block =
	registerBlockType( 'gutenberg-hot-module-replacement/example', {
		title: __( 'Hot Module Replacement Example' ),
		icon: '',
		category: 'common',
		supports: {
			html: false,
		},
		edit,
		save() {
			return null;
		},
	} );

export default block;