import { Spinner } from "./icons/FontAwesome/Spinner";
import { AppBody } from "./layout/AppBody";

export const Loader = () => (
    <AppBody className="playground-loader-container flex flex-column">
        <div className="playground-loader" />
        <div className="mx-auto mt-20 flex">
            <div className="playground-loader-text">Laster...</div>
        </div>
    </AppBody>
)