import "./styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <div className="footer">
            <div>
                <p>Rehoboth Church 2022. All right reserved</p>
                
            </div>

            <div>
                <div className="footer-links">
                    <div>
                        <div className="footer-icon">
                            <FacebookIcon/>
                        </div>
                        <p>Facebook</p>
                    </div>

                    <div>
                        <div className="footer-icon">
                            <YouTubeIcon/>
                        </div>
                        <p>YouTube</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}