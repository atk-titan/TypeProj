import DisplayText from "@/component/DisplayText";
import axios from "axios";

const getParagraphFromAPI = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/single-player");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const singlePlayer = async () => {
    const { paragraph } = await getParagraphFromAPI();

    return (
        <div>
            <div>
                <DisplayText paragraph={paragraph} />
            </div>
        </div>
    )
}

export default singlePlayer;