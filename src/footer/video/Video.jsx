import './Video.scss'
import video1 from '../../assets/video1.png';
import video2 from '../../assets/video2.png';
function Video(){

    return(
        <section className='video'>
            <div className="video-title">
                <p className="video-title__text">
                    Видео о нас
                </p>
                <div className="video-title__buttons">
                    <a href="#" className="video-title__buttons_previous">&#8249;</a>
                    <a href="#" className="video-title__buttons_next">&#8250;</a>
                </div>

            </div>

            <div className="video-wrapper">
                <video controls poster={ video1 }>
                    <source src="#" type="video/mp4"/>
                        <source src="#" type="video/ogg"/>
                            Your browser does not support the video tag.
                </video>
                <video controls poster={ video2 }>
                    <source src="#" type="video/mp4"/>
                    <source src="#" type="video/ogg"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>

    )
}
export default Video;
