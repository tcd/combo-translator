import React, { Component } from "react";
import { Grid, Button, Icon, Input, Dropdown } from "semantic-ui-react";

const options = [
	{ key: 'streetfighter', text: 'Street Fighter', value: 'streetfighter' },
	{ key: 'tekken', text: 'Tekken', value: 'tekken' },
	{ key: 'mvci', text: 'Marvel vs Capcom: Infinite ', value: 'mvci' },
	{ key: 'dbfz', text: 'Dragon Ball FighterZ', value: 'dbfz' },
	{ key: 'bbtag', text: 'BlazBlue Cross Tag Battle', value: 'bbtag' },
	{ key: 'samsho', text: 'Samurai Shodown', value: 'samsho' },
	{ key: 'unib', text: 'Under Night In-Birth', value: 'unib' },
	{ key: 'mk', text: 'Mortal Kombat 11', value: 'mk' },
	{ key: 'sc', text: 'Soul Calibur 6', value: 'sc' }
];

class Translator extends Component {
    render () {
        return (
            <Input
                size = "large"
                type = "search"
                placeholder = "Example: cr.mk, qcf+p"
                value = { this.props.valueProp }
                onChange = { this.props.inputProp }
            >
            </Input>
        )
    }
}

export default Translator
