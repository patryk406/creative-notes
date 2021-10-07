import Button from 'components/Button/Button'
import GlobalStyle from 'theme/GlobalStyle'
const Root=()=> {
  return (
    <div className="App">
      <GlobalStyle/>
      <Button >close</Button>
      <Button secondary>remove</Button>
     hi
    </div>
  );
}

export default Root;
