/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
    const { title, items } = attributes;

    return (
        <div { ...useBlockProps.save() }>
            <h2>{ title }</h2>
            <div className="portfolio-items">
                { items.map((item, index) => (
                    <div key={ index } className="portfolio-item">
                        <h3>{ item.title }</h3>
                        <p>{ item.description }</p>
                        { item.image && <img src={ item.image } alt={ item.title } /> }
                        { item.linkButton && <a href={ item.linkButton }>{ __( 'Learn More', 'portfollio' ) }</a> }
                    </div>
                )) }
            </div>
        </div>
    );
}
