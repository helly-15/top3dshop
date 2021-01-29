import './About.scss';
import groupPhoto from '../assets/groupphoto.png'
import History from "./history/History";

function About() {

    return (
        <main className="about">
            <img src={ groupPhoto } alt="group photo" className="about-img"/>
            <section className="about-description">
                <div className="about-description__resume">
                    <p className="about-description__job">
                        Твоя работа<br/>
                        в крупнейшем интеграторе<br/>
                        цифрового производства
                    </p>
                    <button className="about-description__button">
                        Отправить резюме
                    </button>
                    <p className="about-description__agreement">
                        Нажимая кнопку, вы соглашаетесь<br/>
                        на обработку персональных данных.
                    </p>
                </div>
                <p className="about-description__text">
                    Top 3D Shop – лидер по продажам 3D-оборудования в России и странах СНГ. В 2018 мы стали лучшим
                    интегратором 3D оборудования по аддитивным технологиям и цифровому производству по версии <a
                    href='#'>3D Print Awards</a>.<br/><br/>
                    За 6 лет работы более 10 000 клиентов по всей России и СНГ выбрали Top 3D Shop. В 2018 наш оборот
                    составил 600 млн. рублей, в компании работает более 100 сотрудников.<br/><br/>
                    Новая цель: 1 млрд торгового оборота в этом году и выход на международные рынки. Если вы —
                    целеустремленный специалист, готовый учиться новым навыкам и учить других, мыслите не просто как
                    исполнитель, а как владелец своего направления, то нам по пути!
                </p>

            </section>
            <History/>
        </main>
    )
}

export default About;
