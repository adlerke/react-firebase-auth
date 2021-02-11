import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Header from '../../components/Header';

import './styles.css';

const ListProducts = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Preço</th>
                            </tr>
                        </thead>

                        <tbody>
                            
                                <tr key="1">
                                    <td>1</td>
                                    <td>Top Cafeteira</td>
                                    <td>R$ 20,00</td>
                                </tr>
                                <tr key="2">
                                    <td>2</td>
                                    <td>Top Churrasqueira</td>
                                    <td>R$ 220,00</td>
                                </tr>
                                <tr key="3">
                                    <td>3</td>
                                    <td>Pipoqueira Musa</td>
                                    <td>R$ 120,00</td>
                                </tr>
                                <tr key="4">
                                    <td>4</td>
                                    <td>Mesa Gamer</td>
                                    <td>R$ 2.000,00</td>
                                </tr>
                                <tr key="5">
                                    <td>5</td>
                                    <td>Mouse Gamer</td>
                                    <td>R$ 200.000,00</td>
                                </tr>
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ListProducts;