import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { HashRouter } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://fazm01ecommerce.freewebhostmost.com/public/index.php/graphql', //Refer to ProductDetailsPage.jsx for more details. https://ecommerce-fazm01-scandiweb.000webhostapp.com/public/index.php/graphql
    cache: new InMemoryCache(),
})

const root = createRoot(document.querySelector('#root'));
root.render(
<ApolloProvider client={client}>
<HashRouter>
<App />
</HashRouter>    
</ApolloProvider>

);

