import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { home, faq, deals, contact } from '../../constants';

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open}>
            <a href='/'>{home}</a>
            <a href='/faq'>{faq}</a>
            <a href='/deals'>{deals}</a>
            <a href='/contact'>{contact}</a>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: bool.isRequired,
};

export default Menu;
