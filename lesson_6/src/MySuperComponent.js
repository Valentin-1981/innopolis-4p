// Функциональный подход
// Импортируем css файл
import "./MyComponent.css";
// Функцию называем так же, как и файл js\
function MySuperComponent() {
    // Возвращаем код разметки (JSX)
    // Внимание! Обязательно должен быть только ОДИН корневой тег.
    return <div className="MyComponent">Hello, Functional Component!</div>;
}
// Экспортируем созданную функцию
export default MySuperComponent;
