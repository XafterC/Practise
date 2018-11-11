const app = {
  title: 'Indecision App',
  subtitle: '',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }
};
const remove = () => {
  app.options = [];
  renderOptions();
};

const appRoot = document.getElementById('app');

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>
      <p>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</p>
      <p>{app.options.length}</p>
      
      <ol>
        <li>item one</li>
        <li>item two</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
        <button onClick={remove}>Remove Options</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderOptions();
