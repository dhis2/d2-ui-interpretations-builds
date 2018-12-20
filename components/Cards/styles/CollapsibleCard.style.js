export var styles = function styles(theme) {
    return {
        card: {
            margin: '4px',
            position: 'relative'
        },

        actions: {
            marginTop: '0px',
            marginRight: '-4px',
            '& button': {
                padding: '8px'
            }
        },

        header: {
            padding: '0px 12px 0px 12px'
        },

        title: {
            fontSize: '15px',
            fontWeight: 500
        },

        content: {
            padding: '0px',
            paddingBottom: '0 !important',
            borderTop: '1px solid lightgrey'
        },

        collapse: {
            clear: 'both'
        },

        expand: {
            background: 'none',
            transform: 'rotate(0deg)',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest
            })
        },

        expandOpen: {
            transform: 'rotate(180deg)'
        }

    };
};