import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
    static contextType = LanguageContext;

    render() {
        return (
            <div>Select language:
                <i className="flag gb" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag lt" onClick={() => this.context.onLanguageChange('lithuanian')} />
            </div>
        )
    }
}

export default LanguageSelector;