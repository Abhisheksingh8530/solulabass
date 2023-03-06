import FolderIcon from "../assets/navbar/folderIcon.png"
import MainIcon from "../assets/navbar/mainLogo.svg"
import "./Navbar.css";
import newicon from  "../assets/navbar/newicon.png"
import patienticon from "../assets/navbar/patienticon.png"
import reporticon from "../assets/navbar/reporticon.png"
import settingicon from "../assets/navbar/settingicon.png"
import logouticon from "../assets/navbar/logouticon.png"
import uploadicon from "../assets/navbar/uploadicon.png"




const Option = ({ image, optionText, styleClass }) => {
    return (<div className={`option ${styleClass}`}>
        <img src={image} className="option_image" />
        <div className="option_text">{optionText}</div>
    </div> 
    )
}

const Navbar = () => {
    return (
        <nav>
            <Option image={MainIcon} styleClass={"colour_green"} />
            <Option image={newicon} optionText={"new"} />
            <Option image={patienticon} optionText={"patient"}/>
            <Option image={FolderIcon} optionText={"folder"}/>
            <Option image={uploadicon} optionText={"upload"}/>
            <Option image={reporticon} optionText={"report"}/>
            <Option image={settingicon} optionText={"setting"}/>
              <Option image={logouticon} optionText={"logout"}/>

    
            
            
        </nav>
    )
}

export default Navbar;