import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    // USING CONTEXT
    // static contextType = LanguageContext;

    // render() {
    //     const text = this.context === 'english' ? 'Submit' : 'Siųsti';
    //     return (
    //         <button className="ui button primary">{text}</button>
    //     )
    // }

    // USING CONSUMER
    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {({ language }) => language === 'english' ? 'Submit' : 'Siųsti'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        )
    }
}

export default Button;