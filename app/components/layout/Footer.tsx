import React from 'react';
import '../../styles/footer.css'
const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-column">
                        <p>Мобильные приложения</p>
                        <p>Помощь и Обратная связь</p>
                        <p>Рекламные услуги</p>
                        <p>Бизнес на OLX</p>
                        <p>Блог OLX</p>
                        <p>Условия использования</p>
                        <p>Политика конфиденциальности</p>
                        <p>Баннерная реклама</p>
                    </div>
                    <div className="footer-column">
                        <p>Правила безопасности</p>
                        <p>Карта сайта</p>
                        <p>Карта регионов</p>
                        <p>Популярные запросы</p>
                        <p>Работа в OLX</p>
                    </div>
                </div>
                <div className="footer-app-links">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="app-badge" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/App_Store_%28iOS%29.svg/2560px-App_Store_%28iOS%29.svg.png" alt="App Store" className="app-badge" />
                    <p>Бесплатное приложение для твоего телефона</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
