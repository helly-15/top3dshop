import './History.scss'


function History(){

    return(
        <section className="history">
            <div className="history-header">
                <p className="history-header__title">
                    Лучше один раз увидеть:
                </p>
                <div className="history-header__line">

                </div>
            </div>
            <div className="history-links">
                <a href="#" className="history-links__link">
                    Как устроена наша компания изнутри
                    <i className="arrow-right"></i>
                </a>
                <a href="#" className="history-links__link">
                    Как создавалась компания - необычная история
                    <i className="arrow-right"></i>
                </a>
                <a href="#" className="history-links__link">
                    Читай о нас на 3D Today
                    <i className="arrow-right"></i>
                </a>
            </div>
        </section>

    )
}
export default History;
