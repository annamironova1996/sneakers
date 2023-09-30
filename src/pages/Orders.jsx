import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { MainContext } from '../App';

const Orders = () => {
    const { onAddToCard, onAddToFavorites } = useContext(MainContext);
    const [isLoading, setIsLoading] = useState(true);

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(
                    'http://localhost:3001/orders'
                );
                setOrders(data.map((obj) => obj.items).flat());
            } catch (error) {
                console.log('Покупки не отображаются');
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div className="content">
            <div className="content-order">
                <h1>Мои покупки</h1>
                <div className="content-wrap">
                    {(isLoading ? [Array(10)] : orders).map((order) => (
                        <Card
                            key={order.id}
                            onFavorite={(obj) => onAddToFavorites(obj)}
                            isLoading={isLoading}
                            {...order}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
