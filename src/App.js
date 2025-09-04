import React from 'react';
import Article from './Article';

function App() {
  return (
    <div>
      <Article
        title="Цікава стаття про React"
        content="React — це бібліотека для створення інтерфейсів користувача. Вона дозволяє ефективно будувати UI-компоненти та керувати станом."
      />
    </div>
  );
}

export default App;
