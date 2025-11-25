import axios from "axios";
import SinglePlayerPanel from '@/component/SinglePlayerPanel';

const getParagraphFromAPI = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/single-player");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const SinglePlayer = async () => {
    const { paragraph } = await getParagraphFromAPI();

    return (
        <div className="w-full h-full">
            <div className="relative h-full w-full">
                <SinglePlayerPanel paragraph={paragraph} />
            </div>
        </div>
    )
}

export default SinglePlayer;