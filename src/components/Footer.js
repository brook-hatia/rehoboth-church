import "./styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return (
        <footer>
            <p>@2022 Rehoboth Church. All right reserved</p>

            <div className="footer-links">
                    <div>
                        <FacebookIcon/>
                        <p>Facebook</p>
                    </div>

                    <div>
                        <YouTubeIcon/>
                        <p>YouTube</p>
                    </div>
                </div>
        </footer>
    )
}