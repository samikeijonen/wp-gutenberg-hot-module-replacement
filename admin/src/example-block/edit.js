/**
 * WordPress dependencies
 */
const {
	Component,
} = wp.element;

/**
 * External dependencies
 */
import React from "react";
import { hot } from "react-hot-loader/root";

import HotComponent from "./hot-component.js"

export class EditBlock extends Component {

	constructor( props ) {
		super();
	}

	render() {

		return (
            <div>
				<strong>1. Changing this title will not reload the whole page!</strong>
				<HotComponent />
			</div>
		);
	}
}

export default hot( EditBlock );
