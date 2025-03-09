/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, TextareaControl, Button } from '@wordpress/components';
import Portfolio from './Portfollio';
import Item from './Item';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { title, items } = attributes;

    const portfolio = new Portfolio(title, items);

    const updateItem = (index, key, value) => {
        portfolio.updateItem(index, key, value);
        setAttributes({ items: [...portfolio.items] });
    };

    const addItem = () => {
        portfolio.addItem(new Item());
        setAttributes({ items: [...portfolio.items] });
    };

    const removeItem = (index) => {
        portfolio.removeItem(index);
        setAttributes({ items: [...portfolio.items] });
    };

    return (
        <div { ...blockProps }>
            <TextControl
                label={ __( 'Portfolio Title', 'portfollio' ) }
                value={ title }
                onChange={ (value) => setAttributes({ title: value }) }
            />
            <div className="portfolio-items">
                { items.map((item, index) => (
                    <div key={ index } className="portfolio-item">
                        <TextControl
                            label={ __( 'Item Title', 'portfollio' ) }
                            value={ item.title }
                            onChange={ (value) => updateItem(index, 'title', value) }
                        />
                        <TextareaControl
                            label={ __( 'Item Description', 'portfollio' ) }
                            value={ item.description }
                            onChange={ (value) => updateItem(index, 'description', value) }
                        />
                        <TextControl
                            label={ __( 'Item Image URL', 'portfollio' ) }
                            value={ item.image }
                            onChange={ (value) => updateItem(index, 'image', value) }
                        />
                        <TextControl
                            label={ __( 'Item Button Link', 'portfollio' ) }
                            value={ item.linkButton }
                            onChange={ (value) => updateItem(index, 'linkButton', value) }
                        />
                        <Button
                            isDestructive
                            onClick={ () => removeItem(index) }
                        >
                            { __( 'Remove Item', 'portfollio' ) }
                        </Button>
                    </div>
                )) }
                <Button
                    isPrimary
                    onClick={ addItem }
                >
                    { __( 'Add Item', 'portfollio' ) }
                </Button>
            </div>
        </div>
    );
}