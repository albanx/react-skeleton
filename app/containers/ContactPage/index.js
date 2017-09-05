/*
 *
 * ContactPage
 *
 */

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import makeSelectContactPage from './selectors';
import messages from './messages';

export class ContactPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div>
                <Helmet
                    title="ContactPage"
                    meta={[
                        {name: 'description', content: 'Description of ContactPage'},
                    ]}
                />
                <FormattedMessage {...messages.header} />
            </div>
        );
    }
}

ContactPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    ContactPage: makeSelectContactPage(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
