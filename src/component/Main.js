import NewMove from "../component/NewMove.js"
import MoveOdd from "../component/MoveOdd.js"
import Cartoon from "../component/Cartoon.js"

export default function Main() {
    return (
        <main className="main">
            <NewMove
            />
            <MoveOdd
                url="https://6172a88e61ed900017c409ba.mockapi.io/api/moveOdd"
                name="Phim lẻ mới"
            />
            <Cartoon
                url="https://6172a88e61ed900017c409ba.mockapi.io/api/cartoon"
                name="Phim hoạt hình"
            />
        </main>
    )
}