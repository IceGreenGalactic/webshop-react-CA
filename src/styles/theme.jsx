import { children as children } from "react";
import {ThemeProvider} from 'styled-components';

const theme = {
    color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        sale: 'red',
        background:'var(--color-background)',
        cardBackground:'var(--color-cards-background)',
    },
   
};



export const Theme = ({children}) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme; 