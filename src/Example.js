import logo from './logo.svg';
import './App.css';


const Example = () => {
 return (
     <div>
         <div className="faq_reserve__example">
             <div className="faq_reserve__example__header">Пример расчета за один месяц</div>
             <div className="faq_reserve__example__main">
                 <div className="faq_reserve__example__main__top">
                     <div className="faq_reserve__example__main__top__first-title">
                         <div className="faq_reserve__example__main__top__first-title__first">Сторно <br />
                             дней
                         </div>
                         <div className="faq_reserve__example__main__top__first-title__second">Накоплено дней</div>
                         <div className="faq_reserve__example__main__top__first-title__third">Израсходо-<br />
                             вано
                         </div>
                         <div className="faq_reserve__example__main__top__first-title__fourth">Итого</div>
                     </div>
                     <div className="faq_reserve__example__main__top__second-title">Сторно<br />
                         резерва на<br />
                         конец<br />
                         месяца<br />
                         (с ЕСН)
                     </div>
                     <div className="faq_reserve__example__main__top__third-title"> Отпускные (без ЕСН)</div>
                     <div className="faq_reserve__example__main__top__fourth-title">Сумма<br />
                         резерва<br />
                         на конец<br />
                         месяца<br />
                         (с ЕСН)<br />
                     </div>
                     <div className="faq_reserve__example__main__top__fifth-title">Отпускные<br />
                         (c ЕСН)<br />
                     </div>


                 </div>
                 <div className="faq_reserve__example__main__divider"></div>
                 <div className="faq_reserve__example__main__bottom">
                     <div className="faq_reserve__example__main__bottom__info">
                         <div className="faq_reserve__example__main__bottom__info__name">Чилаев Виктор Тихонович</div>
                         <div className="faq_reserve__example__main__bottom__info__role">Кассир</div>
                     </div>
                     <div className="faq_reserve__example__main__bottom__value">
                         <div className="faq_reserve__example__main__bottom__value__block">
                             <div className="faq_reserve__example__main__bottom__value__block__first">28</div>
                             <div className="faq_reserve__example__main__bottom__value__block__second">2,33</div>
                             <div className="faq_reserve__example__main__bottom__value__block__third">10</div>
                             <div className="faq_reserve__example__main__bottom__value__block__fourth">20,33</div>
                         </div>
                         <div className="faq_reserve__example__main__bottom__value__first-item"> 192 150</div>
                         <div className="faq_reserve__example__main__bottom__value__second-item">53 594</div>
                         <div className="faq_reserve__example__main__bottom__value__third-item">141 863</div>
                         <div className="faq_reserve__example__main__bottom__value__fourth-item">69 673</div>

                     </div>
                 </div>

             </div>
             <div className="faq_reserve__example__footer">ЕСН — единый социальный налог (ЕСН) был предназначен для
                 мобилизации средств для реализации права граждан на государственное пенсионное и социальное обеспечение
                 (страхование) и медицинскую помощь. Таким образом взимание страховых платежей в социальные фонды было
                 передано в ведение налоговой службы РФ
             </div>
         </div>
     </div>



  )
}

export default Example;
