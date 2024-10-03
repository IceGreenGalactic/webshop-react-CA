import { children as children } from "react";
import {ThemeProvider} from 'styled-components';

const theme = {
    color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background:'var(--color-background)',
        cardBackground:'var(--color-cards-background)',
        btnHover: 'var(--color-btnHover-background)',
    },
   
};



export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme; 