import React, { useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { Burger, Menu, Header, Main, Footer } from './components';

const App = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = 'main-menu';

    useOnClickOutside(node, () => setOpen(false));

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <div ref={node}>
                    <FocusLock disabled={!open}>
                        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                        <Menu open={open} setOpen={setOpen} id={menuId} />
                    </FocusLock>
                </div>
                <Header />
                <Main />
                <Footer />
            </>
        </ThemeProvider>
    );
};

export default App;
