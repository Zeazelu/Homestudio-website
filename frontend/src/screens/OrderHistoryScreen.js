import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector(state => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);

    return (
        <div>
            <div>
                <h1>Historia zamówień gotowych produktów</h1>
                {loading ? <LoadingBox></LoadingBox> : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (<table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATA</th>
                            <th>CENA</th>
                            <th>OPŁACONO</th>
                            <th>STATUS</th>
                            <th>AKCJE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td>{order.totalPrice.toFixed(2)}zł</td>
                                <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'OCZEKIWANIE NA PŁATNOŚĆ'}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'W REALIZACJI'}</td>
                                <td><button type="button" className="small" onClick={() => { props.history.push(`/order/${order._id}`) }}>Szczegóły</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </div>
        </div>

    );
}