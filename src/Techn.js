import logo from './logo.svg';
import './App.css';


const Calculations = () => {
    return (
        <div>
            <div className="faq-reserve_calculations-blocks">
                <div className="faq-reserve_calculations">
                    <div className="faq-reserve_calculations__head">Начисления остатка текущего месяца</div>
                    <div className="faq-reserve_calculations__main">
                        <div className="faq-reserve_calculations__first-block">
                            <div className="faq-reserve_calculations__first-block__first-item">Остаток дней отпуска
                            </div>
                            <div className="faq-reserve_calculations__first-block__x">×</div>
                            <div className="faq-reserve_calculations__first-block__second-item">Средний заработок</div>
                        </div>
                        <div className="faq-reserve_calculations__plus"> +</div>
                        <div className="faq-reserve_calculations__second-block">
                            <div className="faq-reserve_calculations__second-block__text">Страховые взносы</div>
                        </div>

                    </div>

                </div>
                <div className="faq-reserve_calculations__minus"> -</div>
                <div className="faq-reserve_calculations-second">
                    <div className="faq-reserve_calculations-second__head"> Сторно начислений прошлого месяца</div>
                    <div className="faq-reserve_calculations-second__main">
                        <div className="faq-reserve_calculations-second__first-block">
                            <div className="faq-reserve_calculations-second__first-block__first-item">Остаток дней
                                отпуска
                            </div>
                            <div className="faq-reserve_calculations-second__first-block__x"> ×</div>
                            <div className="faq-reserve_calculations-second__first-block__second-item">Средний
                                заработок
                            </div>
                        </div>
                        <div className="faq-reserve_calculations-second__plus">+</div>
                        <div className="faq-reserve_calculations-second__second-block">
                            <div className="faq-reserve_calculations-second__second-block__text">Страховые взносы</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}



export default Calculations;
