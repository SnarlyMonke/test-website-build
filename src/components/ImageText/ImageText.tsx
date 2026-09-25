// import styles from "./ImageText.module.css"


type Props = {
    children: React.ReactNode; /** text inside */

};


function ImageText({ children }: Props) {
    
    
    return (
        <div>
            {children}
        </div>
    );
}

export default ImageText;