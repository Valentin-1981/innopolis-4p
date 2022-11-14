// App.js
import "./App.css";
// Импортируем компонент (путь должен подсказать VSCode, но можно написать
// самим по аналогии с тем, что представлено здесь
import MySuperComponent from "./MySuperComponent";
function App() {
    return (
        <div className="App">
            {/* Используем название компонента как тег */}
            {/* Кстати, вот так пишутся комментарии внутри кода JSX */}
            <MySuperComponent />
        </div>
    );
}
export default App;
