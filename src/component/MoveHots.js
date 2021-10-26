
/* import { useState, useEffect } from 'react' */

export default function MoveHots({ url, name }) {
    /* const [error, setError] = useState(null);
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
    } else { */
    return (
        <>
            <div className="main__hotList-heading">{name}</div>
            <div className="main__hotsList-category">
                {url.map(item =>
                (
                    <div className="main__hotList-item" key={item.id}>
                        <div className="main__hotList-img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="main__hotList-desc">
                            <h4 className="main__hotList-title">{item.name}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

