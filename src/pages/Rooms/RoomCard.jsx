import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const RoomCard = ({ room }) => {
    const { image, room_type, _id } = room;

    return (
        <div>
            <Link to={`/room/${_id}`}>
                <div className="flex flex-col lg:flex-row  p-5 bg-gray-100 rounded-lg ">
                    <div className="flex-1 ">
                        <img className="max-h-40 max-w-56 rounded-l-lg" src={image} alt="" />
                    </div>
                    <div className="flex-1  bg-base-100 rounded-r-lg">
                        <p>{room_type}</p>
                        <p>review:</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

// Props validation
RoomCard.propTypes = {
    room: PropTypes.shape({
        image: PropTypes.string.isRequired,
        room_type: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired
};

export default RoomCard;
