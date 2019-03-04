import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/Avatar.style';

var UserAvatar = function UserAvatar(_ref) {
    var classes = _ref.classes,
        firstName = _ref.firstName,
        surname = _ref.surname;

    var initials = firstName.charAt(0).concat(surname.charAt(0));

    return React.createElement(
        Avatar,
        { color: 'black', className: classes.avatar },
        initials
    );
};

UserAvatar.propTypes = {
    classes: PropTypes.object.isRequired,
    firstName: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
};

export default withStyles(styles)(UserAvatar);