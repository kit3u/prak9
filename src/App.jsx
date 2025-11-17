import BlogCard from './components/BlogCard';
import './App.css';

function App() {
  return (
    <main>
      <BlogCard 
        image="./assets/images/Blog Image.png"
        category="HTML & CSS"
        date="Публікація 17 Листопада 2025"
        title="Практична №3"
        description="Мета практичної роботи полягає в тому, щоб налаштувати середовище розробки VS Code, а також реалізувати картку блоку для вдосконалення фундаментальних навичок з HTML та CSS."
        authorImage="./assets/images/avatar_male.png"
        authorName="Pashinska Viktoriaa"
      />
    </main>
  );
}

export default App;