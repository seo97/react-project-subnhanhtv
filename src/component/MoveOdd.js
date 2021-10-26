import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import MoveHots from '../component/MoveHots.js'
import { OddHot } from '../data/OddHot.js'

export default function NewMove({ url, name }) {
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        function fetchAPI() {
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        setItems(result);
                    },
                    (error) => {
                        setError(error);
                    }
                )
        }
        fetchAPI();
    }, []);

    if (error) {
        return console.log(error);
    } else {
        return (
            <div className="main__sections">
                <div className="main__header">
                    <h2 className="main__header-title">{name}</h2>
                </div>
                <div className="main__cartegory">
                    <div className="main__moveList">
                        {items.map(item => (
                            <div className="main__item" key={item.id}>
                                <div className="main__item-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="main__item-desc">
                                    <h3 className="main__item-title">{item.name}</h3>
                                    <p className="main__item-type">
                                        <FontAwesomeIcon icon={faTag} />
                                        <span>{item.type}</span>
                                    </p>
                                </div>
                                <div className="main__item-label">
                                    <span>{item.parts}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="main__hotList">
                        <MoveHots
                            url={OddHot}
                            name='Phim bộ hot'
                        />
                    </div>
                </div>
            </div>
        )
    }

}