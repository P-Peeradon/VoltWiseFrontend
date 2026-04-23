import { Component } from 'react';

class Card extends Component {
    render() {
        const {
            as: Element = 'div',
            className = '',
            children,
            ...props
        } = this.props;

        return (
            <Element
                className={`bg-white rounded-4xl overflow-hidden ${className}`}
                {...props}
            >
                {children}
            </Element>
        );
    }
}

export default Card;
