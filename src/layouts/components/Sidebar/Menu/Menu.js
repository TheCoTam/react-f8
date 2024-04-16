import PropTypes from 'prop-types';

function Menu({ children }) {
    return (
        <nav>
            {children}
        </nav>
    )
}

Menu.propTyppes = {
    children: PropTypes.node.isRequired,
}

export default Menu;