import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import i18n from '@dhis2/d2-i18n';
import Link from '../Link/Link';
import Interpretation from '../Interpretation/Interpretation';
import { haveReadAccess } from '../../authorization/auth';
import styles from './styles/InterpretationsList.style';

export var interpretationsToShowOnInit = 5;

export var InterpretationsList = function InterpretationsList(_ref) {
    var classes = _ref.classes,
        d2 = _ref.d2,
        model = _ref.model,
        userGroups = _ref.userGroups,
        interpretations = _ref.interpretations,
        onSelect = _ref.onSelect,
        onChange = _ref.onChange,
        isExpanded = _ref.isExpanded,
        toggleShowAllInterpretations = _ref.toggleShowAllInterpretations;

    var filteredItems = interpretations.filter(function (item) {
        return haveReadAccess(d2, userGroups, item) && item;
    });

    var listItems = isExpanded ? filteredItems : filteredItems.slice(-interpretationsToShowOnInit);

    return listItems.length ? React.createElement(
        Fragment,
        null,
        filteredItems.length > interpretationsToShowOnInit && React.createElement(Link, {
            label: (isExpanded ? i18n.t('Hide') : i18n.t('Show')) + ' previous interpretations',
            onClick: toggleShowAllInterpretations
        }),
        listItems.map(function (item) {
            return React.createElement(Interpretation, {
                model: model,
                userGroups: userGroups,
                haveReadAccess: haveReadAccess(d2, userGroups, item),
                key: item.id,
                interpretation: item,
                onChange: onChange,
                onSelect: onSelect,
                extended: false
            });
        })
    ) : React.createElement(
        'div',
        { className: classes.emptyList },
        i18n.t("No interpretations")
    );
};

InterpretationsList.propTypes = {
    classes: PropTypes.object.isRequired,
    d2: PropTypes.object.isRequired,
    model: PropTypes.object.isRequired,
    interpretations: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    toggleShowAllInterpretations: PropTypes.func.isRequired
};

export default withStyles(styles)(InterpretationsList);